# Lcino Landing

Plain static site (no build step). Files: everything under `public/`.

## Edit
`public/config.js` holds the Mac download link, the early-access link and the app login link.

## Deploy
- **Cloudflare Workers:** `npx wrangler deploy` in this folder (uses `wrangler.toml`).
- **Cloudflare Pages:** create a project, upload this folder (framework: none, build command: none, output: `/`).
Then add your custom domain in the Cloudflare dashboard.

## Preview locally
`cd public && python3 -m http.server 8080` then open http://localhost:8080
