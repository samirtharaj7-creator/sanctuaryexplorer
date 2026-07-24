import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { JSDOM } from "jsdom";

const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const appJavaScript = await readFile(new URL("../app.js", import.meta.url), "utf8");

function loadInitialRoute(hash) {
  const dom = new JSDOM(indexHtml, {
    runScripts: "dangerously",
    url: `https://sanctuary.example/${hash}`
  });
  const initialView = dom.window.document.documentElement.dataset.initialView || null;
  dom.window.close();
  return initialView;
}

test("reveals the requested route before the application module loads", () => {
  assert.equal(loadInitialRoute("#ai"), "ai");
  assert.equal(loadInitialRoute("#faq"), "faq");
  assert.equal(loadInitialRoute("#services"), "ministry");
});

test("leaves the default or unknown route unchanged", () => {
  assert.equal(loadInitialRoute("#structure"), null);
  assert.equal(loadInitialRoute("#unknown"), null);
  assert.equal(loadInitialRoute(""), null);
});

test("does not use a timed full-page visibility guard", () => {
  assert.doesNotMatch(indexHtml, /route-boot-pending/);
  assert.doesNotMatch(indexHtml, /setTimeout\(\(\) => document\.documentElement/);
});

test("defers the heavy 3D engine until the map is opened", () => {
  assert.doesNotMatch(appJavaScript, /^import .*sanctuary-scene/m);
  assert.match(appJavaScript, /import\("\.\/sanctuary-scene\.js\?v=startup-1"\)/);
  assert.match(appJavaScript, /if \(view === "map"\) \{\s+ensureSanctuaryScene\(\)/);
});

test("uses one Google Fonts stylesheet request", () => {
  const fontStylesheets = indexHtml.match(/<link href="https:\/\/fonts\.googleapis\.com\/css2[^>]+rel="stylesheet"/g) || [];
  assert.equal(fontStylesheets.length, 1);
});
