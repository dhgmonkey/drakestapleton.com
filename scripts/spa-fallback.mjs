import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const mode = process.argv[2] || "portfolio";
if (!new Set(["waitlist", "portfolio"]).has(mode)) {
  throw new Error(`Unknown site mode: ${mode}`);
}

const dist = "dist";
const indexPath = join(dist, "index.html");
const indexHtml = readFileSync(indexPath, "utf8");
const routes = [
  {
    rel: "atlas/index.html",
    path: "/atlas",
    title: "Why Atlas Exists | Drake Stapleton",
    description: "The personal origin, purpose, architecture, and honest boundaries of Drake Stapleton's Atlas project.",
  },
  {
    rel: "what-i-learned/index.html",
    path: "/what-i-learned",
    title: "What I Learned | Drake Stapleton",
    description: "The experiences, lessons, and returns that shaped Drake Stapleton's work and life.",
  },
  {
    rel: "what-broke/index.html",
    path: "/what-i-learned",
    title: "What I Learned | Drake Stapleton",
    description: "The experiences, lessons, and returns that shaped Drake Stapleton's work and life.",
    redirect: true,
  },
  {
    rel: "path/index.html",
    path: "/path",
    title: "The Path | Drake Stapleton",
    description: "Drake Stapleton's education, industrial career, and independent work in software and AI.",
  },
  {
    rel: "software/index.html",
    path: "/software",
    title: "Software and AI | Drake Stapleton",
    description: "Drake Stapleton's software practice, working stack, documented coding history, AI exploration, and retained conversation record.",
  },
  {
    rel: "evidence/index.html",
    path: "/evidence",
    title: "Evidence and Sources | Drake Stapleton",
    description: "Current evidence for Drake Stapleton's ChatGPT history, Atlas work, software projects, community leadership, and next sources.",
  },
  {
    rel: "symphony/index.html",
    path: "/symphony",
    title: "Atlas Symphony | Drake Stapleton",
    description: "Atlas Symphony is a gated process for coordinating multiple AI agents, designed and first run by Drake Stapleton on 30 July 2026.",
  },
  {
    rel: "symphony/first/index.html",
    path: "/symphony/first",
    title: "First Atlas Symphony | Drake Stapleton",
    description: "The first documented Atlas Symphony run, including its operator, participating runtimes, work lanes, and independent reviewers.",
  },
  {
    rel: "symphony/workflow/index.html",
    path: "/symphony/workflow",
    title: "Atlas Symphony Workflow | Drake Stapleton",
    description: "The Atlas Symphony command tree and cycle phases designed by Drake Stapleton.",
  },
  {
    rel: "symphony/map/index.html",
    path: "/symphony/map",
    title: "Atlas Symphony Map | Drake Stapleton",
    description: "A six-track map of Atlas development from June through August 2026.",
  },
  {
    rel: "atlas-symphony/index.html",
    path: "/symphony",
    title: "Atlas Symphony | Drake Stapleton",
    description: "Atlas Symphony is a gated process for coordinating multiple AI agents, designed and first run by Drake Stapleton on 30 July 2026.",
    redirect: true,
  },
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

function withMetadata(html, page) {
  const title = escapeText(page.title);
  const description = escapeAttribute(page.description);
  const canonical = `https://www.drakestapleton.com${page.path}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`);
}

function writePage(rel, html) {
  const destination = join(dist, rel);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, html);
  console.log("site fallback", destination);
}

for (const route of routes) {
  writePage(route.rel, mode === "portfolio" ? withMetadata(indexHtml, route) : indexHtml);
}

const notFound = mode === "portfolio"
  ? withMetadata(indexHtml, {
      path: "/404",
      title: "Page Directory | Drake Stapleton",
      description: "Choose a page from Drake Stapleton's site.",
    }).replace('content="index, follow"', 'content="noindex, follow"')
  : indexHtml;
writePage("404.html", notFound);

if (mode === "portfolio") {
  const publicRoutes = ["/", ...routes.filter((route) => !route.redirect).map((route) => route.path)];
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...publicRoutes.map((path) => `  <url><loc>https://www.drakestapleton.com${path}</loc></url>`),
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
