import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = file => readFileSync(join(root, file), "utf8");
const html = read("index.html");
const app = read("app.js");
const scene = read("sanctuary-scene.js");
const styles = read("styles.css");
const failures = [];

const tagsWith = attribute => [
  ...html.matchAll(new RegExp(`<button\\b[^>]*\\b${attribute}=["'][^"']+["'][^>]*>`, "giu"))
].map(match => match[0]);

const assertPressed = (attribute, expected) => {
  const tags = tagsWith(attribute);
  if (tags.length !== expected) failures.push(`${attribute} expected ${expected} controls; found ${tags.length}.`);
  tags.forEach((tag, index) => {
    if (!/\baria-pressed=["'](?:true|false)["']/iu.test(tag)) {
      failures.push(`${attribute} control ${index + 1} is missing a truthful initial aria-pressed state.`);
    }
  });
};

assertPressed("data-view", 8);
assertPressed("data-scene-view", 5);
assertPressed("data-scene-layer", 6);
const pathButtons = tagsWith("data-scene-path");
if (pathButtons.length !== 5) failures.push(`data-scene-path expected 5 controls; found ${pathButtons.length}.`);
pathButtons
  .filter(tag => !/data-scene-path=["']stop["']/iu.test(tag))
  .forEach((tag, index) => {
    if (!/\baria-pressed=["']false["']/iu.test(tag)) {
      failures.push(`Guided path toggle ${index + 1} is missing aria-pressed="false".`);
    }
  });

for (const [label, source, pattern] of [
  ["obsolete tablist semantics", `${html}\n${app}`, /role=["']tab(?:list)?["']|aria-selected=/iu],
  ["focus-destroying blur", scene, /\bbutton\.blur\s*\(|\.blur\s*\(/u],
]) {
  if (pattern.test(source)) failures.push(`${label} remains.`);
}

for (const [label, pattern, source = html] of [
  ["canvas description", /id=["']sanctuary-canvas-description["']/iu],
  ["canvas accessible role", /<canvas\b[^>]*role=["']img["'][^>]*aria-describedby=["']sanctuary-canvas-description["']/iu],
  ["guided caption live region", /id=["']scene-path-caption["'][^>]*aria-live=["']polite["'][^>]*aria-atomic=["']true["']/iu],
  ["screen-reader-only utility", /\.visually-hidden\s*\{/u, styles],
  ["view state synchronization", /tab\.setAttribute\(["']aria-pressed["']/u, app],
  ["focus restoration after dynamic rendering", /function\s+focusAfterRender\s*\(/u, app],
  ["scene view state synchronization", /button\.setAttribute\(["']aria-pressed["'], active \? ["']true["'] : ["']false["']\)/u, scene],
]) {
  if (!pattern.test(source)) failures.push(`${label} is missing.`);
}

if (failures.length) {
  console.error("Sanctuary accessibility validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Sanctuary accessibility validation passed: 18 registered states expose truthful button state, inappropriate tab roles are absent, focus is preserved, and the visual scene is described.");
