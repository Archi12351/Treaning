import { gloss, questions, type ReadingText } from "./types";

export const TEXTS_DE: ReadingText[] = [
  {
    id: "de-t-anna", level: "A1", icon: "👩", title: "Das ist Anna", ru: "Это Анна",
    paragraphs: [
      "Hallo! Ich heiße Anna und ich bin 28 Jahre alt. Ich komme aus Russland, aus Kasan.",
      "Seit einem Jahr wohne ich in Leipzig. Ich habe eine kleine Wohnung im Zentrum. Ich arbeite als Krankenschwester in einem Krankenhaus.",
      "Am Wochenende gehe ich gern in den Park oder ins Kino. Mein Deutsch ist noch nicht perfekt, aber ich lerne jeden Tag.",
    ],
    glossary: gloss("seit einem Jahr = уже год; die Wohnung = квартира; die Krankenschwester = медсестра; am Wochenende = на выходных; noch nicht = ещё не"),
    questions: questions(`
Откуда Анна? | Из Казани ~ Из Лейпцига ~ Из Москвы | Из Казани
Сколько Анна живёт в Лейпциге? | Год ~ Месяц ~ Пять лет | Год
Кем работает Анна? | Медсестрой ~ Учительницей ~ Продавщицей | Медсестрой
Что Анна делает на выходных? | Ходит в парк или кино ~ Работает ~ Учит английский | Ходит в парк или кино
`),
  },
  {
    id: "de-t-einkauf", level: "A1", icon: "🛒", title: "Einkaufen am Samstag", ru: "Покупки в субботу",
    paragraphs: [
      "Am Samstag gehe ich in den Supermarkt. Ich brauche Brot, Milch, Käse und Äpfel.",
      "Die Äpfel sind heute im Angebot: ein Kilo kostet nur 1,99 Euro. Ich nehme zwei Kilo.",
      "An der Kasse ist eine lange Schlange. Ich bezahle mit Karte und bringe die Pfandflaschen zurück. Ich bekomme 75 Cent.",
    ],
    glossary: gloss("brauchen = нуждаться; im Angebot = по акции; die Kasse = касса; die Schlange = очередь; die Pfandflasche = бутылка с залогом"),
    questions: questions(`
Что по акции? | Яблоки ~ Сыр ~ Хлеб | Яблоки
Сколько килограммов яблок берёт автор? | Два ~ Один ~ Три | Два
Как автор платит? | Картой ~ Наличными ~ Не платит | Картой
Сколько денег автор получает за бутылки? | 75 центов ~ 1,99 евро ~ 25 центов | 75 центов
`),
  },
  {
    id: "de-t-termin", level: "A2", icon: "📩", category: "official", title: "Terminbestätigung vom Bürgeramt", ru: "Подтверждение записи в бюргерамт",
    paragraphs: [
      "Sehr geehrte Frau Petrova, hiermit bestätigen wir Ihren Termin für die Anmeldung einer Wohnung.",
      "Datum: Dienstag, 14. März, Uhrzeit: 9:20 Uhr. Ort: Bürgeramt Mitte, Raum 2.14.",
      "Bitte bringen Sie folgende Unterlagen mit: Ihren Reisepass, die ausgefüllte Anmeldung und die Wohnungsgeberbestätigung Ihres Vermieters.",
      "Wenn Sie den Termin nicht wahrnehmen können, sagen Sie ihn bitte online ab. Die Anmeldung ist gebührenfrei.",
    ],
    glossary: gloss("hiermit bestätigen wir = настоящим подтверждаем; die Unterlagen = документы; die Wohnungsgeberbestätigung = подтверждение арендодателя; wahrnehmen = прийти (на запись); absagen = отменить; gebührenfrei = бесплатно"),
    questions: questions(`
Для чего запись? | Регистрация по месту жительства ~ Получение паспорта ~ Регистрация брака | Регистрация по месту жительства
Во сколько приём? | В 9:20 ~ В 14:00 ~ В 2:14 | В 9:20
Какой документ нужен от арендодателя? | Подтверждение арендодателя ~ Договор аренды ~ Квитанция об оплате | Подтверждение арендодателя
Сколько стоит регистрация? | Бесплатно ~ 20 евро ~ 93 евро | Бесплатно
`),
  },
  {
    id: "de-t-wohnung", level: "A2", icon: "🏠", title: "Wohnungsanzeige", ru: "Объявление о квартире",
    paragraphs: [
      "Schöne 2-Zimmer-Wohnung in Köln-Ehrenfeld, 58 m², 3. Stock mit Aufzug, Balkon, Einbauküche.",
      "Kaltmiete: 820 €, Nebenkosten: 180 €, Kaution: drei Kaltmieten. Frei ab 1. Mai.",
      "Haustiere nach Absprache. Nichtraucher bevorzugt. Bitte senden Sie uns Ihre Selbstauskunft und die letzten drei Gehaltsnachweise.",
    ],
    glossary: gloss("die Einbauküche = встроенная кухня; die Kaltmiete = аренда без коммунальных; die Kaution = залог; nach Absprache = по договорённости; bevorzugt = предпочтительно; der Gehaltsnachweis = справка о зарплате"),
    questions: questions(`
Сколько всего в месяц с коммунальными? | 1000 € ~ 820 € ~ 180 € | 1000 €
Какой залог? | 2460 € ~ 820 € ~ 1000 € | 2460 €
Можно ли с домашними животными? | По договорённости ~ Нет ~ Да, без условий | По договорённости
Что нужно прислать? | Анкету и три справки о зарплате ~ Паспорт ~ Только резюме | Анкету и три справки о зарплате
`),
  },
  {
    id: "de-t-arzt", level: "B1", icon: "🩺", title: "Gesundheitssystem in Deutschland", ru: "Система здравоохранения Германии",
    paragraphs: [
      "In Deutschland muss jeder krankenversichert sein. Die meisten Menschen sind in einer gesetzlichen Krankenkasse versichert; der Beitrag hängt vom Einkommen ab und wird zur Hälfte vom Arbeitgeber bezahlt.",
      "Wenn man krank ist, geht man zuerst zum Hausarzt. Für einen Facharzt braucht man oft eine Überweisung. Bei Notfällen kann man die 112 anrufen oder in die Notaufnahme gehen.",
      "Wer krank ist und nicht arbeiten kann, bekommt vom Arzt eine Krankschreibung. Der Arbeitgeber zahlt dann bis zu sechs Wochen den vollen Lohn weiter.",
    ],
    glossary: gloss("krankenversichert = застрахован медицински; gesetzlich = государственный, обязательный; der Beitrag = взнос; die Überweisung = направление; die Notaufnahme = приёмный покой; die Krankschreibung = больничный"),
    questions: questions(`
Wer zahlt die Hälfte des Beitrags? | Der Arbeitgeber ~ Der Staat ~ Der Hausarzt | Der Arbeitgeber
Was braucht man oft für einen Facharzt? | Eine Überweisung ~ Eine Kaution ~ Einen Reisepass | Eine Überweisung
Welche Nummer ruft man im Notfall an? | 112 ~ 110 ~ 115 | 112
Wie lange zahlt der Arbeitgeber den Lohn bei Krankheit weiter? | Bis zu sechs Wochen ~ Ein Jahr ~ Gar nicht | Bis zu sechs Wochen
`),
  },
  {
    id: "de-t-finanzamt", level: "B1", icon: "🧾", category: "official", title: "Brief vom Finanzamt", ru: "Письмо из налоговой",
    paragraphs: [
      "Sehr geehrter Herr Ivanov, für das Jahr 2025 haben Sie bisher keine Einkommensteuererklärung abgegeben. Nach unseren Unterlagen sind Sie zur Abgabe verpflichtet, da Sie im Laufe des Jahres die Steuerklasse gewechselt haben.",
      "Wir bitten Sie, die Erklärung bis zum 30. Juni über das Portal ELSTER einzureichen. Sollten Sie die Frist nicht einhalten können, beantragen Sie bitte rechtzeitig eine Fristverlängerung.",
      "Bei verspäteter Abgabe kann ein Verspätungszuschlag festgesetzt werden. Für Rückfragen erreichen Sie uns montags bis donnerstags von 8 bis 15 Uhr.",
    ],
    glossary: gloss("die Einkommensteuererklärung = декларация о подоходном налоге; verpflichtet = обязан; einreichen = подать; die Frist einhalten = соблюсти срок; die Fristverlängerung = продление срока; der Verspätungszuschlag = штраф за просрочку"),
    questions: questions(`
Warum muss Herr Ivanov eine Erklärung abgeben? | Er hat die Steuerklasse gewechselt ~ Er ist umgezogen ~ Er hat geheiratet | Er hat die Steuerklasse gewechselt
Bis wann soll er die Erklärung einreichen? | Bis zum 30. Juni ~ Bis Ende des Jahres ~ Sofort | Bis zum 30. Juni
Was passiert bei verspäteter Abgabe? | Es kann einen Zuschlag geben ~ Nichts ~ Er verliert das Visum | Es kann einen Zuschlag geben
Wann ist das Finanzamt telefonisch erreichbar? | Montag bis Donnerstag, 8–15 Uhr ~ Täglich ~ Nur freitags | Montag bis Donnerstag, 8–15 Uhr
`),
  },
  {
    id: "de-t-homeoffice", level: "B2", icon: "💻", title: "Homeoffice: Fluch oder Segen?", ru: "Удалёнка: проклятие или благо?",
    paragraphs: [
      "Seit der Pandemie arbeiten viele Beschäftigte zumindest teilweise von zu Hause aus. Befürworter betonen die gewonnene Zeit: Wer nicht pendeln muss, spart oft eine Stunde pro Tag und kann Familie und Beruf besser vereinbaren.",
      "Kritiker hingegen warnen vor der Entgrenzung der Arbeit. Wenn Küche und Büro derselbe Raum sind, fällt es vielen schwer, abends abzuschalten. Zudem leide die informelle Kommunikation, die gerade für Berufseinsteiger wichtig sei.",
      "Viele Unternehmen setzen daher auf hybride Modelle: zwei bis drei Tage im Büro, der Rest im Homeoffice. Ob sich dieses Modell langfristig durchsetzt, bleibt abzuwarten.",
    ],
    glossary: gloss("der Befürworter = сторонник; pendeln = ездить на работу (далеко); vereinbaren = совмещать; die Entgrenzung = размывание границ; abschalten = отключиться, расслабиться; sich durchsetzen = утвердиться"),
    questions: questions(`
Welchen Vorteil nennen die Befürworter? | Man spart Pendelzeit ~ Man verdient mehr ~ Man hat mehr Kollegen | Man spart Pendelzeit
Wovor warnen die Kritiker? | Vor der Entgrenzung der Arbeit ~ Vor zu hohen Mieten ~ Vor Arbeitslosigkeit | Vor der Entgrenzung der Arbeit
Für wen ist informelle Kommunikation besonders wichtig? | Für Berufseinsteiger ~ Für Chefs ~ Für Rentner | Für Berufseinsteiger
Welches Modell wählen viele Firmen? | Ein hybrides Modell ~ Nur Büro ~ Nur Homeoffice | Ein hybrides Modell
`),
  },
  {
    id: "de-t-einbuergerung", level: "C1", icon: "🇩🇪", category: "official", title: "Das neue Staatsangehörigkeitsrecht", ru: "Новый закон о гражданстве",
    paragraphs: [
      "Mit der Reform des Staatsangehörigkeitsrechts, die im Juni 2024 in Kraft trat, hat Deutschland die Einbürgerung grundlegend erleichtert. Die erforderliche Aufenthaltsdauer wurde in der Regel von acht auf fünf Jahre verkürzt.",
      "Zugleich ist die Mehrstaatigkeit nun generell zulässig: Wer Deutscher wird, muss seine bisherige Staatsangehörigkeit nicht mehr aufgeben. Ob das Herkunftsland dies seinerseits erlaubt, richtet sich jedoch nach dessen Recht.",
      "Unverändert bleiben zentrale Voraussetzungen: Antragsteller müssen ihren Lebensunterhalt grundsätzlich ohne staatliche Leistungen bestreiten, ausreichende Deutschkenntnisse nachweisen und sich zur freiheitlichen demokratischen Grundordnung bekennen.",
    ],
    glossary: gloss("in Kraft treten = вступать в силу; die Einbürgerung = натурализация; die Mehrstaatigkeit = множественное гражданство; sich richten nach = определяться чем-то; den Lebensunterhalt bestreiten = обеспечивать себя; sich bekennen zu = заявлять о приверженности"),
    questions: questions(`
Auf wie viele Jahre wurde die Aufenthaltsdauer in der Regel verkürzt? | Fünf ~ Drei ~ Acht | Fünf
Muss man die alte Staatsangehörigkeit aufgeben? | Nach deutschem Recht nicht mehr ~ Ja, immer ~ Nur bei EU-Bürgern | Nach deutschem Recht nicht mehr
Wovon hängt ab, ob das Herkunftsland die doppelte Staatsangehörigkeit erlaubt? | Vom Recht des Herkunftslandes ~ Vom Bürgeramt ~ Vom Arbeitgeber | Vom Recht des Herkunftslandes
Welche Voraussetzung bleibt bestehen? | Lebensunterhalt ohne staatliche Leistungen ~ Ein Universitätsabschluss ~ Ein Haus in Deutschland | Lebensunterhalt ohne staatliche Leistungen
`),
  },
];
