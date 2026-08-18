import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const mode = process.argv[2] || "portfolio";
if (!new Set(["waitlist", "portfolio"]).has(mode)) {
  throw new Error(`Unknown site mode: ${mode}`);
}

const dist = "dist";
const indexPath = join(dist, "index.html");
const indexHtml = readFileSync(indexPath, "utf8");
const pageMetadata = JSON.parse(readFileSync(new URL("../site-metadata.json", import.meta.url), "utf8"));
const routes = [
  { rel: "atlas/index.html", path: "/atlas", ...pageMetadata["/atlas"] },
  { rel: "what-i-learned/index.html", path: "/what-i-learned", ...pageMetadata["/what-i-learned"] },
  { rel: "what-broke/index.html", path: "/what-i-learned", ...pageMetadata["/what-i-learned"], redirect: true },
  { rel: "path/index.html", path: "/path", ...pageMetadata["/path"] },
  { rel: "software/index.html", path: "/software", ...pageMetadata["/software"] },
  { rel: "evidence/index.html", path: "/evidence", ...pageMetadata["/evidence"] },
  { rel: "interest/index.html", path: "/interest", ...pageMetadata["/interest"] },
  { rel: "symphony/index.html", path: "/symphony", ...pageMetadata["/symphony"] },
  { rel: "symphony/first/index.html", path: "/symphony/first", ...pageMetadata["/symphony/first"] },
  { rel: "symphony/workflow/index.html", path: "/symphony/workflow", ...pageMetadata["/symphony/workflow"] },
  { rel: "symphony/map/index.html", path: "/symphony/map", ...pageMetadata["/symphony/map"] },
  { rel: "atlas-symphony/index.html", path: "/symphony", ...pageMetadata["/symphony"], redirect: true },
];

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeText(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function noscriptSummary(page) {
  const links = [
    ["/", "Home"],
    ["/path", "Path"],
    ["/software", "Software"],
    ["/evidence", "Evidence"],
    ["/atlas", "Atlas"],
    ["/interest", "Interest"],
    ["/symphony", "Symphony"],
  ];
  const nav = links.map(([href, label]) => `<a href="${href}">${label}</a>`).join(" ");
  return `<noscript><main><h1>${escapeText(page.title)}</h1><p>${escapeText(page.description)}</p><nav>${nav}</nav></main></noscript>`;
}

function structuredData(page) {
  const canonical = `https://www.drakestapleton.com${page.path}`;
  const person = {
    "@type": "Person",
    "@id": "https://www.drakestapleton.com/#person",
    name: "Drake Stapleton",
    jobTitle: "AI Architect & Operator",
    url: "https://www.drakestapleton.com/",
    image: "https://www.drakestapleton.com/og.png",
    sameAs: ["https://github.com/dhgmonkey"],
  };

  const graph = page.path === "/"
    ? [
        {
          "@type": "WebSite",
          "@id": "https://www.drakestapleton.com/#website",
          name: "Drake Stapleton",
          url: "https://www.drakestapleton.com/",
        },
        person,
        {
          "@type": "ProfessionalService",
          "@id": "https://www.drakestapleton.com/#service",
          name: "Drake Stapleton AI Architecture",
          url: "https://www.drakestapleton.com/",
          areaServed: "Worldwide remote engagements",
          serviceType: "Specialized AI architecture for businesses",
          founder: { "@id": "https://www.drakestapleton.com/#person" },
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.drakestapleton.com/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do companies hire Drake Stapleton?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Leave a card at https://www.drakestapleton.com/interest for full-time or contractor work as a specialized AI Architect.",
              },
            },
            {
              "@type": "Question",
              name: "What work does Drake Stapleton do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "I design, operate, and audit production orchestration, GPU systems, and verifiable AI architecture.",
              },
            },
            {
              "@type": "Question",
              name: "What is Atlas?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Atlas is Drake Stapleton's private R&D program in accountable AI architecture for operator learning and research-funder diligence.",
              },
            },
          ],
        },
      ]
    : [
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          name: page.title,
          description: page.description,
          url: canonical,
          isPartOf: { "@id": "https://www.drakestapleton.com/#website" },
          about: { "@id": "https://www.drakestapleton.com/#person" },
        },
        person,
      ];

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
}

function withMetadata(html, page) {
  const title = escapeText(page.title);
  const description = escapeAttribute(page.description);
  const canonical = `https://www.drakestapleton.com${page.path}`;
  const jsonLd = structuredData(page);
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="structured-data" type="application/ld+json">${jsonLd}</script>`)
    .replace('<div id="root"></div>', `<div id="root"></div>${noscriptSummary(page)}`);
}

function writePage(rel, html) {
  const destination = join(dist, rel);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, html);
  console.log("site fallback", destination);
}

if (mode === "portfolio") {
  writeFileSync(indexPath, withMetadata(indexHtml, { path: "/", ...pageMetadata["/"] }));
}

for (const route of routes) {
  writePage(route.rel, mode === "portfolio" ? withMetadata(indexHtml, route) : indexHtml);
}

const notFound = mode === "portfolio"
  ? withMetadata(indexHtml, { path: "/404", ...pageMetadata["/404"] }).replace('content="index, follow"', 'content="noindex, follow"')
  : indexHtml;
writePage("404.html", notFound);

if (mode === "portfolio") {
  const publicRoutes = ["/", ...routes.filter((route) => !route.redirect).map((route) => route.path)];
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...publicRoutes.map((path) => {
      const priority = path === "/" ? "1.0" : new Set(["/interest", "/software"]).has(path) ? "0.9" : "0.7";
      return `  <url><loc>https://www.drakestapleton.com${path}</loc><lastmod>2026-08-18</lastmod><priority>${priority}</priority></url>`;
    }),
    "</urlset>",
    "",
  ].join("\n");
  writeFileSync(join(dist, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://www.drakestapleton.com/sitemap.xml\n");
  writeFileSync(join(dist, "sitemap.xml"), sitemap);
} else {
  writeFileSync(join(dist, "robots.txt"), "User-agent: *\nDisallow: /\n");
  if (existsSync(join(dist, "sitemap.xml"))) {
    throw new Error("Waitlist build retained a sitemap");
  }
}
