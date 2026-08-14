# drakestapleton.com

The aubergine, ember, and parchment personal portrait of Drake Stapleton.

Live: [https://www.drakestapleton.com/](https://www.drakestapleton.com/)

## Local development and release

```bash
npm run dev                 # complete portrait development mode
npm run dev:portfolio       # explicit portrait development mode
npm run build               # public portrait release
npm run build:portfolio     # explicit public portrait release
npm run preview             # preview the most recent build
```

Both release commands render the complete story, software and AI practice, evidence record, Atlas history, and Symphony pages. The build emits route-specific static metadata, a sitemap, and an indexable robots file.

## Checks

```bash
npm run typecheck
npm run check:copy
npm run test:waitlist
npm run build
npm run build:portfolio
```

The copy check enforces Drake's affirmative voice across page, component, data, and diagram copy. Build verification confirms the complete portrait and its route metadata are present.

## Hosting

GitHub Pages deploys the complete portrait from `main`.

The signup API stores normalized email, consent version, and signup time. Public requests use affirmative consent, origin checks, rate limiting, a honeypot, and TLS.

## Credit

Atlas Symphony was designed, named, and first operated by Drake Stapleton on 30 July 2026.
