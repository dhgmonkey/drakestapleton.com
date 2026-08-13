# Handoff — drakestapleton.com

**As of 13 Aug 2026.** The public site is a waiting-list gate while the human portrait remains in private development.

- https://www.drakestapleton.com/ -> waiting list
- all prior portfolio routes -> waiting list
- Source: https://github.com/dhgmonkey/drakestapleton.com (`main`)

Do not attach Atlas private trees, Hostinger tokens, or the coding archive.

---

## Release boundary

| Piece | Status |
|---|---|
| Stack | Vite 7 · React 19 · TypeScript · react-router |
| Host | GitHub Pages + HTTPS · CNAME `www.drakestapleton.com` |
| Deploy | `.github/workflows/pages.yml` — `npm ci && npm run build` → `dist/` |
| Public UI | No-index waiting-list page on every route |
| Signup API | Dedicated Boston Python service on TLS port 8443 |
| Stored data | Normalized email, consent version, UTC timestamp only |
| Excluded | Human portrait draft, resume, private history, credentials, financial identifiers |

**Not on the public site:** career CSV, personal media, counterpart stills, credentials, private IPs.

---

## Local

```bash
npm install
npm run dev
npm run build && npm run preview
```

SPA fallback: build copies `dist/index.html` to `dist/404.html` so unknown paths hit the router.

---

## Still open (same as before)

1. Revoke the Hostinger API token that was pasted in chat.
2. Headshot / OG image / favicon.
3. Public contact.
4. Resume PDF.
5. Do not put `drake-coding-archive.html` on this domain.
