import { useEffect, useMemo, useRef, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { SpeakButton } from "../components/SpeakButton";
import { useProgress } from "../hooks/useProgress";
import { useLanguageData } from "../hooks/useLanguageData";
import { useSpeechRecognition, useTextToSpeech } from "../hooks/useSpeech";
import { isDue } from "../utils/srs";
import { matchesAny } from "../utils/text";
import { answerVariants, articleOf, checkTyped, distractors, shuffle, type TypedResult } from "../utils/answerCheck";
import type { Grade, VocabItem } from "../types";

// Active-recall vocabulary trainer. Instead of flipping a card and grading
// yourself, every word is actually *retrieved*: recognise it among options,
// type it from the Russian, or write what you hear. The SRS grade comes from
// the real answer, wrong words come back at the end of the session, and new
// words are introduced before they are tested.

type Mode = "mix" | "write" | "listen" | "cards";
type TaskKind = "intro" | "choice-ru" | "choice-target" | "type" | "listen-type" | "card";

interface Task {
  word: VocabItem;
  kind: TaskKind;
  retry?: boolean;
}

const SESSION_SIZE = 12;
const MAX_NEW = 6;

export const DUE_TOPIC = "__due__";

const MODES: { id: Mode; icon: string; title: string; text: string }[] = [
  { id: "mix", icon: "🧠", title: "Умная тренировка", text: "Новые слова → узнавание → ввод по памяти. Рекомендуем." },
  { id: "write", icon: "⌨️", title: "Напиши слово", text: "Видите перевод — пишете слово. Самый сильный режим." },
  { id: "listen", icon: "🎧", title: "На слух", text: "Слышите слово — пишете его. Тренирует понимание речи." },
  { id: "cards", icon: "🃏", title: "Карточки", text: "Классические карточки с самооценкой — для быстрого просмотра." },
];

export function VocabTrainer({ topic, nav }: { topic: string; nav: (r: Route) => void }) {
  const progress = useProgress();
  const { vocabTopics, vocabulary } = useLanguageData();
  const [mode, setMode] = useState<Mode | null>(null);
  const isDueSession = topic === DUE_TOPIC;
  const meta = vocabTopics.find((t) => t.id === topic);
  const title = isDueSession ? "Повторение" : meta?.title ?? "Слова";

  const pool = useMemo(() => {
    if (isDueSession) {
      return vocabulary.filter((v) => {
        const c = progress.vocabCards[v.id];
        return c && isDue(c);
      });
    }
    return vocabulary.filter((v) => v.topic === topic);
    // Snapshot at session start — don't reshuffle while answering.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, vocabulary, mode]);

  const back = () => nav({ name: "vocab-topics" });

  if (!isDueSession && !meta) return null;

  if (pool.length === 0) {
    return (
      <div>
        <TopBar title={title} onBack={back} />
        <div className="p-8 text-center">
          <p className="text-4xl">✨</p>
          <p className="mt-3 text-slate-300">
            {isDueSession ? "На сегодня повторять нечего — всё свежее в памяти!" : "В этой теме пока нет слов."}
          </p>
        </div>
      </div>
    );
  }

  if (!mode) {
    const learned = pool.filter((w) => progress.vocabCards[w.id]).length;
    return (
      <div>
        <TopBar title={title} onBack={back} />
        <div className="space-y-3 px-4 py-4">
          <p className="text-xs text-slate-500">
            {isDueSession
              ? `${pool.length} слов пора повторить, чтобы они не забылись.`
              : `${pool.length} слов · начато ${learned}`}
          </p>
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex w-full items-center gap-3 rounded-2xl p-4 text-left active:scale-[0.99] ${
                m.id === "mix" ? "accent-soft-bg ring-1 ring-[color:var(--accent)]" : "bg-slate-900"
              }`}
            >
              <span className="text-3xl">{m.icon}</span>
              <div>
                <p className="font-semibold text-slate-100">{m.title}</p>
                <p className="text-xs text-slate-400">{m.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Session
      key={mode}
      mode={mode}
      pool={pool}
      allWords={vocabulary}
      title={title}
      onExit={() => setMode(null)}
      onBack={back}
    />
  );
}

function buildTasks(mode: Mode, pool: VocabItem[], cards: Record<string, { repetition: number } | undefined>, tts: boolean): Task[] {
  const due = pool.filter((w) => cards[w.id] && isDue(cards[w.id] as never));
  const fresh = pool.filter((w) => !cards[w.id]);
  const rest = pool.filter((w) => cards[w.id] && !isDue(cards[w.id] as never));
  const picked = [...shuffle(due), ...fresh.slice(0, MAX_NEW), ...shuffle(rest)].slice(0, SESSION_SIZE);

  const tasks: Task[] = [];
  for (const w of picked) {
    const rep = cards[w.id]?.repetition ?? -1;
    if (mode === "cards") tasks.push({ word: w, kind: "card" });
    else if (mode === "write") tasks.push({ word: w, kind: "type" });
    else if (mode === "listen") tasks.push({ word: w, kind: tts ? "listen-type" : "type" });
    else if (rep < 0) {
      tasks.push({ word: w, kind: "intro" }, { word: w, kind: "choice-ru" });
    } else if (rep < 2) {
      tasks.push({ word: w, kind: Math.random() < 0.5 ? "choice-target" : "choice-ru" });
    } else {
      tasks.push({ word: w, kind: tts && Math.random() < 0.3 ? "listen-type" : "type" });
    }
  }
  // Introductions stay right before their first question; everything else is
  // interleaved so that related words don't come in a predictable order.
  return tasks;
}

function Session({
  mode,
  pool,
  allWords,
  title,
  onExit,
  onBack,
}: {
  mode: Mode;
  pool: VocabItem[];
  allWords: VocabItem[];
  title: string;
  onExit: () => void;
  onBack: () => void;
}) {
  const progress = useProgress();
  const tts = useTextToSpeech();
  const [tasks, setTasks] = useState<Task[]>(() =>
    buildTasks(mode, pool, progress.vocabCards, tts.supported),
  );
  const [index, setIndex] = useState(0);
  const [answered, setAnswered] = useState<null | { ok: boolean; note?: string }>(null);
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const graded = useRef<Set<string>>(new Set());
  const [wrongWords, setWrongWords] = useState<VocabItem[]>([]);
  const [correctFirstTry, setCorrectFirstTry] = useState(0);
  const [done, setDone] = useState(false);

  const task = tasks[index];
  const uniqueWords = useMemo(() => new Set(tasks.map((t) => t.word.id)).size, [tasks]);

  // Auto-play the word for listening tasks.
  useEffect(() => {
    if (task?.kind === "listen-type") tts.speak(task.word.de, 0.9);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const finishAnswer = (ok: boolean, grade: Grade, note?: string) => {
    const w = task.word;
    if (!graded.current.has(w.id)) {
      graded.current.add(w.id);
      progress.reviewVocab(w.id, ok ? grade : 0);
      progress.recordVocabResult(w.id, w.topic, ok);
      if (ok) setCorrectFirstTry((c) => c + 1);
      else setWrongWords((ws) => [...ws, w]);
    } else if (ok) {
      progress.recordVocabResult(w.id, w.topic, true);
    }
    if (ok) {
      const nextCombo = combo + 1;
      const bonus = nextCombo % 5 === 0 ? 3 : 0;
      progress.addXp(2 + bonus);
      setXpEarned((x) => x + 2 + bonus);
      setCombo(nextCombo);
      setBestCombo((b) => Math.max(b, nextCombo));
    } else {
      setCombo(0);
      navigator.vibrate?.(60);
      // Wrong words come back at the end, as an easier recognition task.
      setTasks((ts) => [...ts, { word: w, kind: "choice-ru", retry: true }]);
    }
    setAnswered({ ok, note });
  };

  const next = () => {
    setAnswered(null);
    if (index + 1 >= tasks.length) {
      setDone(true);
      progress.incrementSessions();
    } else {
      setIndex(index + 1);
    }
  };

  if (done) {
    const accuracy = Math.round((correctFirstTry / Math.max(1, uniqueWords)) * 100);
    const goalPct = Math.min(100, Math.round((progress.todayXp / progress.dailyGoalXp) * 100));
    return (
      <div className="flex flex-col items-center px-6 pt-[calc(env(safe-area-inset-top)+2rem)] text-center">
        <span className="text-6xl">{accuracy >= 80 ? "🏆" : accuracy >= 50 ? "💪" : "🌱"}</span>
        <h2 className="mt-4 text-2xl font-bold text-slate-50">
          {accuracy >= 80 ? "Блестяще!" : accuracy >= 50 ? "Хорошая работа!" : "Начало положено!"}
        </h2>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <Stat label="точность" value={`${accuracy}%`} />
          <Stat label="XP" value={`+${xpEarned}`} />
          <Stat label="лучшая серия" value={`🔥${bestCombo}`} />
        </div>
        <div className="mt-5 w-full rounded-2xl bg-slate-900 p-4 text-left">
          <p className="text-xs text-slate-400">
            Цель дня: {progress.todayXp}/{progress.dailyGoalXp} XP {goalPct >= 100 && "— выполнена! 🎯"}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
            <div className="accent-bg h-full rounded-full" style={{ width: `${goalPct}%` }} />
          </div>
        </div>
        {wrongWords.length > 0 && (
          <div className="mt-4 w-full rounded-2xl bg-slate-900 p-4 text-left">
            <p className="text-xs font-semibold text-slate-400">Слова, которые вернутся на повторение:</p>
            <ul className="mt-2 space-y-1">
              {wrongWords.map((w) => (
                <li key={w.id} className="text-sm text-slate-200">
                  {w.de} <span className="text-slate-500">— {w.ru}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-6 flex w-full flex-col gap-3 pb-8">
          <button onClick={onExit} className="accent-bg rounded-xl py-3 font-semibold">
            Ещё тренировку
          </button>
          <button onClick={onBack} className="rounded-xl bg-slate-800 py-3 font-semibold text-slate-200">
            К темам
          </button>
        </div>
      </div>
    );
  }

  if (!task) return null;

  return (
    <div className="flex min-h-[100svh] flex-col">
      <TopBar
        title={title}
        onBack={onExit}
        right={
          combo >= 2 ? (
            <span className="text-sm font-bold text-amber-400">🔥 {combo}</span>
          ) : (
            <span className="text-xs text-slate-500">
              {Math.min(index + 1, tasks.length)}/{tasks.length}
            </span>
          )
        }
      />
      <div className="flex flex-1 flex-col px-4 py-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div className="accent-bg h-full rounded-full transition-all" style={{ width: `${(index / tasks.length) * 100}%` }} />
        </div>
        {task.retry && <p className="mt-2 text-center text-[11px] text-amber-400">Повтор ошибки</p>}

        <div className="mt-5 flex flex-1 flex-col">
          {task.kind === "intro" && <Intro word={task.word} onNext={next} />}
          {(task.kind === "choice-ru" || task.kind === "choice-target") && (
            <Choice
              key={index}
              word={task.word}
              allWords={allWords}
              reverse={task.kind === "choice-target"}
              answered={answered}
              onAnswer={(ok) => finishAnswer(ok, 2)}
            />
          )}
          {(task.kind === "type" || task.kind === "listen-type") && (
            <Typing
              key={index}
              word={task.word}
              listen={task.kind === "listen-type"}
              answered={answered}
              onAnswer={(r) => {
                if (r === "correct") finishAnswer(true, 3);
                else if (r === "missing-article") {
                  const art = articleOf(answerVariants(task.word.de)[0]);
                  finishAnswer(true, 2, art ? `Почти! Не забывайте артикль: ${art}` : undefined);
                } else if (r === "typo") finishAnswer(true, 2, `Опечатка — правильно: ${task.word.de}`);
                else finishAnswer(false, 0);
              }}
            />
          )}
          {task.kind === "card" && <Card key={index} word={task.word} onGrade={(g) => { finishAnswer(g >= 2, g); }} answered={answered} />}
        </div>

        {answered && (
          <div
            className={`mt-4 rounded-2xl p-4 ${answered.ok ? "bg-emerald-500/15" : "bg-red-500/15"}`}
          >
            <p className={`text-sm font-semibold ${answered.ok ? "text-emerald-300" : "text-red-300"}`}>
              {answered.ok ? (combo > 0 && combo % 5 === 0 ? `Серия ${combo}! +3 XP бонус 🔥` : "Верно! ✓") : "Пока нет — запомним"}
            </p>
            {answered.note && <p className="mt-1 text-xs text-slate-300">{answered.note}</p>}
            <div className="mt-2 flex items-center gap-2">
              <SpeakButton text={task.word.de} size="sm" />
              <div>
                <p className="text-sm font-semibold text-slate-100">{task.word.de}</p>
                <p className="text-xs text-slate-400">{task.word.ru}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-300">{task.word.exampleDe}</p>
            <p className="text-[11px] text-slate-500">{task.word.exampleRu}</p>
            <button onClick={next} className="accent-bg mt-3 w-full rounded-xl py-3 font-semibold">
              Дальше →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-900 p-3">
      <p className="text-lg font-bold text-slate-50">{value}</p>
      <p className="text-[11px] text-slate-500">{label}</p>
    </div>
  );
}

function Intro({ word, onNext }: { word: VocabItem; onNext: () => void }) {
  const { supported, listening, transcript, start } = useSpeechRecognition();
  const ok = transcript && !listening ? matchesAny(transcript, [word.de], 0.75).matched : null;
  return (
    <div className="flex flex-1 flex-col">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-sky-300">Новое слово</p>
      <div className="mt-3 flex flex-col items-center gap-2 rounded-2xl bg-slate-900 p-6 text-center">
        {word.emoji && <span className="text-5xl">{word.emoji}</span>}
        <p className="text-2xl font-bold text-slate-50">{word.de}</p>
        <SpeakButton text={word.de} />
        <p className="accent-text mt-1 text-lg font-semibold">{word.ru}</p>
        <p className="mt-2 text-sm text-slate-200">{word.exampleDe}</p>
        <p className="text-xs text-slate-500">{word.exampleRu}</p>
      </div>
      {supported && (
        <button
          onClick={start}
          className={`mx-auto mt-4 rounded-full px-4 py-2 text-sm ${listening ? "recording-pulse bg-red-500/20 text-red-300" : "bg-slate-800 text-slate-300"}`}
        >
          🎤 {listening ? "Слушаю…" : "Произнести вслух"}
        </button>
      )}
      {ok !== null && (
        <p className={`mt-2 text-center text-xs ${ok ? "text-emerald-400" : "text-amber-400"}`}>
          {ok ? "Отличное произношение! ✓" : `Услышали «${transcript}» — попробуйте ещё раз`}
        </p>
      )}
      <button onClick={onNext} className="accent-bg mt-auto w-full rounded-xl py-3 font-semibold">
        Запомнил — проверить
      </button>
    </div>
  );
}

function Choice({
  word,
  allWords,
  reverse,
  answered,
  onAnswer,
}: {
  word: VocabItem;
  allWords: VocabItem[];
  reverse: boolean;
  answered: { ok: boolean } | null;
  onAnswer: (ok: boolean) => void;
}) {
  // reverse = show Russian, choose the word; otherwise show the word, choose Russian.
  const field = reverse ? "de" : "ru";
  const options = useMemo(
    () => shuffle([word[field], ...distractors(word, allWords, field)]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [word.id],
  );
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <div>
      <p className="text-center text-xs text-slate-500">{reverse ? "Как сказать?" : "Что это значит?"}</p>
      <div className="mt-3 flex flex-col items-center gap-2 rounded-2xl bg-slate-900 p-6 text-center">
        {word.emoji && <span className="text-4xl">{word.emoji}</span>}
        <p className="text-2xl font-bold text-slate-50">{reverse ? word.ru : word.de}</p>
        {!reverse && <SpeakButton text={word.de} />}
      </div>
      <div className="mt-4 space-y-2">
        {options.map((o) => {
          const isRight = o === word[field];
          const state = !answered ? "" : isRight ? "border-emerald-500 bg-emerald-500/10" : picked === o ? "border-red-500 bg-red-500/10" : "opacity-50";
          return (
            <button
              key={o}
              disabled={!!answered}
              onClick={() => {
                setPicked(o);
                onAnswer(isRight);
              }}
              className={`w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-left text-sm text-slate-100 active:bg-slate-800 ${state}`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Typing({
  word,
  listen,
  answered,
  onAnswer,
}: {
  word: VocabItem;
  listen: boolean;
  answered: { ok: boolean } | null;
  onAnswer: (r: TypedResult) => void;
}) {
  const [value, setValue] = useState("");
  const [hint, setHint] = useState(0);
  const target = answerVariants(word.de)[0];
  const submit = () => {
    if (!value.trim() || answered) return;
    onAnswer(hint >= 2 ? (checkTyped(value, word) === "wrong" ? "wrong" : "typo") : checkTyped(value, word));
  };
  return (
    <div>
      <p className="text-center text-xs text-slate-500">{listen ? "Напишите, что услышали" : "Напишите по памяти"}</p>
      <div className="mt-3 flex flex-col items-center gap-2 rounded-2xl bg-slate-900 p-6 text-center">
        {listen ? (
          <>
            <SpeakButton text={word.de} />
            <p className="text-xs text-slate-500">Нажмите, чтобы прослушать ещё раз</p>
          </>
        ) : (
          <>
            {word.emoji && <span className="text-4xl">{word.emoji}</span>}
            <p className="text-2xl font-bold text-slate-50">{word.ru}</p>
          </>
        )}
        {hint > 0 && (
          <p className="font-mono text-sm tracking-widest text-sky-300">
            {target
              .split("")
              .map((ch, i) => (ch === " " ? " " : i < hint * 2 ? ch : "•"))
              .join("")}
          </p>
        )}
      </div>
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        disabled={!!answered}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        placeholder="Ваш ответ…"
        className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-lg text-slate-100 outline-none focus:border-[color:var(--accent)]"
      />
      <SpecialChars onChar={(c) => setValue((v) => v + c)} />
      {!answered && (
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => setHint((h) => Math.min(h + 1, 3))}
            className="rounded-xl bg-slate-800 px-4 py-3 text-sm text-slate-300"
          >
            💡 Подсказка
          </button>
          <button
            onClick={submit}
            disabled={!value.trim()}
            className="accent-bg flex-1 rounded-xl py-3 font-semibold disabled:opacity-40"
          >
            Проверить
          </button>
        </div>
      )}
      {!answered && (
        <button onClick={() => onAnswer("wrong")} className="mt-2 w-full text-center text-xs text-slate-500 underline">
          Не помню
        </button>
      )}
    </div>
  );
}

// Umlauts and accents are a pain on phone keyboards set to Russian.
function SpecialChars({ onChar }: { onChar: (c: string) => void }) {
  const progress = useProgress();
  const chars =
    progress.language === "de"
      ? ["ä", "ö", "ü", "ß"]
      : progress.language === "fr"
        ? ["é", "è", "ê", "à", "ç", "ù", "ô", "œ"]
        : [];
  if (!chars.length) return null;
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {chars.map((c) => (
        <button key={c} onClick={() => onChar(c)} className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm text-slate-200">
          {c}
        </button>
      ))}
    </div>
  );
}

function Card({
  word,
  onGrade,
  answered,
}: {
  word: VocabItem;
  onGrade: (g: Grade) => void;
  answered: { ok: boolean } | null;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex flex-1 flex-col">
      <div className={`flip-card h-64 w-full cursor-pointer ${flipped ? "flipped" : ""}`} onClick={() => setFlipped((f) => !f)}>
        <div className="flip-card-inner relative h-full w-full">
          <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-slate-900 p-6 text-center">
            {word.emoji && <span className="text-5xl">{word.emoji}</span>}
            <p className="text-2xl font-bold text-slate-50">{word.de}</p>
            <div onClick={(e) => e.stopPropagation()}>
              <SpeakButton text={word.de} />
            </div>
            <p className="text-xs text-slate-500">Вспомните перевод и нажмите</p>
          </div>
          <div className="flip-card-back accent-soft-bg absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-6 text-center">
            <p className="accent-text text-xl font-semibold">{word.ru}</p>
            <p className="mt-2 text-sm text-slate-200">{word.exampleDe}</p>
            <p className="text-xs text-slate-400">{word.exampleRu}</p>
          </div>
        </div>
      </div>
      {!answered && (
        <div className="mt-auto grid grid-cols-4 gap-2 pt-6">
          {(
            [
              [0, "Забыл", "bg-red-500/15 text-red-400"],
              [1, "Сложно", "bg-amber-500/15 text-amber-400"],
              [2, "Хорошо", "bg-sky-500/15 text-sky-400"],
              [3, "Легко", "bg-emerald-500/15 text-emerald-400"],
            ] as [Grade, string, string][]
          ).map(([g, label, color]) => (
            <button
              key={g}
              disabled={!flipped}
              onClick={() => onGrade(g)}
              className={`rounded-xl py-3 text-xs font-semibold ${color} disabled:opacity-30`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
