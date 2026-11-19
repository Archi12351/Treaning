import { lazy, Suspense, useEffect, useState } from "react";
import { ProgressProvider, useProgress } from "./hooks/useProgress";
import { useStreakReminder } from "./hooks/useReminders";
import { BottomNav } from "./components/BottomNav";
import { VocabTopics } from "./screens/VocabTopics";
import { VocabTrainer } from "./screens/VocabTrainer";
import { GrammarTopics } from "./screens/GrammarTopics";
import { GrammarDetail } from "./screens/GrammarDetail";
import { ConversationsList } from "./screens/ConversationsList";
import { ConversationPlayer } from "./screens/ConversationPlayer";
import { ProgressScreen } from "./screens/ProgressScreen";

// Lazy-loaded: pulls in the Anthropic SDK, only needed for the AI chat screen.
const AIConversation = lazy(() =>
  import("./screens/AIConversation").then((m) => ({ default: m.AIConversation })),
);
import { PlacementTest } from "./screens/PlacementTest";
import { ExpressMode } from "./screens/ExpressMode";
import { QuizMode } from "./screens/QuizMode";
import { HomeScreen } from "./screens/HomeScreen";
import { TextbookIndex } from "./screens/TextbookIndex";
import { TextbookChapter } from "./screens/TextbookChapter";
import { Settings } from "./screens/Settings";
import { Culture } from "./screens/Culture";
import { FormsTrainer } from "./screens/FormsTrainer";
import { StudyPath } from "./screens/StudyPath";
import { Paywall, LockedScreen } from "./screens/Paywall";
import { PremiumProvider, usePremium } from "./hooks/usePremium";
import { useLanguageData } from "./hooks/useLanguageData";
import { ReminderConsent } from "./components/ReminderConsent";
import { getReminderConsent } from "./utils/notifications";
import type { CEFRLevel } from "./types";

export type Route =
  | { name: "home" }
  | { name: "vocab-topics" }
  | { name: "vocab-trainer"; topic: string }
  | { name: "grammar-topics" }
  | { name: "grammar-detail"; topicId: string }
  | { name: "conversations" }
  | { name: "conversation-player"; id: string }
  | { name: "ai-conversation" }
  | { name: "progress" }
  | { name: "placement" }
  | { name: "express" }
  | { name: "quiz" }
  | { name: "textbook" }
  | { name: "textbook-chapter"; chapterId: string }
  | { name: "settings" }
  | { name: "culture" }
  | { name: "forms-trainer" }
  | { name: "study-path" }
  | { name: "paywall" };

const TAB_ROOTS: Record<string, Route> = {
  home: { name: "home" },
  vocab: { name: "vocab-topics" },
  grammar: { name: "grammar-topics" },
  conversations: { name: "conversations" },
  progress: { name: "progress" },
};

function routeToTab(route: Route): string {
  switch (route.name) {
    case "home":
      return "home";
    case "vocab-topics":
    case "vocab-trainer":
      return "vocab";
    case "grammar-topics":
    case "grammar-detail":
      return "grammar";
    case "conversations":
    case "conversation-player":
    case "ai-conversation":
      return "conversations";
    case "progress":
      return "progress";
    default:
      return "home";
  }
}

function showsBottomNav(route: Route): boolean {
  return [
    "home",
    "vocab-topics",
    "grammar-topics",
    "conversations",
    "progress",
  ].includes(route.name);
}

function LoadingScreen() {
  return (
    <div className="flex h-64 items-center justify-center text-sm text-slate-500">
      Загрузка...
    </div>
  );
}

