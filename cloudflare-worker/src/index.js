const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1200;
const MAX_TOTAL_LENGTH = 9000;
const REQUEST_TIMEOUT_MS = 55000;

function allowedOrigins(env) {
  return new Set(
    String(env.ALLOWED_ORIGINS || "")
      .split(",")
      .map(value => value.trim())
      .filter(Boolean)
  );
}

function corsHeaders(origin, env) {
  const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Vary": "Origin"
  };
  if (origin && allowedOrigins(env).has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function jsonResponse(body, status, origin, env, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin, env), ...extraHeaders }
  });
}

function validateMessages(input) {
  if (!Array.isArray(input) || input.length < 1 || input.length > MAX_MESSAGES) return null;

  const messages = [];
  let totalLength = 0;
  for (const item of input) {
    if (!item || !["user", "assistant"].includes(item.role) || typeof item.content !== "string") return null;
    const content = item.content.trim();
    if (!content || content.length > MAX_MESSAGE_LENGTH) return null;
    totalLength += content.length;
    messages.push({ role: item.role, content });
  }

  if (totalLength > MAX_TOTAL_LENGTH || messages.at(-1)?.role !== "user") return null;
  return messages;
}

function citationKey(reference) {
  const file = reference?.file || {};
  return `${file.id || file.name || "source"}:${(reference?.pages || []).join(",")}`;
}

function publicCitations(citations) {
  const unique = new Map();
  for (const citation of Array.isArray(citations) ? citations : []) {
    for (const reference of Array.isArray(citation?.references) ? citation.references : []) {
      const name = reference?.file?.name;
      if (!name) continue;
      const pages = Array.isArray(reference.pages)
        ? reference.pages.filter(page => Number.isInteger(page) && page > 0).slice(0, 12)
        : [];
      const key = citationKey(reference);
      if (!unique.has(key)) unique.set(key, { name: String(name).slice(0, 240), pages });
    }
  }
  return [...unique.values()].slice(0, 12);
}

function safeHost(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

async function handleChat(request, env, origin) {
  if (!env.PINECONE_API_KEY) {
    return jsonResponse({ error: "Explorer AI has not been configured yet." }, 503, origin, env);
  }

  const host = safeHost(env.PINECONE_ASSISTANT_HOST || "https://prod-1-data.ke.pinecone.io");
  if (!host) return jsonResponse({ error: "Explorer AI has an invalid host configuration." }, 503, origin, env);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Please send a valid sanctuary question." }, 400, origin, env);
  }

  const userMessage = typeof body?.message === "string" ? body.message.trim() : "";
  const messages = validateMessages(userMessage ? [{ role: "user", content: userMessage }] : null);
  if (!messages) {
    return jsonResponse({ error: "Please send a valid sanctuary question." }, 400, origin, env);
  }

  if (env.AI_RATE_LIMITER) {
    const address = request.headers.get("CF-Connecting-IP") || "anonymous";
    const { success } = await env.AI_RATE_LIMITER.limit({ key: `chat:${address}` });
    if (!success) {
      return jsonResponse(
        { error: "Too many questions were sent at once. Please wait a minute and try again." },
        429,
        origin,
        env,
        { "Retry-After": "60" }
      );
    }
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const assistantName = env.PINECONE_ASSISTANT_NAME || "sanctuary-assistant";
    const pineconeResponse = await fetch(`${host}/assistant/chat/${encodeURIComponent(assistantName)}`, {
      method: "POST",
      headers: {
        "Api-Key": env.PINECONE_API_KEY,
        "Content-Type": "application/json",
        "X-Pinecone-Api-Version": env.PINECONE_API_VERSION || "2026-04"
      },
      body: JSON.stringify({ messages, stream: false }),
      signal: controller.signal
    });

    const payload = await pineconeResponse.json().catch(() => ({}));
    if (!pineconeResponse.ok) {
      console.error("Pinecone Assistant request failed", pineconeResponse.status, payload?.message || payload?.error || "Unknown error");
      if (pineconeResponse.status === 429) {
        return jsonResponse({ error: "Explorer AI is busy right now. Please wait a moment and try again." }, 429, origin, env);
      }
      if (pineconeResponse.status === 401 || pineconeResponse.status === 403) {
        return jsonResponse({ error: "Explorer AI cannot connect to its study library right now." }, 503, origin, env);
      }
      return jsonResponse({ error: "Explorer AI could not answer that question. Please try again." }, 502, origin, env);
    }

    const content = payload?.message?.content;
    if (typeof content !== "string" || !content.trim()) {
      return jsonResponse({ error: "Explorer AI returned an empty answer. Please try again." }, 502, origin, env);
    }

    return jsonResponse(
      {
        reply: content.trim(),
        citations: publicCitations(payload.citations)
      },
      200,
      origin,
      env
    );
  } catch (error) {
    console.error("Explorer AI request error", error instanceof Error ? error.message : error);
    const message = error?.name === "AbortError"
      ? "Explorer AI took too long to answer. Please try again."
      : "Explorer AI is temporarily unavailable. Please try again.";
    return jsonResponse({ error: message }, 504, origin, env);
  } finally {
    clearTimeout(timeout);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const originAllowed = allowedOrigins(env).has(origin);

    if (request.method === "OPTIONS") {
      if (!originAllowed) return jsonResponse({ error: "Origin not allowed." }, 403, origin, env);
      return new Response(null, { status: 204, headers: corsHeaders(origin, env) });
    }

    if (url.pathname === "/health" && request.method === "GET") {
      return jsonResponse({ ready: Boolean(env.PINECONE_API_KEY) }, 200, origin, env);
    }

    if (!["/", "/api/assistant-chat"].includes(url.pathname)) {
      return jsonResponse({ error: "Not found." }, 404, origin, env);
    }

    if (!originAllowed) return jsonResponse({ error: "Origin not allowed." }, 403, origin, env);
    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed." }, 405, origin, env, { "Allow": "POST, OPTIONS" });
    }

    return handleChat(request, env, origin);
  }
};
