import { useTextToSpeech } from "../hooks/useSpeech";

export function SpeakButton({
  text,
  rate,
  size = "md",
}: {
  text: string;
  rate?: number;
  size?: "sm" | "md";
}) {
  const { supported, speaking, speak } = useTextToSpeech();
  if (!supported) return null;
  const dim = size === "sm" ? "h-8 w-8 text-base" : "h-10 w-10 text-lg";
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speak(text, rate);
      }}
      className={`flex ${dim} shrink-0 items-center justify-center rounded-full bg-slate-800 text-emerald-400 active:bg-slate-700 ${
        speaking ? "animate-pulse" : ""
      }`}
      aria-label="Прослушать произношение"
    >
      🔊
    </button>
  );
}
