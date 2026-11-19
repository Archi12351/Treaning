import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { useAIFacts } from "../hooks/useAIFacts";
import { CULTURE_BY_LANGUAGE } from "../data/facts";

const ALL = "Все";

export function Culture({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const bundle = CULTURE_BY_LANGUAGE[progress.language];
  // Каждый заход на экран (не чаще раза в несколько часов) подгружает свежую
  // порцию фактов от ИИ — так раздел пополняется сам, без кнопок.
  const { aiFacts, loading, error, available, generate } = useAIFacts(progress.language, {
    autoRefresh: true,
  });
  const [countryFilter, setCountryFilter] = useState<string>(ALL);
  const [onlyAI, setOnlyAI] = useState(false);
  const [salaryInput, setSalaryInput] = useState(
    progress.mySalaryEur ? String(progress.mySalaryEur) : "",
  );

  const facts = useMemo(() => {
    const all = onlyAI ? aiFacts : [...aiFacts, ...bundle.facts];
    return countryFilter === ALL ? all : all.filter((f) => f.country === countryFilter);
  }, [aiFacts, bundle.facts, countryFilter, onlyAI]);

  const mySalary = progress.mySalaryEur;

  const applySalary = () => {
    const value = parseFloat(salaryInput.replace(",", "."));
    progress.setMySalaryEur(Number.isFinite(value) && value > 0 ? value : null);
  };

  return (
    <div>
      <TopBar title="Культура и факты" onBack={() => nav({ name: "home" })} />
      <div className="space-y-5 px-4 py-4">
        <div className="rounded-2xl bg-gradient-to-r from-sky-600/30 to-violet-600/30 p-4">
          <p className="text-sm font-semibold text-slate-100">✨ Факты от ИИ</p>
          {available ? (
            <>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Раздел пополняется сам: при каждом заходе ИИ дописывает новые
                факты о странах, где говорят на этом языке, — быт, бюрократия,
                работа, история, сленг. Уже собрано: {aiFacts.length}.
              </p>
              <button
                onClick={() => void generate()}
                disabled={loading}
                className="accent-bg mt-3 rounded-lg px-4 py-2 text-sm font-semibold disabled:opacity-60"
              >
                {loading ? "ИИ пишет факты…" : "Ещё факты"}
              </button>
              {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}
            </>
          ) : (
            <>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Подключите ИИ (ключ Claude или бесплатный ключ Gemini) — и
                раздел будет сам пополняться новыми фактами при каждом заходе.
              </p>
              <button
                onClick={() => nav({ name: "settings" })}
                className="mt-3 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100"
              >
                Открыть настройки
              </button>
            </>
          )}
        </div>

        <div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[ALL, ...bundle.countries.map((c) => c.name)].map((c) => {
              const flag = bundle.countries.find((x) => x.name === c)?.flag;
              return (
                <button
                  key={c}
                  onClick={() => setCountryFilter(c)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${
                    countryFilter === c ? "accent-bg" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {flag ? `${flag} ` : ""}
                  {c}
                </button>
              );
            })}
          </div>
          {aiFacts.length > 0 && (
            <label className="mt-2 flex items-center gap-2 text-xs text-slate-400">
              <input
                type="checkbox"
                checked={onlyAI}
                onChange={(e) => setOnlyAI(e.target.checked)}
              />
              Показывать только факты от ИИ
            </label>
          )}
          <div className="mt-3 space-y-2.5">
            {loading && (
              <div className="animate-pulse rounded-xl bg-slate-900 p-3.5 text-xs text-slate-500">
                ✨ Генерируем новые факты…
              </div>
            )}
            {facts.map((f) => (
              <div key={f.id} className="rounded-xl bg-slate-900 p-3.5">
                <p className="flex items-center justify-between text-xs text-slate-500">
                  <span>
                    {f.flag} {f.country}
                  </span>
                  {f.ai && <span className="text-[10px] text-violet-300">✨ ИИ</span>}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{f.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{f.text}</p>
              </div>
            ))}
            {facts.length === 0 && !loading && (
              <p className="text-xs text-slate-500">Пока нет фактов по этому фильтру.</p>
            )}
          </div>
          {aiFacts.length > 0 && (
            <p className="mt-2 text-[10px] leading-relaxed text-slate-600">
              Факты с пометкой «ИИ» сгенерированы языковой моделью и могут
              содержать неточности — перепроверяйте важное (особенно правила и
              цифры) в официальных источниках.
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">
            💰 Зарплаты по профессиям ({bundle.regionLabel})
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Примерная средняя валовая зарплата в месяц, в евро. Введите свою
            месячную зарплату в евровом эквиваленте — покажем, во сколько раз
            она отличается.
          </p>
          <div className="mt-3 flex gap-2">
            <input
              value={salaryInput}
              onChange={(e) => setSalaryInput(e.target.value)}
              inputMode="decimal"
              placeholder="Например: 1200"
              className="flex-1 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[color:var(--accent)]"
            />
            <button
              onClick={applySalary}
              className="accent-bg rounded-lg px-4 py-2 text-sm font-semibold"
            >
              OK
            </button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-500">
                  <th className="py-1.5 pr-2 font-medium">Профессия</th>
                  {bundle.salaryCountries.map((c) => (
                    <th key={c.code} className="px-2 py-1.5 text-right font-medium">
                      {c.flag} {c.code}
                    </th>
                  ))}
                  {mySalary && <th className="py-1.5 pl-2 text-right font-medium">×</th>}
                </tr>
              </thead>
              <tbody>
                {bundle.salaries.map((s) => (
                  <tr key={s.professionLocal} className="border-t border-slate-800">
                    <td className="py-2 pr-2">
                      <p className="text-slate-200">{s.profession}</p>
                      <p className="text-[10px] text-slate-500">{s.professionLocal}</p>
                    </td>
                    {s.values.map((v, i) => (
                      <td key={i} className="px-2 py-2 text-right text-slate-300">
                        {v.toLocaleString("de-DE")}
                      </td>
                    ))}
                    {mySalary && (
                      <td className="accent-text py-2 pl-2 text-right font-semibold">
                        {(s.values[0] / mySalary).toFixed(1)}x
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-slate-600">
            Ориентировочные округлённые цифры для сравнения, не официальная
            статистика — реальная зарплата зависит от региона, опыта и отрасли.
            Колонка «×» — во сколько раз зарплата в стране из первой колонки
            ({bundle.salaryCountries[0].flag} {bundle.salaryCountries[0].code})
            выше/ниже вашей.
          </p>
        </div>
      </div>
    </div>
  );
}
