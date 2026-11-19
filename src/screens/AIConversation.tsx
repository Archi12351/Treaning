import { useEffect, useRef, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useAIChat } from "../hooks/useAIChat";
import { canUseAI } from "../utils/aiBackend";
import { useAIAccess } from "../hooks/useAIAccess";
import { MISSIONS, type Mission } from "../data/missions";
import { conversationReviewPrompt, parseJsonObject, runAITask } from "../utils/aiClient";
import { useSpeechRecognition, useTextToSpeech } from "../hooks/useSpeech";

const TOPICS = [
  "Повседневность и small talk",
  "Путешествия и отпуск",
  "Работа и карьера",
  "Хобби и досуг",
  "Еда и рестораны",
  "Визит в госучреждение (ВНЖ, налоги, регистрация)",
  "Аренда квартиры и разговор с арендодателем",
  "Собеседование на работу",
  "Свободная тема",
];

// «на немецком» / «по-немецки» для подписей на текущем языке обучения.
const LANG_WORDS: Record<string, { na: string; po: string }> = {
  de: { na: "на немецком", po: "по-немецки" },
  en: { na: "на английском", po: "по-английски" },
  fr: { na: "на французском", po: "по-французски" },
};

interface Review {
  score: number;
  objectives?: boolean[];
  praise?: string;
  mistakes?: { wrong: string; right: string; why: string }[];
  tips?: string[];
  usefulPhrases?: string[];
}

