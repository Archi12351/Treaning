import type { CEFRLevel } from "../../types";
import { PART1 } from "./part1";
import { PART2 } from "./part2";
import { PART3 } from "./part3";
import { PART4 } from "./part4";
import { PART5 } from "./part5";
import { PART6 } from "./part6";
import { PART7 } from "./part7";
import { PART8 } from "./part8";
import { PART9 } from "./part9";
import { PART10 } from "./part10";

// Темы, добавленные при расширении словаря до 3000+ слов. Существующие темы
// (из ../vocabulary.ts) тоже пополняются словами из этих файлов.
export const EXTRA_TOPICS: { id: string; title: string; ru: string; level: CEFRLevel }[] = [
  { id: "zeit_kalender", title: "Zeit & Kalender", ru: "Время и календарь", level: "A1" },
  { id: "obst_gemuese", title: "Obst & Gemüse", ru: "Фрукты и овощи", level: "A1" },
  { id: "stadt_orte", title: "Orte in der Stadt", ru: "Места в городе", level: "A1" },
  { id: "kleine_woerter", title: "Kleine Wörter", ru: "Вопросы, предлоги, союзы", level: "A1" },
  { id: "kleidung", title: "Kleidung & Mode", ru: "Одежда и мода", level: "A2" },
  { id: "trennbare_verben", title: "Trennbare Verben", ru: "Глаголы с отделяемой приставкой", level: "A2" },
  { id: "adverbien", title: "Adverbien", ru: "Наречия", level: "A2" },
  { id: "arzt_krankheit", title: "Beim Arzt & Krankheiten", ru: "У врача и болезни", level: "A2" },
  { id: "apotheke_hygiene", title: "Apotheke & Hygiene", ru: "Аптека и гигиена", level: "A2" },
  { id: "sport", title: "Sport", ru: "Спорт", level: "A2" },
  { id: "reise_hotel", title: "Hotel & Urlaub", ru: "Отель и отпуск", level: "A2" },
  { id: "kommunikation", title: "Telefon & Post", ru: "Телефон и почта", level: "A2" },
  { id: "feste", title: "Feste & Traditionen", ru: "Праздники и традиции", level: "A2" },
  { id: "geografie", title: "Länder & Geografie", ru: "Страны и география", level: "A2" },
  { id: "natur_pflanzen", title: "Pflanzen & Landschaft", ru: "Растения и ландшафт", level: "A2" },
  { id: "handwerk_werkzeug", title: "Werkzeug & Heimwerken", ru: "Инструменты и ремонт", level: "B1" },
  { id: "kinder_erziehung", title: "Kinder & Erziehung", ru: "Дети и воспитание", level: "B1" },
  { id: "beziehungen", title: "Liebe & Beziehungen", ru: "Любовь и отношения", level: "B1" },
  { id: "umgangssprache", title: "Umgangssprache", ru: "Разговорный немецкий", level: "B1" },
  { id: "dach_regional", title: "Österreich, Schweiz & Regionales", ru: "Австрийские, швейцарские и региональные слова", level: "B1" },
  { id: "briefe_formell", title: "Formelle Briefe & E-Mails", ru: "Официальные письма", level: "B1" },
  { id: "reflexive_verben", title: "Reflexive Verben", ru: "Возвратные глаголы", level: "B1" },
  { id: "verben_praep", title: "Verben mit Präpositionen", ru: "Глаголы с предлогами", level: "B1" },
  { id: "computer_internet", title: "Computer & Internet", ru: "Компьютер и интернет", level: "B1" },
  { id: "auto_werkstatt", title: "Auto & Werkstatt", ru: "Автомобиль и автосервис", level: "B1" },
  { id: "aufenthalt", title: "Aufenthalt & Migration", ru: "ВНЖ и миграция", level: "B1" },
  { id: "bank_geld", title: "Bank & Geld", ru: "Банк и деньги", level: "B1" },
  { id: "wohnen_miete", title: "Wohnungssuche & Miete", ru: "Поиск жилья и аренда", level: "B1" },
  { id: "buero", title: "Im Büro", ru: "В офисе", level: "B1" },
  { id: "kultur_kunst", title: "Kunst, Musik & Literatur", ru: "Искусство, музыка и литература", level: "B1" },
  { id: "notfall_polizei", title: "Notfall & Polizei", ru: "Экстренные случаи и полиция", level: "B1" },
  { id: "konnektoren", title: "Konnektoren", ru: "Союзы и связки", level: "B1" },
  { id: "steuern_versicherung", title: "Steuern & Versicherungen", ru: "Налоги и страхование", level: "B2" },
  { id: "recht_justiz", title: "Recht & Justiz", ru: "Право и суд", level: "B2" },
  { id: "geschichte", title: "Geschichte", ru: "История", level: "B2" },
  { id: "nomen_verb", title: "Nomen-Verb-Verbindungen", ru: "Устойчивые сочетания сущ. + глагол", level: "B2" },
  { id: "redewendungen", title: "Redewendungen", ru: "Идиомы и поговорки", level: "B2" },
  { id: "psychologie", title: "Psychologie", ru: "Психология", level: "C1" },
  { id: "religion_philosophie", title: "Religion & Philosophie", ru: "Религия и философия", level: "C1" },
  { id: "c2_gehoben", title: "Gehobener Wortschatz", ru: "Лексика уровня C2", level: "C2" },
  { id: "akademisch", title: "Akademische Sprache", ru: "Академический язык", level: "C1" },
  { id: "abstrakt", title: "Abstrakte Begriffe", ru: "Абстрактные понятия", level: "C1" },
];

export const EXTRA_VOCABULARY = [
  ...PART1, ...PART2, ...PART3, ...PART4, ...PART5, ...PART6, ...PART7, ...PART8, ...PART9, ...PART10,
];
