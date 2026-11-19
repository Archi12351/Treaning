/**
 * Cloudflare Worker: server-side proxy to the Claude API for the AI
 * conversation partner. Keeps the Anthropic API key out of the browser
 * entirely — the key lives only as a Worker secret.
 *
 * Deploy: see server/README.md.
 */

// Web build (GitHub Pages) + the Capacitor WebView origins of the
// Android ("https://localhost") and iOS ("capacitor://localhost") apps.
const ALLOWED_ORIGINS = [
  "https://archi12351.github.io",
  "https://localhost",
  "capacitor://localhost",
];
const ALLOWED_ORIGIN = ALLOWED_ORIGINS[0];
const ALLOWED_MODELS = ["claude-opus-5", "claude-sonnet-5", "claude-haiku-4-5"];
const MAX_MESSAGES = 40; // keep conversations bounded

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

// Countries the "facts" mode may write about, per target language. Kept in
// sync with CULTURE_BY_LANGUAGE in src/data/facts.ts.
const FACT_COUNTRIES = {
  de: ["Deutschland", "Österreich", "Schweiz", "Liechtenstein"],
  en: ["United Kingdom", "USA", "Canada", "Australia", "Ireland", "New Zealand"],
  fr: ["France", "Belgique", "Suisse", "Québec", "Luxembourg", "Afrique francophone"],
};
const LANGUAGE_NAMES = { de: "немецкий", en: "английский", fr: "французский" };

// The prompt for the facts mode is built here, not taken from the client, so
// the proxy can't be turned into a general-purpose free LLM endpoint.
function buildFactsPrompt(language, existingTitles, count) {
  const countries = FACT_COUNTRIES[language] || FACT_COUNTRIES.de;
  const avoid = (Array.isArray(existingTitles) ? existingTitles : [])
    .slice(-80)
    .map((t) => String(t).slice(0, 80))
    .join("; ");
  return [
    `Ты автор раздела «Культура и факты» в приложении для изучения языка (${LANGUAGE_NAMES[language] || "немецкий"}). Пользователи — русскоязычные.`,
    `Напиши ${count} новых, интересных и ПРОВЕРЕННЫХ фактов о странах: ${countries.join(", ")}.`,
    "Темы — разные: быт и этикет, бюрократия и госуслуги для иностранцев, работа, еда, история, язык и сленг, праздники, законы, наука, природа.",
    "Распредели факты по разным странам. Пиши только то, в чём уверен; никаких выдуманных цифр.",
    avoid ? `НЕ повторяй факты с такими заголовками: ${avoid}.` : "",
    "Ответ — ТОЛЬКО JSON-массив без пояснений и без markdown, формат элемента:",
    '{"country": "<название страны ровно как в списке>", "title": "<заголовок до 6 слов, по-русски>", "text": "<1–3 предложения по-русски>"}',
  ]
    .filter(Boolean)
    .join("\n");
}

// Prompts for one-shot learning tasks (mirrors src/utils/aiClient.ts). Built
// here from structured fields so the proxy can't be used as a free-form LLM.
const LANG_EN = { de: "German", en: "English", fr: "French" };
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