export function AIConversation({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const words = LANG_WORDS[progress.language] ?? LANG_WORDS.de;
  const ai = useAIAccess();
  const [topic, setTopic] = useState<string | null>(null);
  const [mission, setMission] = useState<Mission | null>(null);
  const [review, setReview] = useState<Review | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { speak, speaking } = useTextToSpeech();
  const { supported: sttSupported, listening, transcript, start } = useSpeechRecognition();
  const { messages, loading, send, reset } = useAIChat({
    provider: progress.aiProvider,
    apiKey: progress.apiKey,
    model: progress.aiModel,
    geminiApiKey: progress.geminiApiKey,
    geminiModel: progress.geminiModel,
    language: progress.language,
    level: progress.level,
    topic: mission ? `ROLE: ${mission.role}` : topic ?? "everyday life",
  });

  const finishAndReview = async () => {
    setReviewing(true);
    setReviewError(null);
    try {
      const objectives = mission?.objectives ?? [];
      const raw = await runAITask(
        ai.config,
        conversationReviewPrompt(progress.language, progress.level, messages, objectives),
        { kind: "review", language: progress.language, level: progress.level, messages, objectives },
        2000,
      );
      const r = parseJsonObject<Review>(raw);
      setReview(r);
      progress.addXp(10);
      progress.bumpDaily("dialog");
      progress.incrementSessions();
    } catch (e) {
      setReviewError(e instanceof Error ? e.message : "Не удалось получить разбор.");
    } finally {
      setReviewing(false);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!listening && transcript) {
      setTextInput(transcript);
    }
  }, [listening, transcript]);

  const submit = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setTextInput("");
    setErrorMsg(null);
    const result = await send(trimmed);
    if (!result.ok) {
      setErrorMsg(result.error ?? "Ошибка");
    } else {
      progress.addXp(3);
    }
  };

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.role === "assistant" && last.text) {
      speak(last.text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  if (!canUseAI(progress.aiProvider, progress.apiKey, progress.geminiApiKey)) {
    return (
      <div>
        <TopBar title="AI-собеседник" onBack={() => nav({ name: "conversations" })} />
        <div className="flex flex-col items-center px-6 pt-10 text-center">
          <span className="text-5xl">🤖</span>
          <h2 className="mt-4 text-lg font-bold text-slate-50">
            Живой AI-собеседник {words.na}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {progress.aiProvider === "gemini"
              ? "Для AI-диалога через Gemini нужен ваш собственный API-ключ Google. Он хранится только на этом устройстве."
              : "Это приложение работает прямо в браузере, без своего сервера, поэтому для настоящего AI-диалога (Claude) нужен ваш собственный API-ключ Anthropic. Он хранится только на этом устройстве."}
          </p>
          <button
            onClick={() => nav({ name: "settings" })}
            className="accent-bg mt-6 w-full rounded-xl py-3 font-semibold"
          >
            Добавить API-ключ
          </button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div>
        <TopBar title="AI-собеседник" onBack={() => nav({ name: "conversations" })} />
        <div className="px-4 py-4">
          <p className="text-sm font-semibold text-slate-200">🎯 Ролевые миссии</p>
          <p className="mt-1 text-xs text-slate-500">
            ИИ играет роль — чиновника, арендодателя, врача. У вас есть цели, а в конце —
            разбор: достигли ли их и какие были ошибки.
          </p>
          <div className="mt-3 space-y-2">
            {MISSIONS.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setMission(m);
                  setTopic(null);
                  setReview(null);
                  reset();
                  setStarted(true);
                }}
                className="flex w-full items-center gap-3 rounded-xl bg-slate-900 p-3.5 text-left active:bg-slate-800"
              >
                <span className="text-2xl">{m.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-100">
                    {m.official && <span className="mr-1 text-xs">🏛️</span>}
                    {m.title}
                  </p>
                  <p className="truncate text-[11px] text-slate-500">{m.objectives.join(" · ")}</p>
                </div>
                <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-400">{m.level}</span>
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-slate-200">💬 Свободный разговор</p>
          <p className="mt-1 text-xs text-slate-500">
            Выберите тему для разговора {words.na}. Собеседник подстроится под ваш уровень ({progress.level}).
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`rounded-xl border px-3 py-3 text-left text-sm font-medium ${
                  topic === t
                    ? "accent-ring accent-soft-bg border"
                    : "border-slate-700 bg-slate-800/40 text-slate-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setMission(null);
              setReview(null);
              reset();
              setStarted(true);
            }}
            disabled={!topic}
            className="accent-bg mt-6 w-full rounded-xl py-3 font-semibold disabled:opacity-30"
          >
            Начать разговор
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <TopBar
        title={mission?.title ?? topic ?? "AI-собеседник"}
        onBack={() => {
          setStarted(false);
        }}
        right={
          messages.filter((m) => m.role === "user").length >= 2 && !review ? (
            <button
              onClick={() => void finishAndReview()}
              disabled={reviewing}
              className="accent-bg rounded-full px-3 py-1 text-[11px] font-semibold disabled:opacity-50"
            >
              {reviewing ? "Разбор…" : "Завершить и разобрать"}
            </button>
          ) : (
            <button
              onClick={() => nav({ name: "settings" })}
              className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300"
            >
              ⚙️
            </button>
          )
        }
      />
      <div className="flex-1 space-y-3 px-4 py-4">
        {mission && (
          <div className="rounded-2xl bg-slate-900 p-3.5">
            <p className="text-xs font-semibold text-slate-300">🎯 Ваши цели</p>
            <ul className="mt-1.5 space-y-1">
              {mission.objectives.map((o, i) => (
                <li key={o} className="text-xs text-slate-400">
                  {review?.objectives?.[i] === true ? "✅" : review?.objectives?.[i] === false ? "❌" : "◻️"} {o}
                </li>
              ))}
            </ul>
          </div>
        )}
        {messages.length === 0 && (
          <p className="text-center text-xs text-slate-500">
            {mission
              ? `Начните разговор: поздоровайтесь ${words.po} и объясните, зачем пришли.`
              : `Скажите что-нибудь ${words.po} или напишите текстом, чтобы начать.`}
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${m.role === "assistant" ? "justify-start" : "flex-row-reverse justify-start"}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-base">
              {m.role === "assistant" ? "🤖" : progress.userAvatar}
            </span>
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm ${
                m.role === "assistant"
                  ? "rounded-tl-sm bg-slate-800 text-slate-100"
                  : "accent-soft-bg rounded-tr-sm !text-slate-100"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-sm bg-slate-800 px-3.5 py-2.5 text-sm text-slate-400">
              печатает...
            </div>
          </div>
        )}
        {errorMsg && (
          <p className="rounded-lg bg-red-500/10 p-2.5 text-xs text-red-400">{errorMsg}</p>
        )}
        {reviewError && <p className="rounded-lg bg-red-500/10 p-2.5 text-xs text-red-400">{reviewError}</p>}
        {review && (
          <div className="space-y-3 rounded-2xl bg-gradient-to-br from-sky-600/20 to-violet-600/20 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-lg font-bold text-white">
                {review.score}
              </div>
              <div>
                <p className="font-semibold text-slate-100">Разбор разговора</p>
                {review.praise && <p className="text-xs text-slate-300">👍 {review.praise}</p>}
              </div>
            </div>
            {review.mistakes && review.mistakes.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-300">Ошибки</p>
                <ul className="mt-1 space-y-2">
                  {review.mistakes.map((m, i) => (
                    <li key={i} className="text-sm">
                      <span className="text-red-300 line-through">{m.wrong}</span>
                      <span className="mx-1 text-slate-500">→</span>
                      <span className="font-semibold text-emerald-300">{m.right}</span>
                      <p className="text-[11px] text-slate-400">{m.why}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {review.usefulPhrases && review.usefulPhrases.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-300">Полезные фразы</p>
                <ul className="mt-1 space-y-1">
                  {review.usefulPhrases.map((ph) => (
                    <li key={ph} className="text-xs text-slate-200">• {ph}</li>
                  ))}
                </ul>
              </div>
            )}
            {review.tips && review.tips.length > 0 && (
              <ul className="list-disc space-y-1 pl-4 text-xs text-slate-300">
                {review.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            <button
              onClick={() => {
                setReview(null);
                reset();
              }}
              className="accent-bg w-full rounded-xl py-2.5 text-sm font-semibold"
            >
              Попробовать ещё раз
            </button>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div className="sticky bottom-0 border-t border-slate-800 bg-slate-950 px-4 py-3">
        <div className="flex items-center gap-2">
          <input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit(textInput);
            }}
            placeholder={`Напишите ${words.na}...`}
            className="flex-1 rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-[color:var(--accent)]"
          />
          {sttSupported && (
            <button
              onClick={start}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                listening ? "recording-pulse bg-red-500/20 text-red-400" : "bg-slate-800 text-slate-300"
              }`}
              aria-label="Говорить"
            >
              🎤
            </button>
          )}
          <button
            onClick={() => submit(textInput)}
            disabled={!textInput.trim() || loading}
            className="accent-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-full disabled:opacity-30"
            aria-label="Отправить"
          >
            ➤
          </button>
        </div>
        {speaking && <p className="accent-text mt-1.5 text-center text-[11px]">🔊 говорит...</p>}
      </div>
    </div>
  );
}
