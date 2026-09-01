import { useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";

const MODELS = [
  { id: "claude-opus-5", label: "Claude Opus 5", note: "Самый умный, дороже и чуть медленнее" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5", note: "Баланс скорости и качества" },
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", note: "Самый быстрый и дешёвый" },
];

export function Settings({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [draft, setDraft] = useState(progress.apiKey);
  const [saved, setSaved] = useState(false);

  const save = () => {
    progress.setApiKey(draft.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div>
      <TopBar title="Настройки AI-собеседника" onBack={() => nav({ name: "progress" })} />
      <div className="space-y-5 px-4 py-4">
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">Ключ Anthropic API</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Приложение полностью работает в браузере, без своего сервера — поэтому
            для живого AI-собеседника нужен ваш собственный ключ Claude API.
            Получить его можно на{" "}
            <span className="text-emerald-400">console.anthropic.com</span>.
            Ключ хранится только в памяти этого браузера (localStorage) и
            никуда, кроме api.anthropic.com, не отправляется.
          </p>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            type="password"
            placeholder="sk-ant-..."
            className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-emerald-500"
            autoComplete="off"
            spellCheck={false}
          />
          <div className="mt-3 flex gap-2">
            <button
              onClick={save}
              disabled={!draft.trim()}
              className="flex-1 rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-emerald-950 disabled:opacity-30"
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
                    ? "border-emerald-500 bg-emerald-500/10"
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
            сможет увидеть ключ. Не используйте ключ с высоким лимитом трат и
            следите за расходами в консоли Anthropic.
          </p>
        </div>
      </div>
    </div>
  );
}
