import { useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useReminderPermission } from "../hooks/useReminders";
import { hasAIBackend } from "../utils/aiBackend";

const MODELS = [
  { id: "claude-opus-5", label: "Claude Opus 5", note: "Самый умный, дороже и чуть медленнее" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5", note: "Баланс скорости и качества" },
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", note: "Самый быстрый и дешёвый" },
];

const GEMINI_MODELS = [
  { id: "gemini-pro-latest", label: "Gemini Pro", note: "Самый мощный, для сложных диалогов" },
  { id: "gemini-flash-latest", label: "Gemini Flash", note: "Быстрый и бесплатный лимит щедрее" },
];

const THEMES: { id: string; label: string; swatch: string }[] = [
  { id: "emerald", label: "Изумрудный", swatch: "#10b981" },
  { id: "indigo", label: "Индиго", swatch: "#6366f1" },
  { id: "rose", label: "Розовый", swatch: "#f43f5e" },
  { id: "amber", label: "Янтарный", swatch: "#f59e0b" },
  { id: "sky", label: "Небесный", swatch: "#0ea5e9" },
];

const AVATARS = ["🙂", "😎", "🧑‍🎓", "👩‍🎓", "🧑‍💻", "👩‍💻", "🧔", "👩‍🦰", "🧑‍🦱", "🐨"];

export function Settings({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [draft, setDraft] = useState(progress.apiKey);
  const [geminiDraft, setGeminiDraft] = useState(progress.geminiApiKey);
  const [saved, setSaved] = useState(false);
  const [geminiSaved, setGeminiSaved] = useState(false);
  const { supported: notifSupported, permission, requestPermission } = useReminderPermission();

  const save = () => {
    progress.setApiKey(draft.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const saveGemini = () => {
    progress.setGeminiApiKey(geminiDraft.trim());
    setGeminiSaved(true);
    setTimeout(() => setGeminiSaved(false), 1500);
  };

  const toggleReminders = async () => {
    if (!progress.remindersEnabled) {
      const granted = await requestPermission();
      if (granted) progress.setRemindersEnabled(true);
    } else {
      progress.setRemindersEnabled(false);
    }
  };

  return (
    <div>
      <TopBar title="Настройки" onBack={() => nav({ name: "progress" })} />
      <div className="space-y-5 px-4 py-4">
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">🎨 Внешний вид</p>
          <p className="mt-1 text-xs text-slate-500">Цвет акцента приложения</p>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => progress.setAccentTheme(t.id)}
                className="flex flex-col items-center gap-1.5"
                aria-label={t.label}
              >
                <span
                  className="h-9 w-9 rounded-full border-2"
                  style={{
                    backgroundColor: t.swatch,
                    borderColor: progress.accentTheme === t.id ? "#e5e7eb" : "transparent",
                  }}
                />
                <span className="text-[10px] text-slate-500">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">🙂 Ваш аватар</p>
          <p className="mt-1 text-xs text-slate-500">
            Показывается рядом с вашими репликами в диалогах
          </p>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {AVATARS.map((a) => (
              <button
                key={a}
                onClick={() => progress.setUserAvatar(a)}
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl ${
                  progress.userAvatar === a
                    ? "accent-ring bg-slate-800"
                    : "border-transparent bg-slate-800/50"
                }`}
                aria-label={a}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <div className="flex items-center justify-between">
            <div className="pr-3">
              <p className="text-sm font-semibold text-slate-200">🔔 Напоминания</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Вечернее уведомление, если вы ещё не позанимались сегодня.
                Работает, пока приложение открыто в браузере/на телефоне —
                без своего сервера нет настоящих push-уведомлений при полностью
                закрытом приложении.
              </p>
              {!notifSupported && (
                <p className="mt-1 text-xs text-amber-400">Браузер не поддерживает уведомления.</p>
              )}
              {notifSupported && permission === "denied" && (
                <p className="mt-1 text-xs text-amber-400">
                  Уведомления заблокированы в настройках браузера.
                </p>
              )}
            </div>
            <button
              onClick={toggleReminders}
              disabled={!notifSupported || permission === "denied"}
              className={`h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-30 ${
                progress.remindersEnabled ? "accent-bg" : "bg-slate-700"
              }`}
            >
              <span
                className="block h-5 w-5 rounded-full bg-white transition-transform"
                style={{
                  transform: progress.remindersEnabled ? "translateX(22px)" : "translateX(4px)",
                }}
              />
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">🤖 AI-собеседник: провайдер</p>
          <p className="mt-1 text-xs text-slate-500">Какая модель ведёт живой диалог</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => progress.setAiProvider("claude")}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium ${
                progress.aiProvider === "claude"
                  ? "accent-ring accent-soft-bg border"
                  : "border-slate-700 bg-slate-800/40 text-slate-300"
              }`}
            >
              Claude
            </button>
            <button
              onClick={() => progress.setAiProvider("gemini")}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium ${
                progress.aiProvider === "gemini"
                  ? "accent-ring accent-soft-bg border"
                  : "border-slate-700 bg-slate-800/40 text-slate-300"
              }`}
            >
              Gemini
            </button>
          </div>
        </div>

        {progress.aiProvider === "claude" ? (
          <>
            {hasAIBackend() ? (
              <div className="accent-soft-bg rounded-2xl p-4">
                <p className="text-sm font-semibold">✅ AI-собеседник подключён через сервер</p>
                <p className="mt-1 text-xs leading-relaxed opacity-90">
                  Свой ключ вводить не нужно — приложение обращается к общему
                  серверному прокси, который держит ключ в секрете.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl bg-slate-900 p-4">
                <p className="text-sm font-semibold text-slate-200">Ключ Anthropic API</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Приложение полностью работает в браузере, без своего сервера — поэтому
                  для живого AI-собеседника нужен ваш собственный ключ Claude API.
                  Получить его можно на{" "}
                  <a
                    href="https://console.anthropic.com"
                    target="_blank"
                    rel="noreferrer"
                    className="accent-text underline"
                  >
                    console.anthropic.com
                  </a>
                  . Ключ хранится только в памяти этого браузера (localStorage) и
                  никуда, кроме api.anthropic.com, не отправляется.
                </p>
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  type="password"
                  placeholder="sk-ant-..."
                  className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-[color:var(--accent)]"
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={save}
                    disabled={!draft.trim()}
                    className="accent-bg flex-1 rounded-lg py-2.5 text-sm font-semibold disabled:opacity-30"
                  >
                    {saved ? "Сохранено ✓" : "Сохранить ключ"}
                  </button>
                  {progress.apiKey && (
                    <button
                      onClick={() => {
                        setDraft("");
                        progress.setApiKey("");
                      }}
                      className="rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-red-400"
                    >
                      Удалить
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="rounded-2xl bg-slate-900 p-4">
              <p className="text-sm font-semibold text-slate-200">Модель</p>
              <p className="mt-1 text-xs text-slate-500">
                По умолчанию используется самая качественная модель. Для более
                быстрых и дешёвых ответов в разговоре можно выбрать другую.
              </p>
              <div className="mt-3 space-y-2">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => progress.setAiModel(m.id)}
                    className={`w-full rounded-lg border px-3 py-2.5 text-left ${
                      progress.aiModel === m.id
                        ? "accent-ring accent-soft-bg border"
                        : "border-slate-700 bg-slate-800/40"
                    }`}
                  >
                    <p className="text-sm font-medium text-slate-100">{m.label}</p>
                    <p className="text-[11px] text-slate-500">{m.note}</p>
                  </button>
                ))}
              </div>
            </div>

            {!hasAIBackend() && (
              <div className="rounded-2xl bg-amber-500/10 p-4">
                <p className="text-xs leading-relaxed text-amber-200/90">
                  ⚠️ Хранение API-ключа в браузере не так безопасно, как на сервере —
                  любой, кто получит доступ к этому устройству/браузеру, теоретически
                  сможет увидеть ключ. Не используйте ключ с высоким лимитом трат и
                  следите за расходами в консоли Anthropic.
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="rounded-2xl bg-slate-900 p-4">
              <p className="text-sm font-semibold text-slate-200">Ключ Google Gemini API</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Gemini всегда работает напрямую из браузера — нужен ваш собственный
                ключ. Получить бесплатный ключ можно на{" "}
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noreferrer"
                  className="accent-text underline"
                >
                  aistudio.google.com/apikey
                </a>
                . Ключ хранится только в памяти этого браузера (localStorage) и
                никуда, кроме generativelanguage.googleapis.com, не отправляется.
              </p>
              <input
                value={geminiDraft}
                onChange={(e) => setGeminiDraft(e.target.value)}
                type="password"
                placeholder="AIzaSy..."
                className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-[color:var(--accent)]"
                autoComplete="off"
                spellCheck={false}
              />
              <div className="mt-3 flex gap-2">
                <button
                  onClick={saveGemini}
                  disabled={!geminiDraft.trim()}
                  className="accent-bg flex-1 rounded-lg py-2.5 text-sm font-semibold disabled:opacity-30"
                >
                  {geminiSaved ? "Сохранено ✓" : "Сохранить ключ"}
                </button>
                {progress.geminiApiKey && (
                  <button
                    onClick={() => {
                      setGeminiDraft("");
                      progress.setGeminiApiKey("");
                    }}
                    className="rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-red-400"
                  >
                    Удалить
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 p-4">
              <p className="text-sm font-semibold text-slate-200">Модель</p>
              <div className="mt-3 space-y-2">
                {GEMINI_MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => progress.setGeminiModel(m.id)}
                    className={`w-full rounded-lg border px-3 py-2.5 text-left ${
                      progress.geminiModel === m.id
                        ? "accent-ring accent-soft-bg border"
                        : "border-slate-700 bg-slate-800/40"
                    }`}
                  >
                    <p className="text-sm font-medium text-slate-100">{m.label}</p>
                    <p className="text-[11px] text-slate-500">{m.note}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-amber-500/10 p-4">
              <p className="text-xs leading-relaxed text-amber-200/90">
                ⚠️ Хранение API-ключа в браузере не так безопасно, как на сервере —
                любой, кто получит доступ к этому устройству/браузеру, теоретически
                сможет увидеть ключ. Следите за расходами в Google AI Studio.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
