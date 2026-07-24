import assert from "node:assert/strict";
import test from "node:test";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
globalThis.window = dom.window;

const { renderAssistantMarkdown, renderUserMessage } = await import("./ai-markdown.js");

test("renders GitHub-Flavored Markdown used by assistant replies", () => {
  const output = renderAssistantMarkdown(`
## The Laver

- Represents **cleansing**
- Points to *renewed service*

> A sanctuary connection

| Item | Meaning |
| --- | --- |
| Laver | Cleansing |

- [x] Washed

\`inline code\`

\`\`\`text
fenced code
\`\`\`
`);

  assert.match(output, /<h2>The Laver<\/h2>/);
  assert.match(output, /<strong>cleansing<\/strong>/);
  assert.match(output, /<em>renewed service<\/em>/);
  assert.match(output, /<blockquote>/);
  assert.match(output, /<table>/);
  assert.match(output, /type="checkbox"/);
  assert.match(output, /disabled/);
  assert.match(output, /<code>inline code<\/code>/);
  assert.match(output, /<pre><code/);
});

test("sanitizes unsafe HTML, attributes, protocols, and embedded content", () => {
  const output = renderAssistantMarkdown(`
<script>alert("bad")</script>
<img src="https://tracker.example/pixel" onerror="alert(1)">
<iframe src="https://example.com"></iframe>
<a href="javascript:alert(1)" onclick="alert(1)">unsafe</a>
<input type="text" value="unsafe">
`);

  assert.doesNotMatch(output, /<script|<img|<iframe|onerror|onclick|javascript:|type="text"/i);
  assert.match(output, />unsafe<\/a>/);
});

test("adds safe external-link attributes", () => {
  const output = renderAssistantMarkdown("[Source](https://example.com/reference)");

  assert.match(output, /href="https:\/\/example\.com\/reference"/);
  assert.match(output, /target="_blank"/);
  assert.match(output, /rel="noopener noreferrer"/);
});

test("keeps user messages as escaped plain text", () => {
  const output = renderUserMessage("<strong>not bold</strong>\n**also not bold**");

  assert.match(output, /&lt;strong&gt;not bold&lt;\/strong&gt;/);
  assert.match(output, /\*\*also not bold\*\*/);
  assert.doesNotMatch(output, /<strong>/);
});