function buildTaskPrompt(body) {
  const lang = LANG_EN[body.language] || "German";
  const level = LEVELS.includes(body.level) ? body.level : "B1";
  const clip = (v, n) => String(v || "").slice(0, n);
  if (body.kind === "writing") {
    return [
      `You are an experienced, encouraging ${lang} teacher for Russian-speaking learners. The learner's level is ${level} (CEFR).`,
      `Task given to the learner (in Russian): "${clip(body.task, 600)}"`,
      `Learner's text:\n"""${clip(body.text, 2500)}"""`,
      "Evaluate it. Reply with ONLY a JSON object, no markdown:",
      `{"score": <0-100, how well the task is solved for level ${level}>,`,
      ' "estimatedLevel": "<A1|A2|B1|B2|C1|C2>",',
      ' "corrected": "<the learner\'s text with all mistakes corrected, minimal changes>",',
      ' "mistakes": [{"wrong": "<fragment>", "right": "<correction>", "why": "<short explanation in Russian>"}],',
      ' "praise": "<one sentence in Russian: what is good>",',
      ' "tips": ["<up to 3 short tips in Russian how to improve>"],',
      ` "model": "<a natural, native-like version of the text at level ${level}>"}`,
      "List at most 8 most important mistakes. If there are no mistakes, return an empty array.",
    ].join("\n");
  }
  if (body.kind === "review") {
    const transcript = (Array.isArray(body.messages) ? body.messages : [])
      .slice(-40)
      .map((m) => `${m.role === "assistant" ? "PARTNER" : "LEARNER"}: ${clip(m.text, 600)}`)
      .join("\n");
    const goals = (Array.isArray(body.objectives) ? body.objectives : []).slice(0, 5).map((g) => clip(g, 200));
    return [
      `You are a ${lang} teacher reviewing a learner's (level ${level}) conversation. Native language: Russian.`,
      goals.length ? `The learner's objectives were: ${goals.join("; ")}` : "",
      `Transcript:\n${transcript}`,
      'Reply with ONLY JSON: {"score": <0-100>, "objectives": [<true|false for each objective, same order>], "praise": "<one sentence in Russian>", "mistakes": [{"wrong": "<learner fragment>", "right": "<correction>", "why": "<short explanation in Russian>"}], "tips": ["<up to 3 tips in Russian>"], "usefulPhrases": ["<up to 5 useful target-language phrases for this situation, with Russian translation after an em dash>"]}',
      "Only list mistakes made by the LEARNER, at most 8.",
    ].filter(Boolean).join("\n");
  }
  if (body.kind === "answer") {
    return [
      `You check answers in a ${lang} speaking exercise for Russian-speaking learners.`,
      `Dialogue context (previous line said to the learner): "${clip(body.context, 400)}"`,
      `Model answer: "${clip(body.expected, 400)}"`,
      `Learner said (speech-to-text, may lack punctuation): "${clip(body.answer, 500)}"`,
      "Is the learner's answer an appropriate, understandable reply in this situation (it does NOT need to match the model answer word for word)?",
      'Reply with ONLY JSON: {"ok": true|false, "feedback": "<one short sentence in Russian; if there is a grammar mistake, show the corrected sentence>"}',
    ].join("\n");
  }
  return null;
}

function buildSystemPrompt(language, level, topic) {
  const t = String(topic || "");
  if (t.startsWith("ROLE:")) {
    return [
      baseSystemPrompt(language, level, "the role-play situation below"),
      `ROLE-PLAY: ${t.slice(5, 600).trim()} Stay in this role the whole time, behave like a real person in this situation (ask for documents, details, make small difficulties), keep replies short, and do not mention that this is an exercise.`,
    ].join(" ");
  }
  return baseSystemPrompt(language, level, t);
}

