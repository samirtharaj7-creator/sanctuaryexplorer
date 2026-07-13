#!/usr/bin/env python3
"""Import edited workbook fields back into the Sanctuary Explorer content modules."""

from __future__ import annotations

import argparse
import ast
from collections import Counter, defaultdict
from dataclasses import dataclass
import html as html_lib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
import zipfile


ROOT = Path(__file__).resolve().parents[1]
FIELD_MAP = ROOT / "editorial" / "Sanctuary_Explorer_Content_Field_Map.json"
BASELINE_WORKBOOK = ROOT / "editorial" / "Sanctuary_Explorer_Content_Workbook.docx"
NODE = Path(
    os.environ.get(
        "SANCTUARY_NODE",
        "/Users/samuel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node",
    )
)

WORD_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
FIELD_RE = re.compile(r"\s*\[\[(F\d{4})\]\][ \t]?(.*)", re.DOTALL)
IDENTIFIER_RE = re.compile(r"[A-Za-z_$][A-Za-z0-9_$]*")


@dataclass(frozen=True)
class StringToken:
    index: int
    start: int
    end: int
    raw: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Validate a revised content workbook and import its marked fields."
    )
    parser.add_argument("workbook", type=Path, help="Revised .docx workbook")
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Write validated changes. Without this flag, perform a dry run.",
    )
    return parser.parse_args()


def paragraph_text(paragraph: ET.Element) -> str:
    parts: list[str] = []
    for node in paragraph.iter():
        if node.tag == WORD_NS + "t":
            parts.append(node.text or "")
        elif node.tag == WORD_NS + "br":
            parts.append("\n")
        elif node.tag == WORD_NS + "tab":
            parts.append("\t")
    return "".join(parts)


def extract_fields(workbook: Path) -> tuple[list[str], dict[str, str]]:
    if not workbook.is_file():
        raise FileNotFoundError(workbook)
    with zipfile.ZipFile(workbook) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))

    order: list[str] = []
    fields: dict[str, str] = {}
    for paragraph in root.iter(WORD_NS + "p"):
        text = paragraph_text(paragraph)
        if not re.search(r"\[\[F\d{4}\]\]", text):
            continue
        match = FIELD_RE.fullmatch(text)
        if not match:
            raise ValueError(f"Could not parse marked paragraph: {text[:160]!r}")
        field_id, value = match.groups()
        if field_id in fields:
            raise ValueError(f"Duplicate field marker: {field_id}")
        order.append(field_id)
        fields[field_id] = value
    return order, fields


def validate_field_order(label: str, order: list[str], expected: list[str]) -> None:
    if order == expected:
        return
    missing = sorted(set(expected) - set(order))
    extra = sorted(set(order) - set(expected))
    duplicates = sorted(field for field, count in Counter(order).items() if count > 1)
    raise ValueError(
        f"{label} field markers do not match the map: "
        f"expected={len(expected)}, found={len(order)}, missing={missing[:10]}, "
        f"extra={extra[:10]}, duplicates={duplicates[:10]}"
    )


def parse_content_path(path: str) -> list[str | int]:
    match = IDENTIFIER_RE.match(path)
    if not match:
        raise ValueError(f"Invalid content path: {path}")
    parts: list[str | int] = [match.group(0)]
    position = match.end()
    decoder = json.JSONDecoder()

    while position < len(path):
        if path[position] == ".":
            match = IDENTIFIER_RE.match(path, position + 1)
            if not match:
                raise ValueError(f"Invalid property in content path: {path}")
            parts.append(match.group(0))
            position = match.end()
            continue
        if path[position] != "[":
            raise ValueError(f"Invalid content path segment: {path[position:]} in {path}")
        position += 1
        if position < len(path) and path[position] == '"':
            value, consumed = decoder.raw_decode(path[position:])
            position += consumed
            if position >= len(path) or path[position] != "]":
                raise ValueError(f"Unclosed string key in content path: {path}")
            parts.append(value)
            position += 1
            continue
        end = path.find("]", position)
        if end == -1:
            raise ValueError(f"Unclosed array index in content path: {path}")
        parts.append(int(path[position:end]))
        position = end + 1
    return parts


