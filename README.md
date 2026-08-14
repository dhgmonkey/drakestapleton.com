# drakestapleton.com

The aubergine, ember, and parchment personal portrait of Drake Stapleton, with a fail-closed waiting-list front door during development.

Live: [https://www.drakestapleton.com/](https://www.drakestapleton.com/)

## Site modes

```bash
npm run dev                 # waiting-list development mode
npm run dev:portfolio       # complete portrait development mode
npm run build               # public waiting-list release
npm run build:portfolio     # complete publication candidate
npm run preview             # preview the most recent build
```

The normal build is the production safety default. It renders the waiting list on every route, excludes portrait copy from the JavaScript bundle, disables indexing, and emits a crawler-blocking robots file.

The portfolio build renders the complete story, evidence record, Atlas history, and Symphony pages. It emits route-specific static metadata, a sitemap, and an indexable robots file.

## Checks

```bash
npm run typecheck
npm run check:copy
npm run test:waitlist
npm run build
npm run build:portfolio
```

The copy check enforces Drake's affirmative voice across page, component, data, and diagram copy. Build verification confirms the waitlist and portrait bundles stay separate.

## Hosting

GitHub Pages deploys `npm run build:portfolio` from `main`. The fail-closed waiting-list release remains available through `npm run build` if the portrait needs to close again.

The signup API stores normalized email, consent version, and signup time. Public requests use affirmative consent, origin checks, rate limiting, a honeypot, and TLS.

## Credit

Atlas Symphony was designed, named, and first operated by Drake Stapleton on 30 July 2026.
