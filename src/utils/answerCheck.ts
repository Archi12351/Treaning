import type { VocabItem } from "../types";
import { normalize, similarity } from "./text";

const ARTICLES = /^(der|die|das|the|to|le|la|les|l'|un|une)\s+/i;

// All the forms a typed answer may legitimately take for a headword like
// "der Vorgesetzte / die Vorgesetzte" or "sich verlassen auf (+Akk.)".
export function answerVariants(word: string): string[] {
  const base = word.replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim();
  const parts = base.split(/\s+\/\s+|\s+—\s+/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [base];
}

export function articleOf(variant: string): string | null {
  const m = variant.match(ARTICLES);
  return m ? m[1] : null;
}

export type TypedResult = "correct" | "missing-article" | "typo" | "wrong";

// Checks a typed answer against a vocabulary item:
//  - exact (ignoring case/punctuation/umlaut spelling) → correct
//  - right word but the article is missing → missing-article (counts, with a hint)
//  - one or two letters off → typo (counts, with the correct spelling shown)
export function checkTyped(input: string, item: VocabItem): TypedResult {
  const typed = normalize(input);
  if (!typed) return "wrong";
  let best: TypedResult = "wrong";
  for (const v of answerVariants(item.de)) {
    const full = normalize(v);
    const bare = normalize(v.replace(ARTICLES, ""));
    if (typed === full) return "correct";
    if (typed === bare && bare !== full) best = "missing-article";
    else if (best === "wrong" && (similarity(typed, full) >= 0.85 || similarity(typed, bare) >= 0.88)) {
      best = "typo";
    }
  }
  return best;
}

// Picks 3 distractors close to the answer: same topic first, then same level.
export function distractors(item: VocabItem, pool: VocabItem[], field: "de" | "ru", n = 3): string[] {
  const out: string[] = [];
  const seen = new Set([item[field]]);
  const sameTopic = pool.filter((w) => w.topic === item.topic && w.id !== item.id);
  const sameLevel = pool.filter((w) => w.level === item.level && w.id !== item.id);
  for (const src of [shuffle(sameTopic), shuffle(sameLevel), shuffle(pool)]) {
    for (const w of src) {
      if (out.length >= n) return out;
      if (seen.has(w[field])) continue;
      seen.add(w[field]);
      out.push(w[field]);
    }
  }
  return out;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