def scan_string_tokens(source: str) -> list[StringToken]:
    tokens: list[StringToken] = []
    position = 0
    while position < len(source):
        char = source[position]
        if source.startswith("//", position):
            newline = source.find("\n", position + 2)
            position = len(source) if newline == -1 else newline + 1
            continue
        if source.startswith("/*", position):
            end = source.find("*/", position + 2)
            if end == -1:
                raise ValueError("Unclosed block comment in content source")
            position = end + 2
            continue
        if char not in {'"', "'", "`"}:
            position += 1
            continue

        quote = char
        start = position
        position += 1
        has_interpolation = False
        while position < len(source):
            if source[position] == "\\":
                position += 2
                continue
            if quote == "`" and source.startswith("${", position):
                has_interpolation = True
            if source[position] == quote:
                position += 1
                break
            position += 1
        else:
            raise ValueError(f"Unclosed string literal at offset {start}")

        if has_interpolation:
            raise ValueError("Template interpolation is not supported in content modules")
        tokens.append(
            StringToken(
                index=len(tokens),
                start=start,
                end=position,
                raw=source[start:position],
            )
        )
    return tokens


def next_non_whitespace(source: str, position: int) -> str:
    while position < len(source) and source[position].isspace():
        position += 1
    return source[position] if position < len(source) else ""


def is_property_key(source: str, token: StringToken) -> bool:
    return next_non_whitespace(source, token.end) == ":"


def is_import_specifier(source: str, token: StringToken) -> bool:
    prefix = source[max(0, token.start - 80) : token.start]
    return bool(re.search(r"\b(?:from|import)\s*$", prefix))


def decode_string_literal(raw: str) -> str:
    if raw.startswith("`"):
        return raw[1:-1]
    return ast.literal_eval(raw)


def splice_replacements(source: str, replacements: list[tuple[int, int, str]]) -> str:
    result = source
    previous_start = len(source) + 1
    for start, end, replacement in sorted(replacements, reverse=True):
        if end > previous_start:
            raise ValueError("Overlapping source replacements")
        result = result[:start] + replacement + result[end:]
        previous_start = start
    return result


def capture_source_tokens(
    source_path: Path,
    records: list[dict[str, str]],
) -> tuple[str, dict[int, StringToken], dict[str, int]]:
    source = source_path.read_text(encoding="utf-8")
    tokens = scan_string_tokens(source)
    instrumentation: list[tuple[int, int, str]] = []

    for token in tokens:
        if is_import_specifier(source, token):
            value = decode_string_literal(token.raw)
            if value.startswith("."):
                resolved = (source_path.parent / value).resolve().as_uri()
                instrumentation.append(
                    (token.start, token.end, json.dumps(resolved, ensure_ascii=False))
                )
            continue
        if is_property_key(source, token):
            continue
        instrumentation.append(
            (
                token.start,
                token.end,
                f"globalThis.__SANCTUARY_CAPTURE__({token.index}, {token.raw})",
            )
        )

    instrumented_source = splice_replacements(source, instrumentation)
    export_names = sorted({parse_content_path(record["path"])[0] for record in records})
    requests = [
        {
            "fieldId": record["fieldId"],
            "segments": parse_content_path(record["path"]),
        }
        for record in records
    ]
    root_entries = ", ".join(f"{json.dumps(name)}: {name}" for name in export_names)
    node_script = f"""
globalThis.__SANCTUARY_CAPTURE__ = (tokenIndex, value) => ({{
  __sanctuaryToken: tokenIndex,
  __sanctuaryValue: value
}});
{instrumented_source}
const __sanctuaryRoot = {{ {root_entries} }};
const __sanctuaryRequests = {json.dumps(requests, ensure_ascii=False)};
const __sanctuaryResult = __sanctuaryRequests.map((request) => {{
  let value = __sanctuaryRoot;
  for (const segment of request.segments) value = value[segment];
  return {{
    fieldId: request.fieldId,
    tokenIndex: value && value.__sanctuaryToken,
    value: value && value.__sanctuaryValue
  }};
}});
process.stdout.write(JSON.stringify(__sanctuaryResult));
"""
    completed = subprocess.run(
        [str(NODE), "--input-type=module"],
        cwd=ROOT,
        input=node_script,
        check=False,
        capture_output=True,
        text=True,
    )
    if completed.returncode:
        raise RuntimeError(
            f"Could not instrument {source_path.relative_to(ROOT)}:\n{completed.stderr}"
        )

    captured = json.loads(completed.stdout)
    field_to_token: dict[str, int] = {}
    for item in captured:
        if not isinstance(item.get("tokenIndex"), int):
            raise ValueError(
                f"Field {item['fieldId']} in {source_path.relative_to(ROOT)} "
                "does not resolve to a local string literal"
            )
        field_to_token[item["fieldId"]] = item["tokenIndex"]

    if len(set(field_to_token.values())) != len(field_to_token):
        raise ValueError(f"Multiple fields resolve to one token in {source_path}")
    token_by_index = {token.index: token for token in tokens}
    return source, token_by_index, field_to_token


