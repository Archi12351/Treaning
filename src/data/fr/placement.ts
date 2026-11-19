import type { PlacementQuestion } from "../../types";

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // A1
  { id: "fpl-a1-1", level: "A1", prompt: "Je ___ russe.", options: ["suis", "ai", "es", "est"], answer: "suis" },
  { id: "fpl-a1-2", level: "A1", prompt: "Elle ___ vingt ans.", options: ["a", "est", "as", "ont"], answer: "a" },
  { id: "fpl-a1-3", level: "A1", prompt: "Nous ___ à Paris.", options: ["habitons", "habitez", "habitent", "habite"], answer: "habitons" },
  { id: "fpl-a1-4", level: "A1", prompt: "Je voudrais ___ eau, s'il vous plaît.", options: ["de l'", "du", "la", "un"], answer: "de l'" },
  { id: "fpl-a1-5", level: "A1", prompt: "Je ne parle ___ chinois.", options: ["pas", "plus de", "rien", "non"], answer: "pas" },
  // A2
  { id: "fpl-a2-1", level: "A2", prompt: "Hier, je ___ au cinéma.", options: ["suis allé", "ai allé", "vais", "allais aller"], answer: "suis allé" },
  { id: "fpl-a2-2", level: "A2", prompt: "C'est une ___ maison.", options: ["belle", "beau", "bel", "beaux"], answer: "belle" },
  { id: "fpl-a2-3", level: "A2", prompt: "Demain, je ___ partir tôt.", options: ["vais", "vas", "suis", "ai"], answer: "vais" },
  { id: "fpl-a2-4", level: "A2", prompt: "Ce gâteau est ___ que l'autre.", options: ["meilleur", "plus bon", "mieux", "bon"], answer: "meilleur" },
  { id: "fpl-a2-5", level: "A2", prompt: "Elle s'est ___ à sept heures.", options: ["levée", "levé", "lever", "levés"], answer: "levée" },
  // B1
  { id: "fpl-b1-1", level: "B1", prompt: "Quand j'étais petit, je ___ souvent chez ma grand-mère.", options: ["allais", "suis allé", "irai", "vais"], answer: "allais" },
  { id: "fpl-b1-2", level: "B1", prompt: "Tu parles à ta mère ? — Oui, je ___ parle.", options: ["lui", "la", "le", "leur"], answer: "lui" },
  { id: "fpl-b1-3", level: "B1", prompt: "Si j'avais le temps, je ___ plus.", options: ["lirais", "lirai", "lis", "lisais"], answer: "lirais" },
  { id: "fpl-b1-4", level: "B1", prompt: "Le film ___ je parle est sorti hier.", options: ["dont", "que", "qui", "où"], answer: "dont" },
  { id: "fpl-b1-5", level: "B1", prompt: "Tu vas à Lyon ? — Oui, j'___ vais demain.", options: ["y", "en", "le", "lui"], answer: "y" },
  // B2
  { id: "fpl-b2-1", level: "B2", prompt: "Il faut que tu ___ ce formulaire.", options: ["remplisses", "remplis", "rempliras", "remplir"], answer: "remplisses" },
  { id: "fpl-b2-2", level: "B2", prompt: "Bien qu'il ___ tard, elle travaille encore.", options: ["soit", "est", "sera", "était"], answer: "soit" },
  { id: "fpl-b2-3", level: "B2", prompt: "Si j'avais su, je ___ venu plus tôt.", options: ["serais", "suis", "serai", "étais"], answer: "serais" },
  { id: "fpl-b2-4", level: "B2", prompt: "Il m'a dit qu'il ___ le lendemain.", options: ["viendrait", "viendra", "vient", "venait de"], answer: "viendrait" },
  { id: "fpl-b2-5", level: "B2", prompt: "La loi ___ votée l'année dernière.", options: ["a été", "a", "était été", "est"], answer: "a été" },
  // C1
  { id: "fpl-c1-1", level: "C1", prompt: "Partez avant qu'il ne ___ trop tard.", options: ["soit", "est", "sera", "serait"], answer: "soit" },
  { id: "fpl-c1-2", level: "C1", prompt: "___ à votre courrier, je vous informe que votre demande est acceptée.", options: ["Suite", "Depuis", "Après", "Selon"], answer: "Suite" },
  { id: "fpl-c1-3", level: "C1", prompt: "Peut-être ___ raison.", options: ["a-t-il", "il a-t-il", "ait-il", "il ait"], answer: "a-t-il" },
  { id: "fpl-c1-4", level: "C1", prompt: "C'est une question ___ je n'avais pas pensé.", options: ["à laquelle", "que", "dont", "laquelle"], answer: "à laquelle" },
  { id: "fpl-c1-5", level: "C1", prompt: "Il convient ___ souligner l'importance de ce projet.", options: ["de", "à", "pour", "que"], answer: "de" },
  // C2
  { id: "fpl-c2-1", level: "C2", prompt: "Le roi ___ en 1715. (passé simple)", options: ["mourut", "mourit", "mourra", "est mourut"], answer: "mourut" },
  { id: "fpl-c2-2", level: "C2", prompt: "À peine ___ arrivé qu'il repartit.", options: ["fut-il", "il fut", "était-il", "il était"], answer: "fut-il" },
  { id: "fpl-c2-3", level: "C2", prompt: "Un argument ___ : séduisant mais trompeur.", options: ["fallacieux", "pertinent", "étayé", "péremptoire"], answer: "fallacieux" },
  { id: "fpl-c2-4", level: "C2", prompt: "Il est plus habile que je ne le ___.", options: ["croyais", "crois pas", "crusse", "croie"], answer: "croyais" },
  { id: "fpl-c2-5", level: "C2", prompt: "Ce privilège n'est pas l'___ des riches.", options: ["apanage", "aléa", "enjeu", "gageure"], answer: "apanage" },
];
