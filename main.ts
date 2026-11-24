// sprint-office-joke: writes one one-line office joke to /output/entry.txt.
// Deterministic: no network, no randomness, no clock reads.
// The joke is exactly 144 characters, inside the gate of 1 to 200.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My out-of-office says I'm on holiday, my calendar says I'm in a meeting — my boss trusts the calendar, so I'm answering emails from the beach.";

// Honour the harness output dir when set, else the standard /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
