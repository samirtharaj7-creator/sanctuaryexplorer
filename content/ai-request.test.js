import assert from "node:assert/strict";
import test from "node:test";

import { appendExplorerAiHistory, createExplorerAiPayload } from "./ai-request.js";

test("sends a first question with empty Gemini history", () => {
  assert.deepEqual(
    createExplorerAiPayload("What does the laver represent?", []),
    { message: "What does the laver represent?", history: [] }
  );
});

test("sends prior successful turns in Gemini history format", () => {
  const history = [
    { role: "user", parts: ["What does the laver represent?"] },
    { role: "model", parts: ["It points to cleansing."] }
  ];
  const payload = createExplorerAiPayload("How does that connect to Christ?", history);

  assert.deepEqual(payload, {
    message: "How does that connect to Christ?",
    history
  });
});

test("appends completed user and model turns without mutating prior history", () => {
  const history = [{ role: "user", parts: ["Earlier question"] }];
  const updated = appendExplorerAiHistory(history, "Current question", "Current reply");

  assert.deepEqual(history, [{ role: "user", parts: ["Earlier question"] }]);
  assert.deepEqual(updated, [
    { role: "user", parts: ["Earlier question"] },
    { role: "user", parts: ["Current question"] },
    { role: "model", parts: ["Current reply"] }
  ]);
});

test("keeps the per-question limit without imposing a conversation-wide cutoff", () => {
  const longHistory = Array.from({ length: 30 }, (_, index) => ({
    role: index % 2 === 0 ? "user" : "model",
    parts: ["x".repeat(1001)]
  }));

  assert.equal(createExplorerAiPayload("x".repeat(1201), []), null);
  assert.deepEqual(createExplorerAiPayload("Follow up", longHistory), {
    message: "Follow up",
    history: longHistory
  });
});
