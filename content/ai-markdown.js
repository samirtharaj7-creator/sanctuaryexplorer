import DOMPurify from "../vendor/dompurify/purify.es.mjs";
import { marked } from "../vendor/marked/marked.esm.js";

const SANITIZE_OPTIONS = {
  ALLOWED_TAGS: [
    "a",
    "blockquote",
    "br",
    "code",
    "del",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "input",
    "li",
    "ol",
    "p",
    "pre",
    "strong",
    "table",
    "tbody",
    "td",
    "th",
    "thead",
    "tr",
    "ul"
  ],
  ALLOWED_ATTR: ["align", "checked", "disabled", "href", "rel", "target", "title", "type"],
  ALLOW_ARIA_ATTR: false,
  ALLOW_DATA_ATTR: false
};

DOMPurify.addHook("afterSanitizeAttributes", node => {
  if (node.tagName === "A" && node.hasAttribute("href")) {
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener noreferrer");
  }

  if (node.tagName === "INPUT") {
    if ((node.getAttribute("type") || "").toLowerCase() !== "checkbox") {
      node.remove();
      return;
    }

    node.setAttribute("type", "checkbox");
    node.setAttribute("disabled", "");
  }
});

marked.setOptions({
  async: false,
  breaks: false,
  gfm: true
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderAssistantMarkdown(value) {
  const source = String(value ?? "").replace(/\r\n?/g, "\n");
  const parsed = marked.parse(source);
  return DOMPurify.sanitize(parsed, SANITIZE_OPTIONS);
}

export function renderUserMessage(value) {
  return escapeHtml(value)
    .split(/\n{2,}/)
    .filter(Boolean)
    .map(paragraph => `<p>${paragraph.replaceAll("\n", "<br>")}</p>`)
    .join("");
}
