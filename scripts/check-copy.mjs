import { readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const roots = ["src/pages", "src/components", "src/data", "src/diagrams"];
const forbidden = /\b(not|no|never|isn['’]t|wasn['’]t|didn['’]t|don['’]t|doesn['’]t|can['’]t|cannot|won['’]t|without|nobody|nothing|neither|nor|lacked?|unwilling|refus(?:e|ed|ing))\b/gi;
const synthetic = /\b(agentic|delve|tapestry|testament|cutting-edge|seamless|transformative|thought leader)\b/gi;
const findings = [];

function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      visit(path);
      continue;
    }
    if (![".ts", ".tsx"].includes(extname(path))) continue;
    const lines = readFileSync(path, "utf8").split("\n");
    lines.forEach((line, index) => {
      for (const pattern of [forbidden, synthetic]) {
        pattern.lastIndex = 0;
        const matches = [...line.matchAll(pattern)].map((match) => match[0]);
        if (matches.length) findings.push(`${path}:${index + 1}: ${matches.join(", ")}`);
      }
    });
  }
}

roots.forEach(visit);
if (findings.length) {
  console.error(findings.join("\n"));
  process.exit(1);
}
console.log("copy check passed");
