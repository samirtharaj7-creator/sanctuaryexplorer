import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const sceneJavaScript = await readFile(new URL("../sanctuary-scene.js", import.meta.url), "utf8");
const styles = await readFile(new URL("../styles.css", import.meta.url), "utf8");

test("the 3D canvas fills the fullscreen scene frame", () => {
  assert.match(styles, /\.scene-frame:fullscreen[\s\S]*height: 100vh/);
  assert.match(styles, /\.scene-frame:fullscreen #sanctuary-canvas[\s\S]*height: 100% !important/);
  assert.match(styles, /\.scene-frame:-webkit-full-screen #sanctuary-canvas/);
});

test("the renderer responds to frame and fullscreen size changes", () => {
  assert.match(sceneJavaScript, /new ResizeObserver\(\(\) => this\.resize\(\)\)/);
  assert.match(sceneJavaScript, /document\.addEventListener\("fullscreenchange"/);
  assert.match(sceneJavaScript, /requestAnimationFrame\(\(\) => this\.resize\(\)\)/);
});

test("the fullscreen control toggles entry, exit, and accessible state", () => {
  assert.match(indexHtml, /id="fullscreen-scene"[^>]+aria-pressed="false"/);
  assert.match(sceneJavaScript, /document\.fullscreenElement === this\.frame/);
  assert.match(sceneJavaScript, /document\.exitFullscreen/);
  assert.match(sceneJavaScript, /fullscreenButton\.setAttribute\("aria-pressed"/);
});
