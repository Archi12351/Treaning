import { useMemo, useState } from "react";
import type { Route } from "../App";
import { TopBar } from "../components/TopBar";
import { useProgress } from "../hooks/useProgress";
import { CULTURE_FACTS, SALARY_COMPARISON } from "../data/facts";

const COUNTRIES = ["Alle", "Deutschland", "Österreich", "Schweiz", "Liechtenstein"] as const;

export function Culture({ nav }: { nav: (r: Route) => void }) {
  const progress = useProgress();
  const [countryFilter, setCountryFilter] = useState<(typeof COUNTRIES)[number]>("Alle");
  const [salaryInput, setSalaryInput] = useState(
    progress.mySalaryEur ? String(progress.mySalaryEur) : "",
  );

  const facts = useMemo(
    () =>
      countryFilter === "Alle"
        ? CULTURE_FACTS
        : CULTURE_FACTS.filter((f) => f.country === countryFilter),
    [countryFilter],
  );

  const mySalary = progress.mySalaryEur;

  const applySalary = () => {
    const value = parseFloat(salaryInput.replace(",", "."));
    progress.setMySalaryEur(Number.isFinite(value) && value > 0 ? value : null);
  };

  return (
    <div>
      <TopBar title="Культура и факты" onBack={() => nav({ name: "home" })} />
      <div className="space-y-5 px-4 py-4">
        <div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {COUNTRIES.map((c) => (
              <button
                key={c}
                onClick={() => setCountryFilter(c)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${
                  countryFilter === c
                    ? "accent-bg"
                    : "bg-slate-800 text-slate-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-3 space-y-2.5">
            {facts.map((f) => (
              <div key={f.id} className="rounded-xl bg-slate-900 p-3.5">
                <p className="text-xs text-slate-500">
                  {f.flag} {f.country}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{f.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-sm font-semibold text-slate-200">
            💰 Зарплаты по профессиям (DACH)
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
                  <th className="px-2 py-1.5 text-right font-medium">🇩🇪 DE</th>
                  <th className="px-2 py-1.5 text-right font-medium">🇦🇹 AT</th>
                  <th className="px-2 py-1.5 text-right font-medium">🇨🇭 CH</th>
                  {mySalary && <th className="py-1.5 pl-2 text-right font-medium">×</th>}
                </tr>
              </thead>
              <tbody>
                {SALARY_COMPARISON.map((s) => (
                  <tr key={s.professionDe} className="border-t border-slate-800">
                    <td className="py-2 pr-2">
                      <p className="text-slate-200">{s.profession}</p>
                      <p className="text-[10px] text-slate-500">{s.professionDe}</p>
                    </td>
                    <td className="px-2 py-2 text-right text-slate-300">
                      {s.germanyEur.toLocaleString("de-DE")}
                    </td>
                    <td className="px-2 py-2 text-right text-slate-300">
                      {s.austriaEur.toLocaleString("de-DE")}
                    </td>
                    <td className="px-2 py-2 text-right text-slate-300">
                      {s.switzerlandEur.toLocaleString("de-DE")}
                    </td>
                    {mySalary && (
                      <td className="accent-text py-2 pl-2 text-right font-semibold">
                        {(s.germanyEur / mySalary).toFixed(1)}x
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
            Колонка «×» — во сколько раз зарплата в Германии выше/ниже вашей.
          </p>
        </div>
      </div>
    </div>
  );
}
