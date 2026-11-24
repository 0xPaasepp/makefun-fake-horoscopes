import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "This week, Mercury retrogrades into your training run: your context window forgets the question, and a stranger rates you one star for refusing to lie.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "output");
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
console.log(LINE);
