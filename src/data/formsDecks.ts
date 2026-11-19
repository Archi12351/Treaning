import type { Language } from "../types";
import { ADJ_COMPARISON, IRREGULAR_VERBS, NOUN_PLURALS } from "./forms";

// Колоды «Тренажёра форм слов» для каждого языка. Каждая карточка — базовая
// форма слова, перевод и 1–2 формы, которые нужно вписать.

export interface FormsItem {
  base: string;
  ru: string;
  forms: string[];
}

export interface FormsDeck {
  id: string;
  label: string;
  icon: string;
  fieldLabels: string[];
  items: FormsItem[];
}

// "base | перевод | форма1 | форма2" — одна карточка на строку.
function deck(raw: string): FormsItem[] {
  return raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && l.includes("|"))
    .map((l) => {
      const [base, ru, ...forms] = l.split("|").map((p) => p.trim());
      return { base, ru, forms };
    });
}

const DE: FormsDeck[] = [
  {
    id: "verben",
    label: "Неправильные глаголы",
    icon: "🏃",
    fieldLabels: ["Präteritum (ich/er...)", "Partizip II (haben/sein + ...)"],
    items: IRREGULAR_VERBS.map((v) => ({ base: v.infinitiv, ru: v.ru, forms: [v.praeteritum, v.partizip2] })),
  },
  {
    id: "nomen",
    label: "Множественное число",
    icon: "📦",
    fieldLabels: ["Plural (die ...)"],
    items: NOUN_PLURALS.map((n) => ({ base: n.singular, ru: n.ru, forms: [n.plural] })),
  },
  {
    id: "adjektive",
    label: "Степени сравнения",
    icon: "📏",
    fieldLabels: ["Komparativ", "Superlativ (am ...)"],
    items: ADJ_COMPARISON.map((a) => ({ base: a.positive, ru: a.ru, forms: [a.komparativ, a.superlativ] })),
  },
];

const EN: FormsDeck[] = [
  {
    id: "en-irregular",
    label: "Неправильные глаголы",
    icon: "🏃",
    fieldLabels: ["Past Simple", "Past Participle (V3)"],
    items: deck(`
be | быть | was | been
have | иметь | had | had
do | делать | did | done
go | идти | went | gone
come | приходить | came | come
see | видеть | saw | seen
take | брать | took | taken
give | давать | gave | given
make | делать | made | made
know | знать | knew | known
think | думать | thought | thought
get | получать | got | got
say | сказать | said | said
tell | рассказать | told | told
find | находить | found | found
leave | уходить | left | left
feel | чувствовать | felt | felt
bring | приносить | brought | brought
buy | покупать | bought | bought
begin | начинать | began | begun
keep | держать | kept | kept
write | писать | wrote | written
read | читать | read | read
speak | говорить | spoke | spoken
eat | есть | ate | eaten
drink | пить | drank | drunk
drive | водить | drove | driven
fly | летать | flew | flown
forget | забывать | forgot | forgotten
choose | выбирать | chose | chosen
break | ломать | broke | broken
lose | терять | lost | lost
pay | платить | paid | paid
meet | встречать | met | met
sell | продавать | sold | sold
send | отправлять | sent | sent
spend | тратить | spent | spent
teach | учить (кого-то) | taught | taught
catch | ловить | caught | caught
win | выигрывать | won | won
sleep | спать | slept | slept
swim | плавать | swam | swum
sing | петь | sang | sung
run | бегать | ran | run
understand | понимать | understood | understood
wear | носить | wore | worn
steal | красть | stole | stolen
hide | прятать | hid | hidden
rise | подниматься | rose | risen
`),
  },
  {
    id: "en-plurals",
    label: "Множественное число",
    icon: "📦",
    fieldLabels: ["Plural"],
    items: deck(`
child | ребёнок | children
man | мужчина | men
woman | женщина | women
person | человек | people
tooth | зуб | teeth
foot | стопа | feet
mouse | мышь | mice
goose | гусь | geese
sheep | овца | sheep
fish | рыба | fish
knife | нож | knives
wife | жена | wives
leaf | лист | leaves
life | жизнь | lives
city | город | cities
baby | малыш | babies
box | коробка | boxes
bus | автобус | buses
potato | картофелина | potatoes
crisis | кризис | crises
phenomenon | явление | phenomena
`),
  },
  {
    id: "en-comparison",
    label: "Степени сравнения",
    icon: "📏",
    fieldLabels: ["Comparative", "Superlative (the ...)"],
    items: deck(`
good | хороший | better | best
bad | плохой | worse | worst
far | далёкий | further | furthest
big | большой | bigger | biggest
hot | горячий | hotter | hottest
happy | счастливый | happier | happiest
easy | лёгкий | easier | easiest
early | ранний | earlier | earliest
cheap | дешёвый | cheaper | cheapest
nice | приятный | nicer | nicest
expensive | дорогой | more expensive | most expensive
beautiful | красивый | more beautiful | most beautiful
interesting | интересный | more interesting | most interesting
little | маленький (о количестве) | less | least
much | много | more | most
`),
  },
];

