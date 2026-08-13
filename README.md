# drakestapleton.com

Public site for **Drake Stapleton** — architecture portfolio and the **Atlas Symphony** record.

Live: [https://www.drakestapleton.com/](https://www.drakestapleton.com/)  
Symphony: [https://www.drakestapleton.com/symphony/](https://www.drakestapleton.com/symphony/)

This is a Vite + React + TypeScript app. It is not a pile of standalone HTML files.

## Scripts

```bash
npm install
npm run dev       # http://127.0.0.1:5173
npm run typecheck
npm run build     # dist/  (copies index.html → 404.html for GitHub Pages SPA)
npm run preview
```

## Routes

| Path | Page |
|---|---|
| `/` | Portfolio |
| `/symphony` | Named process, first operators, versions, citation |
| `/symphony/first` | Verbatim invocation + first-run roster |
| `/symphony/workflow` | Interactive command tree / cycle / save plane |
| `/symphony/map` | Bird’s-eye six-track map |

Interactive diagrams live in `public/diagrams/` and are framed by the app. Private media, LAN addresses, and credentials stay off this site.

## Deploy

Push `main`. `.github/workflows/pages.yml` runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. `public/CNAME` keeps `www.drakestapleton.com`.

## Credit

Atlas Symphony was invented and first operated by **Drake Stapleton** on **30 July 2026**. First named instance: Sovereign Forge live-ops. See `/symphony/first`.
