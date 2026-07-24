import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { JSDOM } from "jsdom";

const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");

function loadInitialRoute(hash) {
  const dom = new JSDOM(indexHtml, {
    runScripts: "dangerously",
    url: `https://sanctuary.example/${hash}`
  });
  const isPending = dom.window.document.documentElement.classList.contains("route-boot-pending");
  dom.window.close();
  return isPending;
}

test("guards non-default routes before the deferred application loads", () => {
  assert.equal(loadInitialRoute("#ai"), true);
  assert.equal(loadInitialRoute("#faq"), true);
  assert.equal(loadInitialRoute("#services"), true);
});

test("does not hide the default or unknown route", () => {
  assert.equal(loadInitialRoute("#structure"), false);
  assert.equal(loadInitialRoute("#unknown"), false);
  assert.equal(loadInitialRoute(""), false);
});
