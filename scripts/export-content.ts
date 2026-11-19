// Exports all course content to CSV files for review by native speakers /
// teachers before release: one file per language and content type.
//
//   npm run export:content            → content-review/<lang>-<type>.csv
//
// Reviewers fill the "ok" (✓/✗) and "fix" columns; the "id" column maps each
// row back to the source. Requires Node 22.15+ (built-in TypeScript stripping).
import fs from "node:fs";
import path from "node:path";
import { LANGUAGES } from "../src/data/languages.ts";
import { TEXTS_DE } from "../src/data/texts/de.ts";
import { TEXTS_EN } from "../src/data/texts/en.ts";
import { TEXTS_FR } from "../src/data/texts/fr.ts";

const OUT = path.resolve("content-review");
fs.mkdirSync(OUT, { recursive: true });

const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
function write(name: string, header: string[], rows: unknown[][]) {
  const csv = [header, ...rows].map((r) => r.map(esc).join(",")).join("\n");
  fs.writeFileSync(path.join(OUT, name), "﻿" + csv); // BOM so Excel opens UTF-8 correctly
  console.log(`${name}: ${rows.length} rows`);
}

const texts = { de: TEXTS_DE, en: TEXTS_EN, fr: TEXTS_FR } as const;

for (const [code, b] of Object.entries(LANGUAGES)) {
  if (!b) continue;
  write(`${code}-vocabulary.csv`, ["id", "level", "topic", "word", "ru", "example", "example_ru", "ok", "fix"],
    b.vocabulary.map((v) => [v.id, v.level, v.topic, v.de, v.ru, v.exampleDe, v.exampleRu, "", ""]));
  write(`${code}-grammar.csv`, ["id", "topic", "level", "type", "prompt", "options", "answer", "explanation", "ok", "fix"],
    b.grammarTopics.flatMap((t) => t.exercises.map((e) => [e.id, t.title, e.level, e.type, e.prompt, (e.options ?? []).join(" | "), e.answer, e.explanation, "", ""])));
  write(`${code}-dialogues.csv`, ["dialogue", "level", "line", "speaker", "text", "ru", "alternatives", "ok", "fix"],
    b.conversations.flatMap((c) => c.lines.map((l, i) => [c.id, c.level, i + 1, l.speaker, l.de, l.ru, (l.alternatives ?? []).join(" | "), "", ""])));
  write(`${code}-textbook.csv`, ["id", "number", "title", "level", "body", "examples", "ok", "fix"],
    b.textbookParagraphs.map((p) => [p.id, p.number, p.title, p.level, p.body.join("\n"), (p.examples ?? []).map((e) => `${e.de} — ${e.ru}`).join("\n"), "", ""]));
  write(`${code}-texts.csv`, ["id", "level", "title", "text", "glossary", "questions", "ok", "fix"],
    texts[code as keyof typeof texts].map((t) => [t.id, t.level, t.title, t.paragraphs.join("\n\n"), t.glossary.map((g) => `${g.de} = ${g.ru}`).join("; "), t.questions.map((q) => `${q.q} → ${q.answer}`).join("\n"), "", ""]));
}
