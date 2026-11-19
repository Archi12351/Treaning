import type { DailyKey } from "../hooks/useProgress";

// ─────────────── Задания дня ───────────────
// Каждый день — три задания из разных навыков (детерминированно по дате,
// чтобы список не менялся при перезагрузке). Выполнение считается по
// дневным счётчикам из useProgress.

export interface Quest {
  id: string;
  key: DailyKey;
  target: number;
  icon: string;
  title: string;
  route: "vocab-due" | "vocab-topics" | "grammar-topics" | "reading" | "conversations" | "writing" | "mistakes";
}

const POOL: Quest[] = [
  { id: "q-vocab-10", key: "vocab", target: 10, icon: "📚", title: "Ответить на 10 слов", route: "vocab-topics" },
  { id: "q-vocab-20", key: "vocab", target: 20, icon: "📚", title: "Ответить на 20 слов", route: "vocab-topics" },
  { id: "q-grammar-5", key: "grammar", target: 5, icon: "🧩", title: "Решить 5 упражнений", route: "grammar-topics" },
  { id: "q-grammar-10", key: "grammar", target: 10, icon: "🧩", title: "Решить 10 упражнений", route: "grammar-topics" },
  { id: "q-reading-1", key: "reading", target: 1, icon: "📖", title: "Прочитать или прослушать текст", route: "reading" },
  { id: "q-dialog-1", key: "dialog", target: 1, icon: "🗣️", title: "Пройти диалог", route: "conversations" },
  { id: "q-writing-1", key: "writing", target: 1, icon: "✍️", title: "Написать текст с ИИ", route: "writing" },
  { id: "q-mistakes-5", key: "mistakes", target: 5, icon: "🛠️", title: "Исправить 5 ошибок", route: "mistakes" },
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export function questsForToday(date: string, opts: { hasMistakes: boolean; aiAvailable: boolean }): Quest[] {
  const pool = POOL.filter(
    (q) => (q.key !== "mistakes" || opts.hasMistakes) && (q.key !== "writing" || opts.aiAvailable),
  );
  const out: Quest[] = [];
  const usedKeys = new Set<DailyKey>();
  let seed = hash(date);
  // Always one vocab quest (the habit core), plus two other skills.
  const vocab = pool.filter((q) => q.key === "vocab");
  out.push(vocab[seed % vocab.length]);
  usedKeys.add("vocab");
  while (out.length < 3) {
    seed = (seed * 1103515245 + 12345) >>> 0;
    const q = pool[seed % pool.length];
    if (usedKeys.has(q.key)) continue;
    usedKeys.add(q.key);
    out.push(q);
  }
  return out;
}

// ─────────────── Достижения ───────────────

export interface AchievementStats {
  xp: number;
  streak: number;
  bestStreak: number;
  wordsStarted: number;
  wordsMastered: number;
  grammarDone: number;
  dialogsDone: number;
  officialDialogsDone: number;
  textsRead: number;
  writingsDone: number;
  languagesStarted: number;
  placementDone: boolean;
  level: string;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  text: string;
  check: (s: AchievementStats) => boolean;
}

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-steps", icon: "👣", title: "Первые шаги", text: "Заработать первые 10 XP", check: (s) => s.xp >= 10 },
  { id: "placement", icon: "🎯", title: "Знаю свой уровень", text: "Пройти тест на уровень", check: (s) => s.placementDone },
  { id: "streak-3", icon: "🔥", title: "Разогрев", text: "3 дня подряд", check: (s) => s.bestStreak >= 3 },
  { id: "streak-7", icon: "🔥", title: "Неделя без пропусков", text: "7 дней подряд", check: (s) => s.bestStreak >= 7 },
  { id: "streak-30", icon: "🌋", title: "Железная воля", text: "30 дней подряд", check: (s) => s.bestStreak >= 30 },
  { id: "streak-100", icon: "💎", title: "Легенда", text: "100 дней подряд", check: (s) => s.bestStreak >= 100 },
  { id: "words-50", icon: "📚", title: "Словарный запас", text: "Начать учить 50 слов", check: (s) => s.wordsStarted >= 50 },
  { id: "words-250", icon: "📚", title: "Книжный червь", text: "Начать учить 250 слов", check: (s) => s.wordsStarted >= 250 },
  { id: "mastered-100", icon: "🧠", title: "Сто слов в голове", text: "Прочно выучить 100 слов", check: (s) => s.wordsMastered >= 100 },
  { id: "mastered-500", icon: "🧠", title: "Полиглот в пути", text: "Прочно выучить 500 слов", check: (s) => s.wordsMastered >= 500 },
  { id: "mastered-1000", icon: "🏛️", title: "Тысяча слов", text: "Прочно выучить 1000 слов", check: (s) => s.wordsMastered >= 1000 },
  { id: "grammar-50", icon: "🧩", title: "Грамматист", text: "Решить 50 упражнений", check: (s) => s.grammarDone >= 50 },
  { id: "grammar-200", icon: "🧩", title: "Мастер правил", text: "Решить 200 упражнений", check: (s) => s.grammarDone >= 200 },
  { id: "dialog-1", icon: "🗣️", title: "Первый разговор", text: "Пройти первый диалог", check: (s) => s.dialogsDone >= 1 },
  { id: "dialog-10", icon: "🎙️", title: "Собеседник", text: "Пройти 10 диалогов", check: (s) => s.dialogsDone >= 10 },
  { id: "official-1", icon: "🏛️", title: "Не боюсь ведомств", text: "Пройти диалог в госучреждении", check: (s) => s.officialDialogsDone >= 1 },
  { id: "official-5", icon: "🛂", title: "Бюрократ-профи", text: "5 диалогов в госучреждениях", check: (s) => s.officialDialogsDone >= 5 },
  { id: "reader-5", icon: "📖", title: "Читатель", text: "Прочитать 5 текстов", check: (s) => s.textsRead >= 5 },
  { id: "writer-1", icon: "✍️", title: "Первое сочинение", text: "Написать текст с ИИ-наставником", check: (s) => s.writingsDone >= 1 },
  { id: "writer-10", icon: "🖋️", title: "Писатель", text: "Написать 10 текстов", check: (s) => s.writingsDone >= 10 },
  { id: "polyglot", icon: "🌍", title: "Полиглот", text: "Заниматься двумя языками", check: (s) => s.languagesStarted >= 2 },
  { id: "xp-1000", icon: "⭐", title: "Тысяча опыта", text: "Набрать 1000 XP", check: (s) => s.xp >= 1000 },
  { id: "xp-5000", icon: "🌟", title: "Звезда", text: "Набрать 5000 XP", check: (s) => s.xp >= 5000 },
  { id: "level-b1", icon: "🎓", title: "Уверенный пользователь", text: "Достичь уровня B1", check: (s) => LEVELS.indexOf(s.level) >= 2 },
  { id: "level-c1", icon: "👑", title: "Свободное владение", text: "Достичь уровня C1", check: (s) => LEVELS.indexOf(s.level) >= 4 },
];
