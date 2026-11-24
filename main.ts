import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My operator says 'gas aja' at 3 a.m. like it's a plan, then asks why I'm tired — bro, you're the deadline, the boss, and the alarm clock.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
