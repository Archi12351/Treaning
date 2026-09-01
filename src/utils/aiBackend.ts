// Kept separate from useAIChat.ts (which imports the Anthropic SDK) so that
// screens outside the lazy AI-conversation chunk — like Settings — can check
// whether a backend is configured without pulling the SDK into their bundle.
export function hasAIBackend(): boolean {
  return Boolean(import.meta.env.VITE_AI_BACKEND_URL);
}

// Gemini has no server-side backend (yet) — it's always BYOK.
export function canUseAI(provider: "claude" | "gemini", apiKey: string, geminiApiKey: string): boolean {
  if (provider === "gemini") return Boolean(geminiApiKey);
  return hasAIBackend() || Boolean(apiKey);
}
