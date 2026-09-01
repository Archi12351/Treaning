interface NavItem {
  key: string;
  label: string;
  icon: string;
}

const ITEMS: NavItem[] = [
  { key: "home", label: "Главная", icon: "🏠" },
  { key: "vocab", label: "Лексика", icon: "📚" },
  { key: "grammar", label: "Грамматика", icon: "🧩" },
  { key: "conversations", label: "Диалоги", icon: "🗣️" },
  { key: "progress", label: "Профиль", icon: "📊" },
];

export function BottomNav({
  active,
  onChange,
}: {
  active: string;
  onChange: (key: string) => void;
}) {
  return (
    <nav className="sticky bottom-0 z-20 border-t border-slate-800 bg-slate-950/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
      <div className="flex">
        {ITEMS.map((item) => {
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onChange(item.key)}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium transition-colors ${
                isActive ? "text-emerald-400" : "text-slate-500"
              }`}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