function AppShell() {
  const progress = useProgress();
  const [route, setRoute] = useState<Route>(() =>
    progress.onboarded ? { name: "home" } : { name: "placement" },
  );

  useEffect(() => {
    progress.touchToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useStreakReminder(progress.remindersEnabled, progress.lastActiveDate, progress.streakCount);

  const premium = usePremium();
  const bundle = useLanguageData();
  const [paywallBack, setPaywallBack] = useState<Route>({ name: "home" });
  const [prevRoute, setPrevRoute] = useState<Route>({ name: "home" });
  const nav = (r: Route) => {
    if (r.name === "paywall" && route.name !== "paywall") setPaywallBack(prevRouteFor(route));
    setPrevRoute(route);
    setRoute(r);
  };
  // Don't send "back" from the paywall into a screen that is itself locked.
  const prevRouteFor = (r: Route): Route => {
    const lvl = routeLevel(r);
    return lvl && premium.isLevelLocked(lvl) ? prevRoute : r;
  };

  // Ask for reminder consent once, at a moment the learner has just seen
  // value (after earning their first XP), never on first launch.
  const [askConsent, setAskConsent] = useState(false);
  useEffect(() => {
    if (route.name === "home" && progress.xp >= 10 && getReminderConsent() === null) {
      setAskConsent(true);
    }
  }, [route.name, progress.xp]);

  // Which CEFR level the target screen belongs to — used to gate B1+ content.
  const routeLevel = (r: Route): CEFRLevel | null => {
    switch (r.name) {
      case "vocab-trainer":
        return bundle.vocabTopics.find((t) => t.id === r.topic)?.level ?? null;
      case "grammar-detail":
        return bundle.grammarTopics.find((t) => t.id === r.topicId)?.level ?? null;
      case "conversation-player":
        return bundle.conversations.find((c) => c.id === r.id)?.level ?? null;
      case "textbook-chapter": {
        const lr = bundle.textbookChapters.find((c) => c.id === r.chapterId)?.levelRange;
        return lr ? (lr.slice(0, 2) as CEFRLevel) : null;
      }
      default:
        return null;
    }
  };
  const lockedLevel = routeLevel(route);
  const contentLocked = lockedLevel !== null && premium.isLevelLocked(lockedLevel);
  // The AI partner is included in Premium; learners who bring their own
  // API key can keep using it for free.
  const aiLocked =
    route.name === "ai-conversation" &&
    premium.paywallEnabled &&
    !premium.isPremium &&
    !(progress.aiProvider === "gemini" ? progress.geminiApiKey : progress.apiKey);

  return (
    <div
      className="flex min-h-[100svh] flex-col bg-slate-950"
      data-theme={progress.accentTheme}
    >
      <div className="flex-1 overflow-y-auto pb-2">
        {contentLocked ? (
          <LockedScreen
            level={lockedLevel ?? undefined}
            what="Этот материал — в Premium"
            nav={nav}
            back={prevRoute}
          />
        ) : aiLocked ? (
          <LockedScreen
            what="AI-собеседник — в Premium"
            nav={nav}
            back={{ name: "conversations" }}
          />
        ) : (
          <>
        {route.name === "home" && <HomeScreen nav={nav} />}
        {route.name === "vocab-topics" && <VocabTopics nav={nav} />}
        {route.name === "vocab-trainer" && (
          <VocabTrainer topic={route.topic} nav={nav} />
        )}
        {route.name === "grammar-topics" && <GrammarTopics nav={nav} />}
        {route.name === "grammar-detail" && (
          <GrammarDetail topicId={route.topicId} nav={nav} />
        )}
        {route.name === "conversations" && <ConversationsList nav={nav} />}
        {route.name === "conversation-player" && (
          <ConversationPlayer id={route.id} nav={nav} />
        )}
        {route.name === "ai-conversation" && (
          <Suspense fallback={<LoadingScreen />}>
            <AIConversation nav={nav} />
          </Suspense>
        )}
        {route.name === "progress" && <ProgressScreen nav={nav} />}
        {route.name === "placement" && <PlacementTest nav={nav} />}
        {route.name === "express" && <ExpressMode nav={nav} />}
        {route.name === "quiz" && <QuizMode nav={nav} />}
        {route.name === "textbook" && <TextbookIndex nav={nav} />}
        {route.name === "textbook-chapter" && (
          <TextbookChapter chapterId={route.chapterId} nav={nav} />
        )}
        {route.name === "settings" && <Settings nav={nav} />}
        {route.name === "culture" && <Culture nav={nav} />}
        {route.name === "forms-trainer" && <FormsTrainer nav={nav} />}
        {route.name === "study-path" && <StudyPath nav={nav} />}
        {route.name === "paywall" && <Paywall nav={nav} back={paywallBack} />}
          </>
        )}
      </div>
      {askConsent && <ReminderConsent onDone={(granted) => {
        setAskConsent(false);
        if (granted) progress.setRemindersEnabled(true);
      }} />}
      {showsBottomNav(route) && (
        <BottomNav
          active={routeToTab(route)}
          onChange={(key) => nav(TAB_ROOTS[key])}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <PremiumProvider>
        <AppShell />
      </PremiumProvider>
    </ProgressProvider>
  );
}
