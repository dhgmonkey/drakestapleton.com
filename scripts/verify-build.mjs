import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const mode = process.argv[2];
if (!new Set(["waitlist", "portfolio"]).has(mode)) throw new Error("Expected waitlist or portfolio mode");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const index = readFileSync("dist/index.html", "utf8");
const scripts = readdirSync("dist/assets")
  .filter((name) => name.endsWith(".js"))
  .map((name) => readFileSync(join("dist/assets", name), "utf8"))
  .join("\n");
const requiredPages = [
  "404.html",
  "atlas/index.html",
  "what-i-learned/index.html",
  "path/index.html",
  "software/index.html",
  "evidence/index.html",
  "interest/index.html",
  "symphony/index.html",
  "symphony/first/index.html",
  "symphony/workflow/index.html",
  "symphony/map/index.html",
];

assert(!index.includes("__SITE_"), "HTML metadata placeholders remain");
assert(index.includes(`name="site-mode" content="${mode}"`), `Incorrect ${mode} marker`);
assert(index.includes("Content-Security-Policy"), "Content Security Policy metadata is missing");
assert(index.includes("style-src 'self';"), "Production style policy is missing");
assert(!index.includes("style-src 'self' 'unsafe-inline'"), "Development style policy leaked into the production build");
assert(existsSync("dist/og.png"), "Social preview image is missing");
assert(existsSync("dist/favicon.svg"), "Favicon is missing");
requiredPages.forEach((page) => assert(existsSync(join("dist", page)), `Missing ${page}`));

if (mode === "waitlist") {
  assert(index.includes("noindex, nofollow, noarchive"), "Waitlist build is indexable");
  assert(scripts.includes("Join the waiting list"), "Waitlist copy is missing from the public bundle");
  assert(!scripts.includes("I keep finding "), "Portrait copy leaked into the waitlist bundle");
  assert(readFileSync("dist/robots.txt", "utf8").includes("Disallow: /"), "Waitlist robots file is open");
  assert(!existsSync("dist/sitemap.xml"), "Waitlist build includes a sitemap");
} else {
  assert(index.includes("index, follow"), "Portfolio build is hidden from search");
  assert(index.includes("AI Architect"), "Homepage AI Architect metadata is missing");
  assert(index.includes("application/ld+json"), "Homepage structured data is missing");
  assert(scripts.includes("I keep finding "), "Portrait copy is missing from the portfolio bundle");
  assert(!scripts.includes("Join the waiting list"), "Waitlist copy leaked into the portfolio bundle");
  assert(existsSync("dist/sitemap.xml"), "Portfolio sitemap is missing");
  const interest = readFileSync("dist/interest/index.html", "utf8");
  assert(interest.includes("Hire Drake Stapleton"), "Interest hiring metadata is missing");
  const atlas = readFileSync("dist/atlas/index.html", "utf8");
  assert(atlas.includes("Why Atlas Exists"), "Atlas static metadata is missing");
  assert(atlas.includes("https://www.drakestapleton.com/atlas"), "Atlas canonical URL is missing");
}

console.log(`${mode} build verified`);
