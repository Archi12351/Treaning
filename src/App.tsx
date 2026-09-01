import { useEffect, useState } from "react";
import { ProgressProvider, useProgress } from "./hooks/useProgress";
import { BottomNav } from "./components/BottomNav";
import { VocabTopics } from "./screens/VocabTopics";
import { VocabTrainer } from "./screens/VocabTrainer";
import { GrammarTopics } from "./screens/GrammarTopics";
import { GrammarDetail } from "./screens/GrammarDetail";
import { ConversationsList } from "./screens/ConversationsList";
import { ConversationPlayer } from "./screens/ConversationPlayer";
import { ProgressScreen } from "./screens/ProgressScreen";
import { PlacementTest } from "./screens/PlacementTest";
import { ExpressMode } from "./screens/ExpressMode";
import { QuizMode } from "./screens/QuizMode";
import { HomeScreen } from "./screens/HomeScreen";

export type Route =
  | { name: "home" }
  | { name: "vocab-topics" }
  | { name: "vocab-trainer"; topic: string }
  | { name: "grammar-topics" }
  | { name: "grammar-detail"; topicId: string }
  | { name: "conversations" }
  | { name: "conversation-player"; id: string }
  | { name: "progress" }
  | { name: "placement" }
  | { name: "express" }
  | { name: "quiz" };

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

function AppShell() {
  const [route, setRoute] = useState<Route>({ name: "home" });
  const { touchToday } = useProgress();

  useEffect(() => {
    touchToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nav = (r: Route) => setRoute(r);

  return (
    <div className="flex min-h-[100svh] flex-col bg-slate-950">
      <div className="flex-1 overflow-y-auto pb-2">
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
        {route.name === "progress" && <ProgressScreen nav={nav} />}
        {route.name === "placement" && <PlacementTest nav={nav} />}
        {route.name === "express" && <ExpressMode nav={nav} />}
        {route.name === "quiz" && <QuizMode nav={nav} />}
      </div>
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
      <AppShell />
    </ProgressProvider>
  );
}
