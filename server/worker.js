/**
 * Cloudflare Worker: server-side proxy to the Claude API for the AI
 * conversation partner. Keeps the Anthropic API key out of the browser
 * entirely — the key lives only as a Worker secret.
 *
 * Deploy: see server/README.md.
 */

const ALLOWED_ORIGIN = "https://archi12351.github.io";
const ALLOWED_MODELS = ["claude-opus-5", "claude-sonnet-5", "claude-haiku-4-5"];
const MAX_MESSAGES = 40; // keep conversations bounded

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function buildSystemPrompt(level, topic) {
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
    if (origin !== ALLOWED_ORIGIN) {
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

    const { messages, level, topic, model } = body ?? {};

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
          system: buildSystemPrompt(String(level || "B1"), String(topic || "Alltag")),
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
