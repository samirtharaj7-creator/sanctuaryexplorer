# Sanctuary Explorer

A public static deployment package for Sanctuary Explorer.

## What Is Included

- `index.html`
- `styles.css`
- `app.js`
- `sanctuary-scene.js`
- local Three.js files under `vendor/three/`

## What Is Not Included

The private source books, `.sanctuary-ai` index, Ollama/local AI server files, and ingestion scripts are intentionally not included. Do not upload those private files to GitHub or Vercel.

## Test Locally

From this folder:

```bash
python3 -m http.server 3001
```

Open:

```text
http://127.0.0.1:3001
```

## Deploy With GitHub And Vercel

1. Create a new empty GitHub repository.
2. In Terminal, open this folder.
3. Run:

```bash
git init
git add .
git commit -m "Initial Sanctuary Explorer deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

4. Go to Vercel and choose **Add New Project**.
5. Import the GitHub repository.
6. Use these settings:
   - Framework Preset: **Other**
   - Build Command: leave blank
   - Output Directory: leave blank or `.`
7. Click **Deploy**.

## Explorer AI Note

The Explorer AI feature is local/private because it depends on Ollama and your private book index on your Mac. This public deployment package removes that tab so visitors do not see a broken AI feature. A public AI version would require a separate hosted backend and careful source/copyright handling.
