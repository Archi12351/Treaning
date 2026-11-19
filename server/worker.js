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

function buildSystemPrompt(language, level, topic) {
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
