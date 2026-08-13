import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const dist = "dist";
const index = join(dist, "index.html");
const copies = [
  "404.html",
  "path/index.html",
  "evidence/index.html",
  "symphony/index.html",
  "symphony/first/index.html",
  "symphony/workflow/index.html",
  "symphony/map/index.html",
];

for (const rel of copies) {
  const dest = join(dist, rel);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(index, dest);
  console.log("spa fallback", dest);
}
