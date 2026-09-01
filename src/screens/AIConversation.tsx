import { useEffect, useRef, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useAIChat } from "../hooks/useAIChat";
import { canUseAI } from "../utils/aiBackend";
import { useSpeechRecognition, useTextToSpeech } from "../hooks/useSpeech";

const TOPICS = [
  "Alltag & Small Talk",
  "Reisen & Urlaub",
  "Arbeit & Karriere",
  "Hobbys & Freizeit",
  "Essen & Restaurant",
  "Freie Unterhaltung",
];

export function AIConversation({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [topic, setTopic] = useState<string | null>(null);
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
    level: progress.level,
    topic: topic ?? "Alltag",
  });

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
            Живой AI-собеседник на немецком
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
          <p className="text-sm text-slate-400">
            Выберите тему для свободного разговора на немецком. Собеседник
            подстроится под ваш уровень ({progress.level}).
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
        title={topic ?? "AI-собеседник"}
        onBack={() => {
          setStarted(false);
        }}
        right={
          <button
            onClick={() => nav({ name: "settings" })}
            className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300"
          >
            ⚙️
          </button>
        }
      />
      <div className="flex-1 space-y-3 px-4 py-4">
        {messages.length === 0 && (
          <p className="text-center text-xs text-slate-500">
            Скажите что-нибудь по-немецки или напишите текстом, чтобы начать.
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
            placeholder="Напишите на немецком..."
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
