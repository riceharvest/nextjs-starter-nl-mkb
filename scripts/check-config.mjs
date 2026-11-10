// Lists placeholders in src/config/site.ts that you have not filled in yet.
import { readFileSync } from "node:fs";
const src = readFileSync(new URL("../src/config/site.ts", import.meta.url), "utf8");
const left = [...src.matchAll(/"(\[[^"\]]+\])"/g)].map((m) => m[1]);
if (/example\.nl/.test(src)) left.push("[url: still https://www.example.nl]");
if (left.length) {
  console.log(`${left.length} placeholder(s) left in src/config/site.ts:`);
  for (const l of left) console.log("  " + l);
  process.exit(1);
}
console.log("No placeholders left in src/config/site.ts.");
