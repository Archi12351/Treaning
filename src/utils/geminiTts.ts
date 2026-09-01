// Gemini's native text-to-speech, used as an optional realistic-voice
// upgrade over the browser's built-in (often robotic) speechSynthesis.
// Returns raw PCM (24kHz, mono, 16-bit) which we wrap in a WAV header
// ourselves since <audio> can't play raw PCM directly.

const TTS_URL = "https://generativelanguage.googleapis.com/v1beta/models";

// Newest first. If a model has been retired for this key (404), we fall
// back to the next one and remember whichever worked — the same lesson
// learned from the chat model IDs going stale mid-session.
const TTS_MODELS = ["gemini-3.1-flash-tts-preview", "gemini-2.5-flash-preview-tts"];
let workingModel: string | null = null;

export const GEMINI_VOICES = [
  { name: "Charon", label: "Charon — мужской, глубокий" },
  { name: "Orus", label: "Orus — мужской, уверенный" },
  { name: "Puck", label: "Puck — мужской, бодрый" },
  { name: "Fenrir", label: "Fenrir — мужской, энергичный" },
  { name: "Kore", label: "Kore — женский, твёрдый" },
  { name: "Aoede", label: "Aoede — женский, мягкий" },
  { name: "Leda", label: "Leda — женский, молодой" },
  { name: "Zephyr", label: "Zephyr — нейтральный, светлый" },
];

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function pcmToWavBlob(pcm: Uint8Array, sampleRate = 24000): Blob {
  const header = new ArrayBuffer(44);
  const view = new DataView(header);
  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
  };
  const byteRate = sampleRate * 2; // mono, 16-bit
  writeStr(0, "RIFF");
  view.setUint32(4, 36 + pcm.length, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, 2, true); // block align
  view.setUint16(34, 16, true); // bits per sample
  writeStr(36, "data");
  view.setUint32(40, pcm.length, true);
  return new Blob([header, pcm as BlobPart], { type: "audio/wav" });
}

async function requestSpeech(model: string, text: string, apiKey: string, voiceName: string) {
  return fetch(`${TTS_URL}/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      contents: [{ parts: [{ text }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName } } },
      },
    }),
  });
}

export async function synthesizeSpeech(
  text: string,
  apiKey: string,
  voiceName: string,
): Promise<Blob> {
  const order = workingModel
    ? [workingModel, ...TTS_MODELS.filter((m) => m !== workingModel)]
    : TTS_MODELS;

  let lastError = "TTS недоступен.";
  for (const model of order) {
    const res = await requestSpeech(model, text, apiKey, voiceName);
    if (res.ok) {
      const data = await res.json();
      const part = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
      if (part?.data) {
        workingModel = model;
        return pcmToWavBlob(base64ToBytes(part.data));
      }
      lastError = "Пустой ответ от Gemini TTS.";
      continue;
    }
    if (res.status === 404) continue; // model retired/unknown — try the next one
    const err = await res.json().catch(() => null);
    lastError = err?.error?.message || `Ошибка Gemini TTS (${res.status}).`;
    break;
  }
  throw new Error(lastError);
}
