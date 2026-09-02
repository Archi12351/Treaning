import { getLanguageBundle, type LanguageBundle } from "../data/languages";
import { useProgress } from "./useProgress";

// Central place every screen goes through to read the content of whichever
// language the learner currently has selected, instead of importing German
// data files directly.
export function useLanguageData(): LanguageBundle {
  const progress = useProgress();
  return getLanguageBundle(progress.language);
}
