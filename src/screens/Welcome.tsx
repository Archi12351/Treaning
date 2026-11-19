import { useState } from "react";
import type { Route } from "../App";
import { useProgress } from "../hooks/useProgress";
import { LANGUAGE_LIST } from "../data/languages";
import { BRAND } from "../config/brand";

export const GOALS: { id: string; icon: string; title: string; text: string }[] = [
  { id: "relocation", icon: "🧳", title: "Переезд и жизнь за границей", text: "Ведомства, аренда, врач, банк — говорить уверенно в реальных ситуациях" },
  { id: "work", icon: "💼", title: "Работа и карьера", text: "Собеседования, переписка, совещания" },
  { id: "exam", icon: "🎓", title: "Экзамен или сертификат", text: "Goethe, telc, IELTS, DELF — грамматика и академический язык" },
  { id: "travel", icon: "✈️", title: "Путешествия", text: "Отель, транспорт, кафе, город" },
  { id: "self", icon: "🌱", title: "Для себя", text: "Общее развитие, книги, фильмы, общение" },
];

const DAILY = [
  { xp: 15, title: "5 минут в день", text: "Лёгкий темп" },
  { xp: 30, title: "10 минут в день", text: "Оптимально для привычки" },
  { xp: 60, title: "20 минут в день", text: "Быстрый прогресс" },
  { xp: 100, title: "30+ минут в день", text: "Интенсив" },
];

// First-run onboarding: language → goal → daily time → placement test.
// A clear goal and a small daily commitment are the strongest predictors of
// sticking with a language course, so we ask for both up front.
export function Welcome({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [step, setStep] = useState(0);

  return (
    <div className="flex min-h-[100svh] flex-col px-5 pb-8 pt-[calc(env(safe-area-inset-top)+2rem)]">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "accent-bg" : "bg-slate-800"}`} />
        ))}
      </div>

      {step === 0 && (
        <>
          <p className="mt-8 text-4xl">👋</p>
          <h1 className="mt-3 text-2xl font-bold text-slate-50">Добро пожаловать в {BRAND.name}</h1>
          <p className="mt-2 text-sm text-slate-400">{BRAND.tagline}. Какой язык учим?</p>
          <div className="mt-6 space-y-2.5">
            {LANGUAGE_LIST.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  progress.setLanguage(l.code);
                  setStep(1);
                }}
                className="flex w-full items-center gap-3 rounded-2xl bg-slate-900 p-4 text-left active:scale-[0.99]"
              >
                <span className="text-3xl">{l.flag}</span>
                <span className="font-semibold text-slate-100">{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h1 className="mt-8 text-2xl font-bold text-slate-50">Зачем вам язык?</h1>
          <p className="mt-2 text-sm text-slate-400">Подстроим программу под вашу цель.</p>
          <div className="mt-6 space-y-2.5">
            {GOALS.map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  progress.setLearnerGoal(g.id);
                  setStep(2);
                }}
                className="flex w-full items-center gap-3 rounded-2xl bg-slate-900 p-4 text-left active:scale-[0.99]"
              >
                <span className="text-3xl">{g.icon}</span>
                <div>
                  <p className="font-semibold text-slate-100">{g.title}</p>
                  <p className="text-xs text-slate-400">{g.text}</p>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="mt-8 text-2xl font-bold text-slate-50">Сколько времени в день?</h1>
          <p className="mt-2 text-sm text-slate-400">
            Регулярность важнее объёма: 10 минут каждый день дают больше, чем 2 часа раз в неделю.
          </p>
          <div className="mt-6 space-y-2.5">
            {DAILY.map((d) => (
              <button
                key={d.xp}
                onClick={() => {
                  progress.setDailyGoalXp(d.xp);
                  nav({ name: "placement" });
                }}
                className={`flex w-full items-center justify-between rounded-2xl p-4 text-left active:scale-[0.99] ${d.xp === 30 ? "accent-soft-bg ring-1 ring-[color:var(--accent)]" : "bg-slate-900"}`}
              >
                <div>
                  <p className="font-semibold text-slate-100">{d.title}</p>
                  <p className="text-xs text-slate-400">{d.text}</p>
                </div>
                <span className="text-xs text-slate-500">{d.xp} XP</span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Дальше — короткий тест, чтобы начать с вашего уровня.
          </p>
        </>
      )}
    </div>
  );
}
