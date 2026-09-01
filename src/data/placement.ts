import type { PlacementQuestion } from "../types";

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // A1
  { id: "p-a1-1", level: "A1", prompt: "Ich ___ Anna.", options: ["bin", "bist", "heiße", "hast"], answer: "heiße" },
  { id: "p-a1-2", level: "A1", prompt: "___ ist ein Auto. (das Auto)", options: ["Der", "Die", "Das", "Den"], answer: "Das" },
  { id: "p-a1-3", level: "A1", prompt: "Wir ___ zwei Kinder.", options: ["sind", "haben", "hat", "bin"], answer: "haben" },
  { id: "p-a1-4", level: "A1", prompt: "Ich sehe ___ Mann. (der Mann)", options: ["der", "den", "dem", "die"], answer: "den" },
  { id: "p-a1-5", level: "A1", prompt: "Du ___ (sprechen) sehr gut Deutsch.", options: ["spreche", "sprichst", "spricht", "sprechen"], answer: "sprichst" },
  { id: "p-a1-6", level: "A1", prompt: "Das ___ mein Bruder.", options: ["ist", "bist", "sind", "bin"], answer: "ist" },
  { id: "p-a1-7", level: "A1", prompt: "Wie ___ du?", options: ["heißt", "heiße", "heißen", "heißt du"], answer: "heißt" },
  { id: "p-a1-8", level: "A1", prompt: "Er ___ (haben) einen Hund.", options: ["hat", "habe", "hast", "haben"], answer: "hat" },

  // A2
  { id: "p-a2-1", level: "A2", prompt: "Ich ___ heute keine Zeit.", options: ["habe", "bin", "hat", "sein"], answer: "habe" },
  { id: "p-a2-2", level: "A2", prompt: "Wir fahren ___ dem Bus zur Arbeit.", options: ["mit", "auf", "in", "zu"], answer: "mit" },
  { id: "p-a2-3", level: "A2", prompt: "Gestern ___ ich im Kino.", options: ["war", "bin", "hatte", "habe"], answer: "war" },
  { id: "p-a2-4", level: "A2", prompt: "Kannst du mir ___ Buch geben?", options: ["das", "dem", "den", "der"], answer: "das" },
  { id: "p-a2-5", level: "A2", prompt: "Sie ist größer ___ ihr Bruder.", options: ["als", "wie", "dann", "so"], answer: "als" },
  { id: "p-a2-6", level: "A2", prompt: "Ich habe das Buch schon ___ (lesen).", options: ["gelesen", "gelest", "lest", "las"], answer: "gelesen" },
  { id: "p-a2-7", level: "A2", prompt: "___ du mir bitte helfen?", options: ["Kannst", "Kann", "Können", "Könnt"], answer: "Kannst" },
  { id: "p-a2-8", level: "A2", prompt: "Ich stehe jeden Tag um sieben Uhr ___.", options: ["auf", "an", "aus", "ab"], answer: "auf" },

  // B1
  { id: "p-b1-1", level: "B1", prompt: "Wenn ich Zeit habe, ___ ich dich besuchen.", options: ["werde", "würde", "wurde", "war"], answer: "werde" },
  { id: "p-b1-2", level: "B1", prompt: "Das ist der Mann, ___ mir geholfen hat.", options: ["der", "den", "dem", "dessen"], answer: "der" },
  { id: "p-b1-3", level: "B1", prompt: "Ich freue mich ___ deinen Besuch.", options: ["auf", "über", "für", "an"], answer: "auf" },
  { id: "p-b1-4", level: "B1", prompt: "Er hat gesagt, dass er ___ komme.", options: ["morgen", "gestern schon", "vorher", "damals"], answer: "morgen" },
  { id: "p-b1-5", level: "B1", prompt: "Die Party wurde ___ das schlechte Wetter abgesagt.", options: ["wegen", "trotz", "während", "seit"], answer: "wegen" },
  { id: "p-b1-6", level: "B1", prompt: "Als ich Kind ___, wohnte ich in Bonn.", options: ["war", "bin", "wäre", "sei"], answer: "war" },
  { id: "p-b1-7", level: "B1", prompt: "Sie hat sich sehr über das Geschenk ___.", options: ["gefreut", "freute", "freuen", "gefreuen"], answer: "gefreut" },
  { id: "p-b1-8", level: "B1", prompt: "Ich weiß nicht, ___ er heute kommt.", options: ["ob", "dass", "wenn", "als"], answer: "ob" },

  // B2
  { id: "p-b2-1", level: "B2", prompt: "___ er müde war, arbeitete er weiter.", options: ["Obwohl", "Weil", "Damit", "Sodass"], answer: "Obwohl" },
  { id: "p-b2-2", level: "B2", prompt: "Das Haus ___ im Jahr 1990 gebaut.", options: ["wurde", "ist", "hat", "war"], answer: "wurde" },
  { id: "p-b2-3", level: "B2", prompt: "An deiner Stelle ___ ich das nicht machen.", options: ["würde", "werde", "wurde", "war"], answer: "würde" },
  { id: "p-b2-4", level: "B2", prompt: "Die Aufgabe muss bis morgen erledigt ___.", options: ["werden", "sein", "haben", "wird"], answer: "werden" },
  { id: "p-b2-5", level: "B2", prompt: "Sie ist die Kollegin, ___ Büro neben meinem liegt.", options: ["deren", "dessen", "die", "der"], answer: "deren" },
  { id: "p-b2-6", level: "B2", prompt: "Er lernt jeden Tag, ___ die Prüfung zu bestehen.", options: ["um", "ohne", "statt", "damit"], answer: "um" },
  { id: "p-b2-7", level: "B2", prompt: "Je früher du anfängst, ___ schneller bist du fertig.", options: ["desto", "als", "wie", "so"], answer: "desto" },
  { id: "p-b2-8", level: "B2", prompt: "Das Problem lässt sich leicht ___.", options: ["lösen", "gelöst", "löst", "zu lösen"], answer: "lösen" },

  // C1
  { id: "p-c1-1", level: "C1", prompt: "Er sagte, er ___ keine Zeit für das Treffen.", options: ["habe", "hat", "hätte gehabt", "haben"], answer: "habe" },
  { id: "p-c1-2", level: "C1", prompt: "Je mehr man übt, ___ besser wird man.", options: ["desto", "so", "als", "wie"], answer: "desto" },
  { id: "p-c1-3", level: "C1", prompt: "Die ___ Preise beunruhigen viele Verbraucher. (steigen)", options: ["steigenden", "gestiegenen", "steigend", "gestiegen"], answer: "steigenden" },
  { id: "p-c1-4", level: "C1", prompt: "Das Formular ist bis Freitag ___.", options: ["auszufüllen", "ausgefüllt", "ausfüllen", "füllt aus"], answer: "auszufüllen" },
  { id: "p-c1-5", level: "C1", prompt: "Das ist das Interessanteste, ___ ich je gelesen habe.", options: ["was", "das", "dass", "wo"], answer: "was" },
  { id: "p-c1-6", level: "C1", prompt: "Sie fragte, ___ ich am Wochenende Zeit hätte.", options: ["ob", "dass", "wie", "was"], answer: "ob" },
  { id: "p-c1-7", level: "C1", prompt: "Die Untersuchung ___ Problems dauerte Monate. (Nominalisierung von „untersuchen“)", options: ["die Untersuchung des", "das Untersuchen des", "die Untersuchen der", "der Untersuchung des"], answer: "die Untersuchung des" },
  { id: "p-c1-8", level: "C1", prompt: "Zwar ist die Wohnung klein, ___ liegt sie zentral.", options: ["aber", "sondern", "denn", "doch"], answer: "aber" },

  // C2
  { id: "p-c2-1", level: "C2", prompt: "___ des schlechten Wetters fand die Veranstaltung wie geplant statt.", options: ["Ungeachtet", "Trotzdem", "Obwohl", "Dennoch"], answer: "Ungeachtet" },
  { id: "p-c2-2", level: "C2", prompt: "Kaum ___ er das Zimmer betreten, klingelte das Telefon.", options: ["hatte", "hat", "habe", "hätte"], answer: "hatte" },
  { id: "p-c2-3", level: "C2", prompt: "Er tat so, ___ er nichts davon wüsste.", options: ["als ob", "obwohl", "sodass", "indem"], answer: "als ob" },
  { id: "p-c2-4", level: "C2", prompt: "Nicht ___ hatte sie die Prüfung bestanden, als sie schon von der nächsten Herausforderung sprach.", options: ["eher", "früher", "kaum", "sowie"], answer: "eher" },
  { id: "p-c2-5", level: "C2", prompt: "___ man die Umstände auch betrachtet, die Entscheidung war unumgänglich.", options: ["Wie", "Obwohl", "Indem", "Sodass"], answer: "Wie" },
  { id: "p-c2-6", level: "C2", prompt: "Sie gilt, ___ ihrer Jugend, als eine der erfahrensten Expertinnen des Landes.", options: ["ungeachtet", "trotzdem", "obwohl", "dennoch"], answer: "ungeachtet" },
  { id: "p-c2-7", level: "C2", prompt: "___ er auch argumentierte, sie ließ sich nicht überzeugen.", options: ["Wie", "Sodass", "Indem", "Weil"], answer: "Wie" },
  { id: "p-c2-8", level: "C2", prompt: "Erst nachdem er sich entschuldigt hatte, ___ sie ihm wieder zu.", options: ["hörte", "hörten", "höre", "gehört"], answer: "hörte" },
];
