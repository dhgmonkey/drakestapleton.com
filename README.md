# drakestapleton.com

Public Agentic AI architecture portfolio.

## Backend

Static site. No app server, no database, no keys.

| Piece | Choice |
|---|---|
| Source | this repo (`main`) |
| Host | GitHub Pages |
| TLS | GitHub (automatic after DNS) |
| Domain | Hostinger registrar · `www.drakestapleton.com` |
| Apex | `drakestapleton.com` → same site |

## DNS at Hostinger (hPanel)

The domain is parked on `aurora.dns-parking.com` / `nebula.dns-parking.com` until you change records.

1. Open [hPanel](https://hpanel.hostinger.com) → **Domains** → `drakestapleton.com` → **DNS / DNS Zone**.
2. If nameservers still say `dns-parking.com`, switch to Hostinger nameservers (or keep custom DNS editor).
3. Set:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 300 |
| A | `@` | `185.199.109.153` | 300 |
| A | `@` | `185.199.110.153` | 300 |
| A | `@` | `185.199.111.153` | 300 |
| CNAME | `www` | `dhgmonkey.github.io` | 300 |

Delete Hostinger parking / coming-soon A records that point at `2.57.91.91`.

4. In GitHub: repo **Settings → Pages → Custom domain** = `www.drakestapleton.com`, enable **Enforce HTTPS** after the first cert (can take up to an hour).

## Preview before DNS

https://dhgmonkey.github.io/drakestapleton.com/

## What this is not

Not Hostinger Website Builder. Not WordPress. Not Atlas. Public HTML only.
