// Ролевые миссии для AI-собеседника: ИИ играет роль (чиновник, арендодатель,
// врач…), у ученика — конкретные цели. После разговора ИИ проверяет, достигнуты
// ли цели, и разбирает ошибки. Роль описана по-английски для модели; ответы
// модель всё равно даёт на изучаемом языке.
export interface Mission {
  id: string;
  icon: string;
  title: string;
  level: "A2" | "B1" | "B2" | "C1";
  official?: boolean;
  objectives: string[];
  role: string;
}

export const MISSIONS: Mission[] = [
  {
    id: "m-residence", icon: "🛂", title: "Продлить вид на жительство", level: "B1", official: true,
    objectives: ["Объяснить цель визита", "Ответить, где и кем вы работаете", "Узнать, сколько займёт оформление"],
    role: "You are a strict but fair officer at the immigration office in the country where the target language is spoken. The learner wants to extend their residence permit. Ask for their passport, purpose of stay, employment, and proof of address. Mention one missing document they need to bring later.",
  },
  {
    id: "m-registration", icon: "🏛️", title: "Регистрация по месту жительства", level: "A2", official: true,
    objectives: ["Сказать, что вы переехали", "Назвать адрес и дату переезда", "Спросить, когда придёт подтверждение"],
    role: "You are a clerk at the local registration office (residents' registration). The learner has just moved and needs to register their new address. Ask for ID, the new address, the moving-in date and the landlord's confirmation.",
  },
  {
    id: "m-flat", icon: "🏠", title: "Снять квартиру и поторговаться", level: "B1",
    objectives: ["Узнать полную стоимость с коммунальными", "Спросить про залог", "Попросить скидку или более поздний въезд"],
    role: "You are a landlord showing a two-room flat. Rent is relatively high. You are willing to negotiate a little if the learner gives good reasons (stable job, long-term rental). Ask about their job and income.",
  },
  {
    id: "m-doctor", icon: "🩺", title: "На приёме у врача", level: "A2",
    objectives: ["Описать симптомы", "Сказать, сколько дней болеете", "Спросить, как принимать лекарство"],
    role: "You are a family doctor. The learner is a patient. Ask about symptoms, how long they have had them, allergies and medication. Give a simple diagnosis and instructions.",
  },
  {
    id: "m-interview", icon: "💼", title: "Собеседование на работу", level: "B2",
    objectives: ["Рассказать о своём опыте", "Назвать сильную и слабую сторону", "Обсудить зарплатные ожидания"],
    role: "You are an HR manager interviewing the learner for a job matching their profession. Ask about experience, strengths and weaknesses, why they want this job, and salary expectations. Be professional and slightly challenging.",
  },
  {
    id: "m-bank", icon: "🏦", title: "Заблокировали карту", level: "B1", official: true,
    objectives: ["Объяснить проблему", "Подтвердить личность", "Договориться о новой карте"],
    role: "You are a bank employee. The learner's card was blocked after a suspicious payment. Verify their identity with a few questions, explain why it was blocked, and offer a replacement card.",
  },
  {
    id: "m-neighbour", icon: "🔊", title: "Шумные соседи", level: "B1",
    objectives: ["Вежливо описать проблему", "Предложить решение", "Договориться о тишине после 22:00"],
    role: "You are a neighbour who often has loud parties. At first you are a bit defensive, but you can be convinced to compromise if the learner stays polite.",
  },
  {
    id: "m-police", icon: "🚓", title: "Заявить о краже", level: "B1", official: true,
    objectives: ["Рассказать, что украли и где", "Описать время и обстоятельства", "Попросить справку для страховой"],
    role: "You are a police officer taking a theft report. Ask what was stolen, when and where it happened, whether there were witnesses, and give a case number at the end.",
  },
  {
    id: "m-complaint", icon: "🍝", title: "Жалоба в ресторане", level: "A2",
    objectives: ["Сказать, что с блюдом не так", "Попросить замену или скидку", "Попросить счёт"],
    role: "You are a waiter in a busy restaurant. The learner has a problem with their dish. Apologise and offer a solution, but first ask what exactly is wrong.",
  },
  {
    id: "m-debate", icon: "🗳️", title: "Дебаты: удалёнка", level: "C1",
    objectives: ["Чётко сформулировать позицию", "Привести два аргумента", "Ответить на контраргумент"],
    role: "You are a sharp debate partner who believes remote work harms company culture. Challenge the learner's arguments with counter-arguments and ask them to justify their position.",
  },
];
