import { useCallback, useEffect, useRef, useState } from "react";
import { useProgress } from "./useProgress";
import { synthesizeSpeech } from "../utils/geminiTts";

let allVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): SpeechSynthesisVoice[] {
  allVoices = window.speechSynthesis?.getVoices() ?? [];
  return allVoices;
}

export function germanVoices(): SpeechSynthesisVoice[] {
  return allVoices.filter((v) => v.lang?.toLowerCase().startsWith("de"));
}

// Low-quality/robotic engines tend to advertise themselves this way; steer
// the default pick away from them when a better German voice is available.
const LOW_QUALITY_NAME = /compact|espeak|pico/i;

function pickBestGermanVoice(): SpeechSynthesisVoice | null {
  const de = germanVoices();
  const good = de.filter((v) => !LOW_QUALITY_NAME.test(v.name));
  const pool = good.length > 0 ? good : de;
  return (
    pool.find((v) => /google/i.test(v.name) && v.lang === "de-DE") ??
    pool.find((v) => /google/i.test(v.name)) ??
    pool.find((v) => v.lang === "de-DE") ??
    pool[0] ??
    null
  );
}

// Lets Settings show the list of German voices actually installed on this
// device/browser and re-renders once the OS reports them (can arrive async).
export function useGermanVoices() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    if (!supported) return;
    const update = () => {
      loadVoices();
      setVoices(germanVoices());
    };
    update();
    window.speechSynthesis.addEventListener("voiceschanged", update);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", update);
  }, [supported]);

  return voices;
}

export function useTextToSpeech() {
  const browserSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;
  const [speaking, setSpeaking] = useState(false);
  const progress = useProgress();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const supported = browserSupported || (progress.useAiVoice && Boolean(progress.geminiApiKey));

  useEffect(() => {
    if (!browserSupported) return;
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [browserSupported]);

  const speakLocally = useCallback(
    (text: string, rate: number) => {
      if (!browserSupported) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "de-DE";
      utter.rate = rate;
      const chosen = progress.ttsVoiceURI
        ? germanVoices().find((v) => v.voiceURI === progress.ttsVoiceURI)
        : null;
      const voice = chosen ?? pickBestGermanVoice();
      if (voice) utter.voice = voice;
      utter.onstart = () => setSpeaking(true);
      utter.onend = () => setSpeaking(false);
      utter.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utter);
    },
    [browserSupported, progress.ttsVoiceURI],
  );

  const speak = useCallback(
    async (text: string, rate = 0.95) => {
      if (progress.useAiVoice && progress.geminiApiKey) {
        setSpeaking(true);
        try {
          const blob = await synthesizeSpeech(text, progress.geminiApiKey, progress.aiVoiceName);
          const url = URL.createObjectURL(blob);
          if (!audioRef.current) audioRef.current = new Audio();
          const audio = audioRef.current;
          audio.src = url;
          audio.onended = () => {
            setSpeaking(false);
            URL.revokeObjectURL(url);
          };
          audio.onerror = () => {
            setSpeaking(false);
            URL.revokeObjectURL(url);
          };
          await audio.play();
          return;
        } catch {
          setSpeaking(false);
          // Fall back to the local voice below rather than staying silent.
        }
      }
      speakLocally(text, rate);
    },
    [progress.useAiVoice, progress.geminiApiKey, progress.aiVoiceName, speakLocally],
  );

  const stop = useCallback(() => {
    if (browserSupported) window.speechSynthesis.cancel();
    audioRef.current?.pause();
    setSpeaking(false);
  }, [browserSupported]);

  return { supported, speaking, speak, stop };
}

type SpeechRecognitionCtor = new () => SpeechRecognition;

function getRecognitionCtor(): SpeechRecognitionCtor | null {
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function useSpeechRecognition() {
  const Ctor = getRecognitionCtor();
  const supported = !!Ctor;
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const start = useCallback(() => {
    if (!Ctor) return;
    setError(null);
    setTranscript("");
    const recognition = new Ctor();
    recognition.lang = "de-DE";
    recognition.interimResults = true;
    recognition.maxAlternatives = 3;
    recognition.continuous = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(event.error);
      setListening(false);
    };
    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }, [Ctor]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  return { supported, listening, transcript, error, start, stop };
}
