import type { CEFRLevel } from "../../types";
import { EN_PART1 } from "./part1";
import { EN_PART2 } from "./part2";
import { EN_PART3 } from "./part3";
import { EN_PART4 } from "./part4";

export const EN_EXTRA_TOPICS: { id: string; title: string; ru: string; level: CEFRLevel }[] = [
  { id: "en-time", title: "Days, Months & Time", ru: "Дни, месяцы и время", level: "A1" },
  { id: "en-fruit-veg", title: "Fruit & Vegetables", ru: "Фрукты и овощи", level: "A1" },
  { id: "en-animals", title: "Animals", ru: "Животные", level: "A1" },
  { id: "en-verbs", title: "Essential Verbs", ru: "Основные глаголы", level: "A1" },
  { id: "en-adjectives", title: "Essential Adjectives", ru: "Основные прилагательные", level: "A1" },
  { id: "en-transport", title: "Transport & Directions", ru: "Транспорт и дорога", level: "A1" },
  { id: "en-clothes", title: "Clothes", ru: "Одежда", level: "A2" },
  { id: "en-phrasal", title: "Phrasal Verbs", ru: "Фразовые глаголы", level: "A2" },
  { id: "en-adverbs", title: "Adverbs & Linking Words", ru: "Наречия и связки", level: "A2" },
  { id: "en-health", title: "Health & Doctor", ru: "Здоровье и врач", level: "A2" },
  { id: "en-travel", title: "Travel & Hotel", ru: "Путешествия и отель", level: "A2" },
  { id: "en-jobs", title: "Jobs", ru: "Профессии", level: "A2" },
  { id: "en-work", title: "Work & Career", ru: "Работа и карьера", level: "B1" },
  { id: "en-office", title: "Office & Business English", ru: "Офис и деловой английский", level: "B1" },
  { id: "en-official", title: "Government & Documents", ru: "Госуслуги и документы", level: "B1" },
  { id: "en-money", title: "Money & Banking", ru: "Деньги и банк", level: "B1" },
  { id: "en-tech", title: "Technology & Internet", ru: "Технологии и интернет", level: "B1" },
  { id: "en-feelings", title: "Feelings & Relationships", ru: "Чувства и отношения", level: "B1" },
  { id: "en-uk-us", title: "British vs American", ru: "Британский и американский", level: "B1" },
  { id: "en-society", title: "Society & Politics", ru: "Общество и политика", level: "B2" },
  { id: "en-idioms", title: "Idioms", ru: "Идиомы", level: "B2" },
  { id: "en-academic", title: "Academic English", ru: "Академический английский", level: "C1" },
];

export const EN_EXTRA_VOCABULARY = [...EN_PART1, ...EN_PART2, ...EN_PART3, ...EN_PART4];
