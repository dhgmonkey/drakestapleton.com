# Handoff — drakestapleton.com

**As of 13 Aug 2026.** The site is a **Vite + React + TypeScript** project on GitHub Pages.

The `content/human-portrait` branch is a private, local-only editorial draft. It uses Drake's supplied first-person history and verified resume chronology to move the site away from job-seeking language. Do not push or publish this branch until the personal copy has been reviewed by Drake. The production `main` branch remains the waiting-list gate.

`/evidence` incorporates only the attached forensic-audit handoff summary. The referenced nine-file ZIP was not present in the Codex attachment directory, so this branch preserves the audit's `PARTIAL` status and does not treat reconstructed notes or direct Atlas chats as an official ChatGPT account export. Reconcile the page against the original audit files before publication.

- https://www.drakestapleton.com/ → portfolio
- https://www.drakestapleton.com/symphony/ → Atlas Symphony public record
- Source: https://github.com/dhgmonkey/drakestapleton.com (`main`)

Do not attach Atlas private trees, Hostinger tokens, or the coding archive.

---

## What shipped

| Piece | Status |
|---|---|
| Stack | Vite 7 · React 19 · TypeScript · react-router |
| Host | GitHub Pages + HTTPS · CNAME `www.drakestapleton.com` |
| Deploy | `.github/workflows/pages.yml` — `npm ci && npm run build` → `dist/` |
| Symphony | Inventor/first operator Drake Stapleton · first run 30 Jul 2026 |
| Diagrams | `/symphony/workflow` · `/symphony/map` · first-run SVG in React |

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
