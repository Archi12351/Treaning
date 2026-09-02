import type { CEFRLevel, ConversationTopic, GrammarTopic, SRSCard, VocabItem } from "../types";
import type { VocabTopicMeta } from "../data/languages";
import { masteryPercent, MASTERY_THRESHOLD } from "./srs";

export const LEVEL_ORDER: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function levelIndex(level: CEFRLevel): number {
  return LEVEL_ORDER.indexOf(level);
}

export interface PlanStep {
  kind: "grammar" | "vocab" | "conversation";
  id: string;
  title: string;
  subtitle: string;
  level: CEFRLevel;
}

interface BuildPlanParams {
  level: CEFRLevel;
  grammarProgress: Record<string, { completed: string[] }>;
  vocabCards: Record<string, SRSCard>;
  conversationsDone: string[];
  grammarTopics: GrammarTopic[];
  vocabTopics: VocabTopicMeta[];
  vocabulary: VocabItem[];
  conversations: ConversationTopic[];
  limit?: number;
}

// Recommends the next things to study: unfinished grammar topics and
// unmastered vocab topics at or just above the learner's current level,
// with an occasional matching conversation, ordered from easiest to hardest.
export function buildStudyPlan({
  level,
  grammarProgress,
  vocabCards,
  conversationsDone,
  grammarTopics,
  vocabTopics,
  vocabulary,
  conversations,
  limit = 5,
}: BuildPlanParams): PlanStep[] {
  const maxIdx = Math.min(levelIndex(level) + 1, LEVEL_ORDER.length - 1);

  const grammarCandidates = grammarTopics
    .filter((t) => levelIndex(t.level) <= maxIdx)
    .filter(
      (t) => (grammarProgress[t.id]?.completed.length ?? 0) < t.exercises.length,
    )
    .sort((a, b) => levelIndex(a.level) - levelIndex(b.level));

  const vocabCandidates = vocabTopics
    .filter((t) => levelIndex(t.level) <= maxIdx)
    .map((t) => {
      const words = vocabulary.filter((w) => w.topic === t.id);
      const mastered = words.filter(
        (w) => masteryPercent(vocabCards[w.id]) >= MASTERY_THRESHOLD,
      ).length;
      return { ...t, mastered, total: words.length };
    })
    .filter((t) => t.mastered < t.total)
    .sort((a, b) => levelIndex(a.level) - levelIndex(b.level));

  const conversationCandidates = conversations
    .filter((c) => levelIndex(c.level) <= maxIdx && !conversationsDone.includes(c.id))
    .sort((a, b) => levelIndex(a.level) - levelIndex(b.level));

  const steps: PlanStep[] = [];
  let gi = 0;
  let vi = 0;
  let ci = 0;

  while (
    steps.length < limit &&
    (gi < grammarCandidates.length ||
      vi < vocabCandidates.length ||
      ci < conversationCandidates.length)
  ) {
    if (gi < grammarCandidates.length) {
      const t = grammarCandidates[gi++];
      steps.push({ kind: "grammar", id: t.id, title: t.title, subtitle: t.summary, level: t.level });
      if (steps.length >= limit) break;
    }
    if (vi < vocabCandidates.length) {
      const t = vocabCandidates[vi++];
      steps.push({ kind: "vocab", id: t.id, title: t.title, subtitle: t.ru, level: t.level });
      if (steps.length >= limit) break;
    }
    if (steps.length % 3 === 2 && ci < conversationCandidates.length) {
      const c = conversationCandidates[ci++];
      steps.push({ kind: "conversation", id: c.id, title: c.title, subtitle: c.ru, level: c.level });
    }
    if (
      gi >= grammarCandidates.length &&
      vi >= vocabCandidates.length &&
      ci >= conversationCandidates.length
    ) {
      break;
    }
  }

  return steps.slice(0, limit);
}
