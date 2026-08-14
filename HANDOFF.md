# Handoff - drakestapleton.com

**As of 13 Aug 2026.** This branch combines the public waiting-list gate with the complete human portrait.

- `npm run build` produces the fail-closed, no-index waiting-list release used by GitHub Pages.
- `npm run build:portfolio` produces the complete, indexable portrait for final review and the eventual opening.
- Every known route has a static fallback with route-specific metadata.
- Source: https://github.com/dhgmonkey/drakestapleton.com

The portrait uses Drake's supplied first-person history, the reviewed resume chronology, and the complete nine-file derivative audit package in `Downloads/drake-chatgpt-history-handoff`. The audit remains `PARTIAL` by its own evidence definition because the original ChatGPT account export is a future source.

## Release boundary

| Piece | State |
|---|---|
| Stack | Vite 7, React 19, TypeScript, react-router |
| Host | GitHub Pages with HTTPS and `www.drakestapleton.com` CNAME |
| Public build | Waiting list on every route, `noindex`, disallowing crawler access |
| Portfolio build | Full portrait, route metadata, sitemap, indexable pages |
| Signup API | Dedicated Boston Python service on TLS port 8443 |
| Stored signup data | Normalized email, consent version, UTC timestamp |
| Public personal material | First-person story, reviewed work and education chronology, public-safe evidence |
| Private material | Raw transcripts, family source documents, member records, credentials, addresses, financial identifiers |

The public bundle excludes the portrait code. The portfolio bundle excludes the waiting-list code. `scripts/verify-build.mjs` enforces both boundaries.

## Local review

```bash
npm run dev:portfolio
npm run check:copy
npm run test:waitlist
npm run build
npm run build:portfolio
npm run preview
```

## Publication assets

- `public/og.png`: 1200 by 630 red, white, and blue social card.
- `public/favicon.svg`: site favicon.
- `dist/robots.txt`: generated for the selected build mode.
- `dist/sitemap.xml`: generated for the portfolio build.

## Deployment order

1. Keep the GitHub Pages workflow on `npm run build` while the site remains in development.
2. Review the complete portrait through `npm run dev:portfolio` or a portfolio build.
3. Change the Pages workflow to `npm run build:portfolio` only when Drake explicitly opens the site.
4. Verify the home page, every direct route, metadata, social image, 404 behavior, and the live release marker.

## External security follow-up

- Confirm revocation of the Hostinger API token previously pasted into chat before the portfolio opens.
- Keep raw resumes, personal media, private histories, credentials, host details, and the coding archive outside the public site.
