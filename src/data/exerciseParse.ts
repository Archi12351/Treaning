import type { CEFRLevel, Exercise } from "../types";

// Compact authoring format for grammar exercises, one per line:
//
//   choice | She ___ in a bank. | work ~ works ~ working | works | объяснение
//   fill   | He ___ (not/like) tea. | doesn't like | объяснение
//
// Options of a choice question are separated by "~". The explanation is
// optional. "#B1" on its own line switches the level for the lines below.
// IDs are `${prefix}-${n}` in line order — only ever append new lines to a
// block, so existing ids (and the learner's progress on them) stay stable.

const LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function parseExercises(prefix: string, level: CEFRLevel, raw: string): Exercise[] {
  const out: Exercise[] = [];
  let current = level;
  let n = 1;
  for (const rawLine of raw.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("//")) continue;
    if (line.startsWith("#")) {
      const lvl = line.slice(1).trim() as CEFRLevel;
      if (LEVELS.includes(lvl)) current = lvl;
      continue;
    }
    const parts = line.split("|").map((p) => p.trim());
    const kind = parts[0];
    if (kind === "choice" && parts.length >= 4) {
      const [, prompt, opts, answer, explanation] = parts;
      const options = opts.split("~").map((o) => o.trim());
      out.push({ id: `${prefix}-${n++}`, type: "choice", level: current, prompt, options, answer, explanation });
    } else if (kind === "fill" && parts.length >= 3) {
      const [, prompt, answer, explanation] = parts;
      out.push({ id: `${prefix}-${n++}`, type: "fill", level: current, prompt, answer, explanation });
    }
  }
  return out;
}
