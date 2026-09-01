export function TopBar({
  title,
  onBack,
  right,
}: {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-2 border-b border-slate-800 bg-slate-950/95 px-4 py-3 backdrop-blur pt-[calc(env(safe-area-inset-top)+0.75rem)]">
      {onBack && (
        <button
          onClick={onBack}
          className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-slate-300 active:bg-slate-800"
          aria-label="Назад"
        >
          ←
        </button>
      )}
      <h1 className="flex-1 truncate text-base font-semibold text-slate-100">
        {title}
      </h1>
      {right}
    </header>
  );
}