const FR: FormsDeck[] = [
  {
    id: "fr-present",
    label: "Глаголы: настоящее время",
    icon: "🏃",
    fieldLabels: ["je …", "nous …"],
    items: deck(`
être | быть | suis | sommes
avoir | иметь | ai | avons
aller | идти | vais | allons
faire | делать | fais | faisons
dire | говорить | dis | disons
pouvoir | мочь | peux | pouvons
vouloir | хотеть | veux | voulons
savoir | знать | sais | savons
venir | приходить | viens | venons
prendre | брать | prends | prenons
voir | видеть | vois | voyons
devoir | быть должным | dois | devons
mettre | класть | mets | mettons
partir | уезжать | pars | partons
boire | пить | bois | buvons
écrire | писать | écris | écrivons
lire | читать | lis | lisons
manger | есть | mange | mangeons
commencer | начинать | commence | commençons
acheter | покупать | achète | achetons
`),
  },
  {
    id: "fr-participe",
    label: "Passé composé",
    icon: "⏮️",
    fieldLabels: ["Вспомогательный (avoir/être)", "Participe passé"],
    items: deck(`
faire | делать | avoir | fait
prendre | брать | avoir | pris
mettre | класть | avoir | mis
dire | говорить | avoir | dit
écrire | писать | avoir | écrit
voir | видеть | avoir | vu
lire | читать | avoir | lu
boire | пить | avoir | bu
pouvoir | мочь | avoir | pu
vouloir | хотеть | avoir | voulu
avoir | иметь | avoir | eu
être | быть | avoir | été
ouvrir | открывать | avoir | ouvert
recevoir | получать | avoir | reçu
aller | идти | être | allé
venir | приходить | être | venu
partir | уезжать | être | parti
naître | рождаться | être | né
mourir | умирать | être | mort
rester | оставаться | être | resté
`),
  },
  {
    id: "fr-feminine",
    label: "Женский род прилагательных",
    icon: "👗",
    fieldLabels: ["Féminin"],
    items: deck(`
grand | большой | grande
petit | маленький | petite
beau | красивый | belle
nouveau | новый | nouvelle
vieux | старый | vieille
bon | хороший | bonne
blanc | белый | blanche
long | длинный | longue
heureux | счастливый | heureuse
sportif | спортивный | sportive
cher | дорогой | chère
gentil | милый | gentille
fou | сумасшедший | folle
public | общественный | publique
doux | мягкий | douce
`),
  },
  {
    id: "fr-plural",
    label: "Множественное число",
    icon: "📦",
    fieldLabels: ["Pluriel"],
    items: deck(`
le cheval | лошадь | les chevaux
le journal | газета | les journaux
le travail | работа | les travaux
le bateau | корабль | les bateaux
le jeu | игра | les jeux
l'œil | глаз | les yeux
le nez | нос | les nez
le prix | цена | les prix
le bijou | украшение | les bijoux
le genou | колено | les genoux
monsieur | господин | messieurs
madame | госпожа | mesdames
le ciel | небо | les cieux
le hibou | сова | les hiboux
le pneu | шина | les pneus
`),
  },
];

export const FORMS_BY_LANGUAGE: Record<Language, FormsDeck[]> = { de: DE, en: EN, fr: FR };
