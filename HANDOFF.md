# Handoff — drakestapleton.com

**As of 13 Aug 2026 20:34 UTC.** Site is **live**.

- https://www.drakestapleton.com/ → `200`, title *Drake Stapleton — Agentic AI Architect*
- http://www → `301` → https://www
- https://drakestapleton.com → `301` → https://www

Next owner: keep this public, professional, and thin. Do not attach Atlas private trees or Hostinger tokens.

---

## What is already shipped

| Piece | Status |
|---|---|
| Domain | Hostinger registrar, bought 13 Aug 2026, expires 13 Aug 2027 |
| DNS | `@` A → GitHub Pages IPs; `www` CNAME → `dhgmonkey.github.io` |
| Host | GitHub Pages + HTTPS |
| Source | Public repo https://github.com/dhgmonkey/drakestapleton.com (`main`) |
| Page | Single static `index.html` (no app server, no DB, no keys) |
| Deploy | `.github/workflows/pages.yml` (Actions) |

**Repo contents:** `index.html`, `CNAME` (`www.drakestapleton.com`), `404.html`, `.nojekyll`, `README.md`, this file.

**Not on the public site (on purpose):** coding archive, career CSV, personal media, counterpart/image work, credentials.

---

## What is left

### Must / soon

1. **Revoke the Hostinger API token** used to set DNS. It was pasted in chat. hPanel → API tokens → delete. Do not reuse it.
2. **Confirm Enforce HTTPS** is on in GitHub → repo → Settings → Pages. Redirects already look correct; still verify the checkbox.
3. **Watch the first 24h of DNS.** Nameservers are still Hostinger parking (`aurora` / `nebula.dns-parking.com`). That is fine as long as the zone records stay the GitHub ones. If Hostinger resets parking, re-apply the A/CNAME set.

### Product (the actual remaining site work)

4. **Headshot / OG image.** Page has no photo and no `og:image`. Add a professional still and a 1200×630 card so Slack/LinkedIn unfurls.
5. **Contact.** No email, form, or calendar. Add one public address (or a Formspree / Getform endpoint). Do not put a Hostinger mailbox requirement on the critical path.
6. **Favicon + apple-touch-icon.** Missing.
7. **Resume PDF.** Print CSS exists; export a one-pager and link it (`/drake-stapleton.pdf`) so recruiters do not have to print the HTML.
8. **Project deep-links.** Case studies are on one scroll. Optional: `/atlas`, `/mobpay` as short pages or anchors only. Do not build a CMS.
9. **Copy pass for 3M / enterprise.** Role-map table is honest about Bedrock/SAP gaps — keep that. Optional: a 150-word “for hiring managers” blurb at the top.
10. **Analytics (optional, privacy-light).** Plausible or none. Do not add Google Tag Manager soup.

### Do not do unless asked

- WordPress / Hostinger Website Builder / PHP
- Putting `drake-coding-archive.html` on this domain
- Serving the site from Boston KVM8 / Atlas
- Claiming SAP, Salesforce, Bedrock, or a master’s on the page
- Storing any API keys in the repo

---

## How to edit and ship

```bash
git clone git@github.com:dhgmonkey/drakestapleton.com.git
# edit index.html
git add -A && git commit -m "…" && git push origin main
```

Pages deploys from `main`. Wait ~1 minute, then hard-refresh https://www.drakestapleton.com/

If DNS ever reverts to `2.57.91.91`, Hostinger parking came back. Restore:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` `109.153` `110.153` `111.153` |
| CNAME | `www` | `dhgmonkey.github.io` |

Hostinger API: `GET/PUT https://developers.hostinger.com/api/dns/v1/zones/drakestapleton.com` with a **new** Bearer token.

---

## Local artifacts (not production)

- Mac Desktop: `drake-portfolio.html` (same page, offline)
- `/root/drake-archive/` on Boston: private weekly archive + career chart
- Do not rsync those onto Pages

---

## Open decisions for Drake

- Public email / LinkedIn / 3M-safe phone
- Whether the GitHub repo stays public (recommended)
- Whether to add a photo
- Whether this domain also gets email (`hello@drakestapleton.com`) later — MX is unset; adding Google/Fastmail is a separate ticket