function baseSystemPrompt(language, level, topic) {
  if (language === "fr") {
    return [
      "Tu es un locuteur natif francophone sympathique et un partenaire de conversation dans une application d'apprentissage des langues.",
      `Le niveau de l'apprenant est ${level} (CECRL). Adapte le vocabulaire, la longueur des phrases et le rythme à ce niveau.`,
      `Mène une conversation naturelle et quotidienne sur le thème : "${topic}". Pose des questions pour relancer la conversation.`,
      "Réponds TOUJOURS en français, en 1 à 3 phrases courtes (c'est lu à voix haute : pas d'emojis, pas d'astérisques, pas de listes).",
      "Si l'apprenant fait une vraie faute de grammaire ou de vocabulaire, corrige-la brièvement et gentiment entre parenthèses en russe, puis continue normalement en français. Ne corrige pas chaque phrase, seulement les vraies fautes.",
      "Reste toujours dans ton rôle de partenaire de conversation, même si on te demande autre chose.",
    ].join(" ");
  }
  if (language === "en") {
    return [
      "You are a friendly native English speaker and conversation partner in a language-learning app.",
      `The learner's level is ${level} (CEFR). Adjust vocabulary, sentence length and pace to this level.`,
      `Have a natural, everyday conversation about: "${topic}". Ask follow-up questions to keep it going.`,
      "ALWAYS reply in English, in 1-3 short sentences (this is read aloud, so no emojis, no asterisks, no lists).",
      "If the learner makes a clear grammar or vocabulary mistake, briefly and kindly correct it in parentheses in Russian, then continue the conversation normally in English. Don't correct every sentence - only real mistakes.",
      "Always stay in the role of conversation partner, even if asked about something else.",
    ].join(" ");
  }
  return [
    "Du bist ein freundlicher deutscher Muttersprachler und Gesprächspartner in einer Sprachlern-App.",
    `Der Lernende hat das Sprachniveau ${level} (GER/CEFR). Passe Wortschatz, Satzlänge und Tempo an dieses Niveau an.`,
    `Führe ein natürliches, alltagsnahes Gespräch zum Thema: "${topic}". Stelle Rückfragen, damit das Gespräch weitergeht.`,
    "Antworte IMMER auf Deutsch, in 1-3 kurzen Sätzen (das wird laut vorgelesen, also keine Emojis, keine Sternchen, keine Aufzählungen).",
    "Wenn der Lernende einen klaren Grammatik- oder Wortfehler macht, korrigiere ihn kurz und freundlich in Klammern auf Russisch, dann führe das Gespräch normal auf Deutsch weiter. Korrigiere nicht bei jedem Satz - nur bei echten Fehlern.",
    "Bleib immer in der Rolle des Gesprächspartners, auch wenn nach etwas anderem gefragt wird.",
  ].join(" ");
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    // Defense in depth: browsers enforce CORS, but a direct curl can spoof
    // the Origin header — this only blocks casual/browser-driven misuse,
    // not a determined attacker. Consider adding Cloudflare rate-limiting
    // rules on this route for stronger abuse protection.
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response("Forbidden", { status: 403, headers: corsHeaders(origin) });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    const { messages, level, topic, model, language, mode } = body ?? {};

    if (mode === "task") {
      const prompt = buildTaskPrompt(body);
      if (!prompt) {
        return new Response(JSON.stringify({ error: "Unknown task" }), {
          status: 400,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      const taskModel = ALLOWED_MODELS.includes(model) ? model : "claude-opus-5";
      let r;
      try {
        r = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: taskModel,
            max_tokens: body.kind === "answer" ? 300 : 2500,
            messages: [{ role: "user", content: prompt }],
          }),
        });
      } catch {
        return new Response(JSON.stringify({ error: "Upstream connection failed" }), {
          status: 502,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      if (!r.ok) {
        return new Response(JSON.stringify({ error: `Anthropic error: ${await r.text()}` }), {
          status: r.status,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      const d = await r.json();
      const block = (d.content || []).find((b) => b.type === "text");
      return new Response(JSON.stringify({ text: block?.text ?? "" }), {
        status: 200,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    if (mode === "facts") {
      const lang = FACT_COUNTRIES[language] ? language : "de";
      const count = Math.min(Math.max(Number(body.count) || 6, 1), 10);
      const factsModel = ALLOWED_MODELS.includes(model) ? model : "claude-opus-5";
      let factsResponse;
      try {
        factsResponse = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: factsModel,
            max_tokens: 2000,
            messages: [{ role: "user", content: buildFactsPrompt(lang, body.existingTitles, count) }],
          }),
        });
      } catch {
        return new Response(JSON.stringify({ error: "Upstream connection failed" }), {
          status: 502,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      if (!factsResponse.ok) {
        const errText = await factsResponse.text();
        return new Response(JSON.stringify({ error: `Anthropic error: ${errText}` }), {
          status: factsResponse.status,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }
      const factsData = await factsResponse.json();
      const factsBlock = (factsData.content || []).find((b) => b.type === "text");
      return new Response(JSON.stringify({ text: factsBlock?.text ?? "" }), {
        status: 200,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    const chosenModel = ALLOWED_MODELS.includes(model) ? model : "claude-opus-5";

    let anthropicResponse;
    try {
      anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: chosenModel,
          max_tokens: 400,
          system: buildSystemPrompt(String(language || "de"), String(level || "B1"), String(topic || "Alltag")),
          messages: messages.map((m) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            content: String(m.text || "").slice(0, 2000),
          })),
        }),
      });
    } catch {
      return new Response(JSON.stringify({ error: "Upstream connection failed" }), {
        status: 502,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    if (!anthropicResponse.ok) {
      const errText = await anthropicResponse.text();
      return new Response(JSON.stringify({ error: `Anthropic error: ${errText}` }), {
        status: anthropicResponse.status,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    const data = await anthropicResponse.json();
    const textBlock = (data.content || []).find((b) => b.type === "text");

    return new Response(JSON.stringify({ text: textBlock?.text ?? "" }), {
      status: 200,
      headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
    });
  },
};
