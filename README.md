# drakestapleton.com

Public waiting-list front door for the in-development Drake Stapleton human portrait and Atlas portfolio.

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

## Public release state

Every browser route renders the waiting-list page. The portfolio pages remain source material only and are not imported into the public bundle.

Signup writes go to the dedicated Boston API at `waitlist-api.drakestapleton.com:8443`. The public client sends only email, affirmative consent, consent version, a honeypot, and elapsed form time. The database stores only normalized email, consent version, and signup timestamp.

Interactive diagrams live in `public/diagrams/` and are framed by the app. Private media, LAN addresses, and credentials stay off this site.

## Deploy

Push `main`. `.github/workflows/pages.yml` runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. `public/CNAME` keeps `www.drakestapleton.com`.

## Credit

Atlas Symphony was invented and first operated by **Drake Stapleton** on **30 July 2026**. First named instance: Sovereign Forge live-ops. See `/symphony/first`.
