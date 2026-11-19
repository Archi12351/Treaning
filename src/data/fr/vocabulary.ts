import type { CEFRLevel, VocabItem } from "../../types";
import { mergeVocab } from "../vocabParse";
import { FR_PART1 } from "./vocab-part1";
import { FR_PART2 } from "./vocab-part2";
import { FR_PART3 } from "./vocab-part3";
import { FR_PART4 } from "./vocab-part4";

export const TOPICS: { id: string; title: string; ru: string; level: CEFRLevel }[] = [
  { id: "fr-salutations", title: "Salutations & présentations", ru: "Приветствие и знакомство", level: "A1" },
  { id: "fr-famille", title: "La famille", ru: "Семья", level: "A1" },
  { id: "fr-nombres", title: "Nombres & couleurs", ru: "Числа и цвета", level: "A1" },
  { id: "fr-temps", title: "Le temps & le calendrier", ru: "Время и календарь", level: "A1" },
  { id: "fr-nourriture", title: "Nourriture & boissons", ru: "Еда и напитки", level: "A1" },
  { id: "fr-fruits-legumes", title: "Fruits & légumes", ru: "Фрукты и овощи", level: "A1" },
  { id: "fr-maison", title: "La maison & le logement", ru: "Дом и жильё", level: "A1" },
  { id: "fr-ville", title: "La ville", ru: "Город", level: "A1" },
  { id: "fr-verbes", title: "Verbes essentiels", ru: "Основные глаголы", level: "A1" },
  { id: "fr-adjectifs", title: "Adjectifs essentiels", ru: "Основные прилагательные", level: "A1" },
  { id: "fr-corps-vetements", title: "Le corps & les vêtements", ru: "Тело и одежда", level: "A1" },
  { id: "fr-transports", title: "Les transports", ru: "Транспорт", level: "A1" },
  { id: "fr-meteo-nature", title: "Météo & nature", ru: "Погода и природа", level: "A1" },
  { id: "fr-mots-pratiques", title: "Petits mots utiles", ru: "Вопросы, предлоги, местоимения", level: "A1" },
  { id: "fr-metiers", title: "Les métiers", ru: "Профессии", level: "A2" },
  { id: "fr-ecole", title: "École & études", ru: "Школа и учёба", level: "A2" },
  { id: "fr-adverbes", title: "Adverbes", ru: "Наречия", level: "A2" },
  { id: "fr-achats", title: "Les achats", ru: "Покупки", level: "A2" },
  { id: "fr-sante", title: "La santé", ru: "Здоровье", level: "A2" },
  { id: "fr-voyage", title: "Voyages & hôtel", ru: "Путешествия и отель", level: "A2" },
  { id: "fr-loisirs", title: "Les loisirs", ru: "Досуг", level: "A2" },
  { id: "fr-sentiments", title: "Sentiments & relations", ru: "Чувства и отношения", level: "B1" },
  { id: "fr-culture", title: "Culture & arts", ru: "Культура и искусство", level: "B1" },
  { id: "fr-urgences", title: "Urgences & police", ru: "Экстренные случаи и полиция", level: "B1" },
  { id: "fr-travail", title: "Le travail", ru: "Работа", level: "B1" },
  { id: "fr-administration", title: "Administration & démarches", ru: "Госуслуги и документы", level: "B1" },
  { id: "fr-argent", title: "Banque & argent", ru: "Банк и деньги", level: "B1" },
  { id: "fr-numerique", title: "Le numérique", ru: "Технологии и интернет", level: "B1" },
  { id: "fr-connecteurs", title: "Connecteurs logiques", ru: "Союзы и связки", level: "B1" },
  { id: "fr-societe", title: "Société & politique", ru: "Общество и политика", level: "B2" },
  { id: "fr-expressions", title: "Expressions idiomatiques", ru: "Идиомы", level: "B2" },
  { id: "fr-soutenu", title: "Langue soutenue", ru: "Книжный и деловой стиль", level: "C1" },
];

export const VOCABULARY: VocabItem[] = mergeVocab(FR_PART1, FR_PART2, FR_PART3, FR_PART4);
