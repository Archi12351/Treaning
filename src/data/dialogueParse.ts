import type { CEFRLevel, ConversationTopic, DialogueLine } from "../types";

// Compact authoring format for scenario dialogues:
//
//   B: Bot line in the target language | перевод
//   U: Expected learner answer | перевод | alternative answer ;; another one
//
// "B:" lines are spoken by the bot, "U:" lines are what the learner should
// say (alternatives are also accepted by the speech matcher).
export function dialogue(
  meta: {
    id: string;
    title: string;
    ru: string;
    level: CEFRLevel;
    icon: string;
    avatar: string;
    category?: "everyday" | "official";
  },
  raw: string,
): ConversationTopic {
  const lines: DialogueLine[] = [];
  for (const rawLine of raw.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;
    const speaker = line.startsWith("B:") ? "bot" : line.startsWith("U:") ? "user" : null;
    if (!speaker) continue;
    const [text, ru, alts] = line.slice(2).split("|").map((p) => p.trim());
    const item: DialogueLine = { speaker, de: text, ru: ru ?? "" };
    if (speaker === "user" && alts) item.alternatives = alts.split(";;").map((a) => a.trim()).filter(Boolean);
    lines.push(item);
  }
  return { ...meta, lines };
}
