import assert from "node:assert/strict";
import test from "node:test";

import worker from "./index.js";

const origin = "http://localhost:3001";
const env = {
  ALLOWED_ORIGINS: origin,
  PINECONE_API_KEY: "test-key",
  PINECONE_ASSISTANT_HOST: "https://example.pinecone.io",
  PINECONE_ASSISTANT_NAME: "test-assistant"
};

function chatRequest(body) {
  return new Request("https://worker.example/api/assistant-chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: origin
    },
    body: JSON.stringify(body)
  });
}

test("forwards the complete validated conversation to Pinecone", async t => {
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });

  const messages = [
    { role: "user", content: "What does the laver represent?" },
    { role: "assistant", content: "It points to cleansing." },
    { role: "user", content: "How does that connect to Christ?" }
  ];
  let forwardedRequest;
  globalThis.fetch = async (url, init) => {
    forwardedRequest = { url, init };
    return Response.json({
      message: { content: "It points to Christ's cleansing ministry." },
      citations: [
        { references: [{ file: { id: "book-1", name: "Study.pdf" }, pages: [12] }] }
      ]
    });
  };

  const response = await worker.fetch(chatRequest({ messages }), env);
  const result = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(JSON.parse(forwardedRequest.init.body), { messages, stream: false });
  assert.deepEqual(result.citations, [{ name: "Study.pdf", pages: [12] }]);
});

test("rejects conversations beyond the existing 12-message limit", async t => {
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  globalThis.fetch = async () => {
    assert.fail("Pinecone should not be called for an invalid conversation");
  };

  const messages = Array.from({ length: 13 }, (_, index) => ({
    role: index % 2 === 0 ? "user" : "assistant",
    content: `Message ${index + 1}`
  }));
  const response = await worker.fetch(chatRequest({ messages }), env);

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { error: "Please send a valid sanctuary question." });
});

test("rejects invalid conversation content before calling Pinecone", async t => {
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  globalThis.fetch = async () => {
    assert.fail("Pinecone should not be called for an invalid conversation");
  };

  const response = await worker.fetch(
    chatRequest({ messages: [{ role: "user", content: "x".repeat(1201) }] }),
    env
  );

  assert.equal(response.status, 400);
});

test("rejects conversations beyond the existing 9,000-character total limit", async t => {
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
  globalThis.fetch = async () => {
    assert.fail("Pinecone should not be called for an invalid conversation");
  };

  const messages = Array.from({ length: 9 }, (_, index) => ({
    role: index % 2 === 0 ? "user" : "assistant",
    content: "x".repeat(1001)
  }));
  const response = await worker.fetch(chatRequest({ messages }), env);

  assert.equal(response.status, 400);
});
