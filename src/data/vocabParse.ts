import type { CEFRLevel, VocabItem } from "../types";

// Compact authoring format for large vocabulary lists. Writing thousands of
// `{ id, de, ru, exampleDe, exampleRu, topic, level }` object literals by hand
// is noisy and error-prone, so the bulk word lists are written as plain text:
//
//   word | перевод | Example sentence. | Пример предложения. | 🍎
//
// One entry per line, fields separated by "|", the emoji is optional.
// A line consisting of "#B2" switches the CEFR level for the lines below it
// (the block starts at the level passed to the function). Empty lines and
// lines starting with "//" are ignored.
//
// IDs are derived from the topic + the word itself (not the line position),
// so adding/reordering words later never shifts the SRS progress of words a
// learner has already studied.

const LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function parseVocab(topic: string, level: CEFRLevel, raw: string): VocabItem[] {
  const items: VocabItem[] = [];
  const usedIds = new Set<string>();
  let currentLevel = level;

  for (const rawLine of raw.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("//")) continue;
    if (line.startsWith("#")) {
      const lvl = line.slice(1).trim() as CEFRLevel;
      if (LEVELS.includes(lvl)) currentLevel = lvl;
      continue;
    }
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 4) continue;
    const [de, ru, exampleDe, exampleRu, emoji] = parts;

    let id = `${topic}~${slug(de)}`;
    let n = 2;
    while (usedIds.has(id)) id = `${topic}~${slug(de)}-${n++}`;
    usedIds.add(id);

    const item: VocabItem = { id, de, ru, exampleDe, exampleRu, topic, level: currentLevel };
    if (emoji) item.emoji = emoji;
    items.push(item);
  }
  return items;
}

// Normalizes a headword for duplicate detection: ignores case, grammatical
// notes in parentheses and a leading English "to". Articles are kept on
// purpose — "die Steuer" (tax) and "das Steuer" (wheel) are different words.
function headwordKey(word: string): string {
  return word
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/^to\s+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Merges several word lists, dropping later duplicates of a headword that
// already appeared (the earlier, usually hand-curated entry wins).
export function mergeVocab(...lists: VocabItem[][]): VocabItem[] {
  const seenWords = new Set<string>();
  const seenIds = new Set<string>();
  const out: VocabItem[] = [];
  for (const list of lists) {
    for (const item of list) {
      const key = headwordKey(item.de);
      if (seenWords.has(key) || seenIds.has(item.id)) continue;
      seenWords.add(key);
      seenIds.add(item.id);
      out.push(item);
    }
  }
  return out;
}
