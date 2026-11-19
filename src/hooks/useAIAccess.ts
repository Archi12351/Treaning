import { useProgress } from "./useProgress";
import { usePremium } from "./usePremium";
import { canUseAI } from "../utils/aiBackend";
import type { AIConfig } from "../utils/aiClient";

// Whether one-shot AI features (writing coach, answer checking, facts) can
// run right now, and with which provider settings. With the paywall on, the
// shared backend is a Premium perk; the learner's own key always works.
export function useAIAccess(): { available: boolean; needsPremium: boolean; config: AIConfig } {
  const progress = useProgress();
  const premium = usePremium();
  const ownKey = progress.aiProvider === "gemini" ? progress.geminiApiKey : progress.apiKey;
  const available =
    canUseAI(progress.aiProvider, progress.apiKey, progress.geminiApiKey) &&
    (!premium.paywallEnabled || premium.isPremium || Boolean(ownKey));
  return {
    available,
    needsPremium: !available && premium.paywallEnabled && !premium.isPremium,
    config: {
      provider: progress.aiProvider,
      apiKey: progress.apiKey,
      model: progress.aiModel,
      geminiApiKey: progress.geminiApiKey,
      geminiModel: progress.geminiModel,
    },
  };
}
