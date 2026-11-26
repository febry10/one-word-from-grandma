// One Word From Grandma — make.fun entry (u-0xkianno-one-word-from-grandma-f04bed16).
// Writes exactly one word to /output/entry.txt and exits 0.
// The word: "Robit" — grandma's own typo for "robot", the single word she
// would text her grandchild about AI (probably right after it answered her).
// Warm, a little baffled, instantly readable, and tied to machines rather
// than to any subject at all — a fresh pick, not the obvious "robot".
// Deterministic: no clock, no randomness, no I/O besides the write.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const WORD = "Robit";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
try {
  chmodSync(outDir, 0o755);
} catch {}
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, WORD, "utf8");
try {
  chmodSync(outFile, 0o644);
} catch {}
process.exit(0);
