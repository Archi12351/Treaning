import { useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useReminderPermission } from "../hooks/useReminders";
import { useVoicesForLanguage } from "../hooks/useSpeech";
import { useLanguageData } from "../hooks/useLanguageData";
import { GEMINI_VOICES, synthesizeSpeech } from "../utils/geminiTts";
import { hasAIBackend } from "../utils/aiBackend";
import { usePremium } from "../hooks/usePremium";
import { BRAND } from "../config/brand";
import {
  getReminderConsent,
  grantReminderConsent,
  setTrialReminder,
  updateReminderTime,
  withdrawReminderConsent,
} from "../utils/notifications";

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
  const { meta } = useLanguageData();
  const languageVoices = useVoicesForLanguage();
  const [aiPreviewLoading, setAiPreviewLoading] = useState<string | null>(null);
  const [aiPreviewError, setAiPreviewError] = useState<string | null>(null);

  const previewLocalVoice = (voice: SpeechSynthesisVoice) => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(meta.previewPhrase);
    utter.lang = meta.speechLang;
    utter.voice = voice;
    window.speechSynthesis.speak(utter);
  };

  const previewAiVoice = async (voiceName: string) => {
    if (!progress.geminiApiKey) return;
    setAiPreviewError(null);
    setAiPreviewLoading(voiceName);
    try {
      const blob = await synthesizeSpeech(
        meta.previewPhrase,
        progress.geminiApiKey,
        voiceName,
      );
      const audio = new Audio(URL.createObjectURL(blob));
      audio.onended = () => URL.revokeObjectURL(audio.src);
      await audio.play();
    } catch (err) {
      setAiPreviewError(err instanceof Error ? err.message : "Не удалось воспроизвести голос.");
    } finally {
      setAiPreviewLoading(null);
    }
  };

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

  const premium = usePremium();
  const [consent, setConsentState] = useState(() => getReminderConsent());
  const [restoreMsg, setRestoreMsg] = useState<string | null>(null);
  const reminderTime = consent
    ? `${String(consent.hour).padStart(2, "0")}:${String(consent.minute).padStart(2, "0")}`
    : "19:00";

  // Включение — это и есть явное согласие: пользователь сам нажимает
  // переключатель, только после этого показывается системный запрос.
  const toggleReminders = async () => {
    if (!progress.remindersEnabled) {
      const [h, m] = reminderTime.split(":").map(Number);
      const granted = premium.isNative
        ? await grantReminderConsent(h, m, consent?.trialReminder ?? true)
        : await requestPermission().then(async (ok) => {
            if (ok) await grantReminderConsent(h, m, consent?.trialReminder ?? true);
            return ok;
          });
      if (granted) progress.setRemindersEnabled(true);
    } else {
      await withdrawReminderConsent();
      progress.setRemindersEnabled(false);
    }
    setConsentState(getReminderConsent());
  };

  const changeReminderTime = async (value: string) => {
    const [h, m] = value.split(":").map(Number);
    await updateReminderTime(h, m);
    setConsentState(getReminderConsent());
  };

  return (
    <div>
      <TopBar title="Настройки" onBack={() => nav({ name: "progress" })} />
      {premium.paywallEnabled && (
        <div className="px-4 pt-4">
          <div className="rounded-2xl bg-gradient-to-r from-fuchsia-600/30 to-violet-600/30 p-4">
            <p className="text-sm font-semibold text-slate-100">
              💎 {BRAND.name} Premium {premium.isPremium ? "— активен" : ""}
            </p>
            {premium.isPremium ? (
              <>
                {premium.expiresAt && (
                  <p className="mt-1 text-xs text-slate-300">
                    {premium.inTrial ? "Пробный период до " : premium.willRenew ? "Следующее продление: " : "Доступ до "}
                    {new Date(premium.expiresAt).toLocaleDateString("ru-RU")}
                  </p>
                )}
                {premium.managementUrl && (
                  <a
                    href={premium.managementUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-100"
                  >
                    Управлять подпиской / отменить
                  </a>
                )}
              </>
            ) : (
              <button
                onClick={() => nav({ name: "paywall" })}
                className="mt-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Открыть все уровни и AI
              </button>
            )}
            {premium.isNative && (
              <button
                onClick={async () => {
                  const r = await premium.restore();
                  setRestoreMsg(r.restored ? "Покупка восстановлена." : r.error || "Активных покупок не найдено.");
                }}
                className="mt-2 block text-xs text-slate-300 underline"
              >
                Восстановить покупки
              </button>
            )}
            {restoreMsg && <p className="mt-1 text-xs text-slate-300">{restoreMsg}</p>}
          </div>
        </div>
      )}
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
              <p className="text-sm font-semibold text-slate-200">🎙️ Реалистичный AI-голос</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Живой нейро-голос от Gemini вместо системного синтеза речи
                телефона. Нужен ключ Gemini (см. ниже) — расходует его лимит,
                как обычные сообщения.
              </p>
              {!progress.geminiApiKey && (
                <p className="mt-1 text-xs text-amber-400">
                  Сначала добавьте ключ Gemini в разделе провайдера ниже.
                </p>
              )}
            </div>
            <button
              onClick={() => progress.setUseAiVoice(!progress.useAiVoice)}
              disabled={!progress.geminiApiKey}
              className={`h-7 w-12 shrink-0 rounded-full transition-colors disabled:opacity-30 ${
                progress.useAiVoice ? "accent-bg" : "bg-slate-700"
              }`}
            >
              <span
                className="block h-5 w-5 rounded-full bg-white transition-transform"
                style={{ transform: progress.useAiVoice ? "translateX(22px)" : "translateX(4px)" }}
              />
            </button>
          </div>

          {progress.useAiVoice && progress.geminiApiKey && (
            <div className="mt-3 space-y-2">
              {GEMINI_VOICES.map((v) => (
                <button
                  key={v.name}
                  onClick={() => {
                    progress.setAiVoiceName(v.name);
                    previewAiVoice(v.name);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm ${
                    progress.aiVoiceName === v.name
                      ? "accent-ring accent-soft-bg border"
                      : "border-slate-700 bg-slate-800/40 text-slate-200"
                  }`}
                >
                  <span className="truncate">{v.label}</span>
                  <span className="shrink-0 pl-2 text-[11px] text-slate-500">
                    {aiPreviewLoading === v.name ? "…" : "🔊"}
                  </span>
                </button>
              ))}
              {aiPreviewError && (
                <p className="text-xs text-red-400">{aiPreviewError}</p>
              )}
            </div>
          )}
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">🔊 Голос телефона (запасной)</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Используется, если AI-голос выше выключен или недоступен. Список
            голосов зависит от вашего телефона и браузера — на Android можно
            установить дополнительные в Настройках → Языки и ввод → Синтез
            речи → Google → Установить голосовые данные.
          </p>
          {languageVoices.length === 0 ? (
            <p className="mt-3 text-xs text-amber-400">
              Голоса для языка «{meta.label}» не найдены на этом устройстве.
            </p>
          ) : (
            <div className="mt-3 space-y-2">
              <button
                onClick={() => progress.setTtsVoiceURI("")}
                className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm ${
                  progress.ttsVoiceURI === ""
                    ? "accent-ring accent-soft-bg border"
                    : "border-slate-700 bg-slate-800/40 text-slate-200"
                }`}
              >
                Автоматически (лучший из доступных)
              </button>
              {languageVoices.map((v) => (
                <button
                  key={v.voiceURI}
                  onClick={() => {
                    progress.setTtsVoiceURI(v.voiceURI);
                    previewLocalVoice(v);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm ${
                    progress.ttsVoiceURI === v.voiceURI
                      ? "accent-ring accent-soft-bg border"
                      : "border-slate-700 bg-slate-800/40 text-slate-200"
                  }`}
                >
                  <span className="truncate">{v.name}</span>
                  <span className="shrink-0 pl-2 text-[11px] text-slate-500">🔊</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <div className="flex items-center justify-between">
            <div className="pr-3">
              <p className="text-sm font-semibold text-slate-200">🔔 Напоминания</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {premium.isNative
                  ? "Одно короткое напоминание в день в выбранное время. Только с вашего согласия — отключается здесь в любой момент."
                  : "Вечернее уведомление, если вы ещё не позанимались сегодня. В браузере работает, пока приложение открыто; в приложении для телефона — по расписанию."}
              </p>
              {consent && (
                <p className="mt-1 text-[10px] text-slate-600">
                  {consent.status === "granted" ? "Согласие дано" : "Вы отказались"}{" "}
                  {new Date(consent.decidedAt).toLocaleDateString("ru-RU")}
                </p>
              )}
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
              disabled={!premium.isNative && (!notifSupported || permission === "denied")}
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
          {progress.remindersEnabled && consent?.status === "granted" && (
            <div className="mt-3 space-y-2">
              {premium.isNative && (
                <label className="flex items-center justify-between text-xs text-slate-300">
                  Время напоминания
                  <input
                    type="time"
                    value={reminderTime}
                    onChange={(e) => void changeReminderTime(e.target.value)}
                    className="rounded-md bg-slate-800 px-2 py-1 text-slate-100"
                  />
                </label>
              )}
              {premium.paywallEnabled && (
                <label className="flex items-start gap-2 text-xs text-slate-400">
                  <input
                    type="checkbox"
                    checked={consent.trialReminder}
                    onChange={async (e) => {
                      await setTrialReminder(e.target.checked);
                      setConsentState(getReminderConsent());
                    }}
                    className="mt-0.5"
                  />
                  Предупредить до окончания пробного периода подписки
                </label>
              )}
            </div>
          )}
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

        <div className="flex flex-wrap justify-center gap-4 pb-4 pt-2 text-[11px] text-slate-500">
          <a href={BRAND.privacyUrl} target="_blank" rel="noreferrer" className="underline">
            Политика конфиденциальности
          </a>
          <a href={BRAND.termsUrl} target="_blank" rel="noreferrer" className="underline">
            Условия использования
          </a>
          <a href={`mailto:${BRAND.supportEmail}`} className="underline">
            Поддержка
          </a>
        </div>
      </div>
    </div>
  );
}