def preserve_html_structure(original: str, revised_visible: str) -> str:
    prefix = re.fullmatch(r"<strong>(.*?)</strong>(.*)", original, re.DOTALL)
    if prefix:
        strong_markup, trailing = prefix.groups()
        strong_visible = re.sub(r"<[^>]+>", "", html_lib.unescape(strong_markup))
        if revised_visible.startswith(strong_visible):
            revised_trailing = revised_visible[len(strong_visible) :]
            return (
                f"<strong>{strong_markup}</strong>"
                + html_lib.escape(revised_trailing, quote=False)
            )

    suffix = re.fullmatch(r"(.*)<strong>(.*?)</strong>", original, re.DOTALL)
    if suffix:
        leading, strong_markup = suffix.groups()
        strong_visible = re.sub(r"<[^>]+>", "", html_lib.unescape(strong_markup))
        if revised_visible.endswith(strong_visible):
            revised_leading = revised_visible[: -len(strong_visible)]
            return (
                html_lib.escape(revised_leading, quote=False)
                + f"<strong>{strong_markup}</strong>"
            )

    anchor = re.search(r"<a\b[^>]*>(.*?)</a>", original, re.DOTALL)
    if anchor:
        anchor_visible = re.sub(r"<[^>]+>", "", html_lib.unescape(anchor.group(1)))
        if anchor_visible and anchor_visible in revised_visible:
            leading, trailing = revised_visible.split(anchor_visible, 1)
            return (
                html_lib.escape(leading, quote=False)
                + anchor.group(0)
                + html_lib.escape(trailing, quote=False)
            )

    raise ValueError(
        "A revised HTML-backed field cannot be merged without losing markup: "
        f"original={original!r}, revised={revised_visible!r}"
    )


def source_value(record: dict[str, str], baseline_visible: str, revised: str) -> str:
    current = record["currentText"]
    if current == baseline_visible:
        return revised
    if "<" in current and ">" in current:
        return preserve_html_structure(current, revised)
    raise ValueError(
        f"Baseline text for {record['fieldId']} does not match its source value"
    )


def main() -> int:
    args = parse_args()
    workbook = args.workbook.expanduser().resolve()
    field_map = json.loads(FIELD_MAP.read_text(encoding="utf-8"))
    expected_ids = [record["fieldId"] for record in field_map]

    baseline_order, baseline_fields = extract_fields(BASELINE_WORKBOOK)
    revised_order, revised_fields = extract_fields(workbook)
    validate_field_order("Baseline workbook", baseline_order, expected_ids)
    validate_field_order("Revised workbook", revised_order, expected_ids)

    changed_records = [
        record
        for record in field_map
        if revised_fields[record["fieldId"]] != baseline_fields[record["fieldId"]]
    ]
    records_by_source: dict[str, list[dict[str, str]]] = defaultdict(list)
    changes_by_source: dict[str, list[dict[str, str]]] = defaultdict(list)
    for record in field_map:
        records_by_source[record["source"]].append(record)
    for record in changed_records:
        changes_by_source[record["source"]].append(record)

    staged_sources: dict[Path, str] = {}
    for source_name, records in records_by_source.items():
        source_path = ROOT / source_name
        source, tokens, field_tokens = capture_source_tokens(source_path, records)
        replacements: list[tuple[int, int, str]] = []
        for record in changes_by_source.get(source_name, []):
            field_id = record["fieldId"]
            token = tokens[field_tokens[field_id]]
            replacement_value = source_value(
                record,
                baseline_fields[field_id],
                revised_fields[field_id],
            )
            replacements.append(
                (
                    token.start,
                    token.end,
                    json.dumps(replacement_value, ensure_ascii=False),
                )
            )
        if replacements:
            staged_sources[source_path] = splice_replacements(source, replacements)

    print(f"Validated markers: {len(expected_ids)}")
    print(f"Changed fields: {len(changed_records)}")
    for source_name in sorted(changes_by_source):
        print(f"  {source_name}: {len(changes_by_source[source_name])}")

    if not args.apply:
        print("Dry run complete. Re-run with --apply to write the changes.")
        return 0

    for source_path, updated_source in staged_sources.items():
        source_path.write_text(updated_source, encoding="utf-8")
    print(f"Updated content modules: {len(staged_sources)}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (FileNotFoundError, ValueError, RuntimeError, zipfile.BadZipFile) as error:
        print(f"Import failed: {error}", file=sys.stderr)
        raise SystemExit(1)
