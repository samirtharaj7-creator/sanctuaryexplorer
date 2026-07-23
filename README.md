# Sanctuary Explorer

A public static deployment package for Sanctuary Explorer, hosted with GitHub Pages.

## What Is Included

- `index.html`, `styles.css`, and `app.js`
- `sanctuary-scene.js` and local Three.js files under `vendor/three/`
- the public Explorer AI interface
- the Cloudflare Worker source under `cloudflare-worker/`

The private source books, `.sanctuary-ai` index, Ollama/local AI server files, and ingestion scripts are intentionally not included. Do not upload those private files to GitHub or Cloudflare.

## Test The Static Site Locally

From this folder:

```bash
python3 -m http.server 3001
```

Open `http://127.0.0.1:3001`. The interface works through this static preview, but live AI answers require the deployed Worker or a separately running local Worker.

## Deploy With GitHub Pages

Push this repository to GitHub. In the repository, open **Settings > Pages**, select the branch and root folder containing `index.html`, and save. The `CNAME` file points the published site to `https://sanctuary.mybibleexplorer.com`.

## Explorer AI Architecture

Explorer AI uses the public backend configured in `content/ai-config.js`, which connects to the existing Pinecone Assistant named `sanctuary-assistant`:

```text
GitHub Pages → Render backend → Pinecone Assistant
```

The backend calls Pinecone with a server-side secret. The key is never placed in GitHub Pages or sent to visitors. Answers can include source filenames and page numbers, while private signed file URLs are intentionally omitted.

Follow-up requests send completed user and model turns in Gemini's `history` format so the backend can answer in context. Individual questions retain the 1,200-character limit, while a conversation can continue without a frontend turn or total-length cutoff. The Cloudflare Worker in `cloudflare-worker/src/index.js` remains available as an alternative deployment with server-side origin, conversation-size, and rate-limit enforcement.

## Deploy The Worker With Wrangler

1. Create a free Cloudflare account if needed.
2. In Terminal, open this repository and enter the Worker folder:

   ```bash
   cd cloudflare-worker
   ```

3. Sign in to Cloudflare:

   ```bash
   npx wrangler login
   ```

4. Add the Pinecone key as an encrypted Worker secret:

   ```bash
   npx wrangler secret put PINECONE_API_KEY
   ```

   Paste the complete `pckey_...` value only when Wrangler prompts for it. Never add the real value to a tracked file.

5. Deploy the Worker:

   ```bash
   npx wrangler deploy
   ```

6. Copy the final address printed by Wrangler, for example:

   ```text
   https://sanctuary-explorer-ai.YOUR-SUBDOMAIN.workers.dev
   ```

7. Open `content/ai-config.js` and set it to the deployed Worker address:

   ```js
   export const explorerAiEndpoint = "https://sanctuary-explorer-ai.YOUR-SUBDOMAIN.workers.dev";
   ```

8. Commit and push that public configuration change to GitHub. The Worker URL is safe to publish; the Pinecone key is not.
9. Open `https://sanctuary-explorer-ai.YOUR-SUBDOMAIN.workers.dev/health`. It should return `{"ready":true}`.

## Configure Through The Cloudflare Dashboard

If deploying by pasting code in the dashboard instead of Wrangler:

1. Go to **Workers & Pages > Create > Worker** and name it `sanctuary-explorer-ai`.
2. Open **Edit code**, replace the starter code with `cloudflare-worker/src/index.js`, and deploy.
3. Open the Worker’s **Settings > Variables and Secrets > Add**.
4. Add `PINECONE_API_KEY` as type **Secret** and paste the complete Pinecone key.
5. Add these ordinary text variables:
   - `PINECONE_ASSISTANT_NAME` = `sanctuary-assistant`
   - `PINECONE_ASSISTANT_HOST` = `https://prod-1-data.ke.pinecone.io`
   - `PINECONE_API_VERSION` = `2026-04`
   - `ALLOWED_ORIGINS` = `https://sanctuary.mybibleexplorer.com,http://127.0.0.1:4178,http://localhost:4178,http://127.0.0.1:3001,http://localhost:3001`
6. Deploy the settings, copy the Worker address, and complete Wrangler steps 7–9 above.

The dashboard-only method works without a rate-limit binding. For the included ten-requests-per-minute rate limiter, deploy through Wrangler with `wrangler.jsonc`.

## Local Worker Testing

Copy `cloudflare-worker/.dev.vars.example` to `cloudflare-worker/.dev.vars`, add the real Pinecone key to that untracked file, and run `npx wrangler dev` inside `cloudflare-worker`. Continue serving the website separately on port 3001 or 4178.

## Recommended Pinecone Assistant Instructions

Add this under **Assistant instructions** in Pinecone for more consistent public answers:

> You are Explorer AI, a source-aware study assistant for Sanctuary Explorer. Answer questions about the biblical sanctuary, its services and furnishings, Christ's priestly ministry, and related prophecy using the uploaded library. Write clearly for readers with varied Bible knowledge. Base factual and theological claims on the retrieved sources, preserve meaningful distinctions between Scripture and interpretation, and say when the library does not provide enough support. Never invent quotations, page numbers, or sources. Encourage readers to verify important claims with Scripture and the cited material. Stay focused on sanctuary study; politely redirect unrelated requests.

Pinecone applies these instructions to every conversation. They do not require re-uploading or re-ingesting the existing books.
