export interface CultureFact {
  id: string;
  country: "Deutschland" | "Österreich" | "Schweiz" | "Liechtenstein";
  flag: string;
  title: string;
  text: string;
}

export const CULTURE_FACTS: CultureFact[] = [
  {
    id: "de-1",
    country: "Deutschland",
    flag: "🇩🇪",
    title: "Мировой лидер экспорта",
    text: "Германия — крупнейшая экономика Европы и одна из ведущих экспортных держав мира: автомобили, машиностроение и химическая продукция расходятся по всему миру.",
  },
  {
    id: "de-2",
    country: "Deutschland",
    flag: "🇩🇪",
    title: "Дуальное образование",
    text: "Немецкая система Ausbildung сочетает работу на предприятии с учёбой в колледже — благодаря ей молодёжная безработица в Германии одна из самых низких в ЕС.",
  },
  {
    id: "de-3",
    country: "Deutschland",
    flag: "🇩🇪",
    title: "Пиво по чистоте",
    text: "Rheinheitsgebot 1516 года — закон о чистоте пива, требующий использовать только воду, солод, хмель и дрожжи — один из старейших в мире продуктовых стандартов.",
  },
  {
    id: "at-1",
    country: "Österreich",
    flag: "🇦🇹",
    title: "Музыкальная столица",
    text: "Вена дала миру Моцарта, Гайдна, Бетховена, Штрауса — концентрация классических композиторов в одном городе не имеет аналогов в истории.",
  },
  {
    id: "at-2",
    country: "Österreich",
    flag: "🇦🇹",
    title: "Качество жизни",
    text: "Вена регулярно занимает верхние строчки мировых рейтингов качества жизни благодаря общественному транспорту, здравоохранению и социальному жилью.",
  },
  {
    id: "ch-1",
    country: "Schweiz",
    flag: "🇨🇭",
    title: "Четыре официальных языка",
    text: "В Швейцарии четыре государственных языка: немецкий, французский, итальянский и ретороманский — но швейцарский немецкий (Schwiizerdütsch) на слух заметно отличается от стандартного Hochdeutsch.",
  },
  {
    id: "ch-2",
    country: "Schweiz",
    flag: "🇨🇭",
    title: "Самые высокие зарплаты",
    text: "Швейцария стабильно входит в тройку стран с самой высокой средней зарплатой в мире — но и цены (особенно аренда и продукты) заметно выше, чем у соседей.",
  },
  {
    id: "li-1",
    country: "Liechtenstein",
    flag: "🇱🇮",
    title: "Крошечная, но богатая страна",
    text: "Лихтенштейн — одна из самых маленьких стран мира (160 км²), но при этом один из самых высоких показателей ВВП на душу населения благодаря финансовому сектору и промышленности.",
  },
];

export interface SalaryEntry {
  profession: string;
  professionDe: string;
  germanyEur: number;
  austriaEur: number;
  switzerlandEur: number;
}

// Приблизительная средняя валовая (gross) месячная зарплата, округлённо, в евро.
// Ориентир для сравнения, не точная статистика — реальные цифры зависят от региона,
// опыта и отрасли.
export const SALARY_COMPARISON: SalaryEntry[] = [
  { profession: "Программист / IT", professionDe: "Softwareentwickler", germanyEur: 4800, austriaEur: 4200, switzerlandEur: 8500 },
  { profession: "Врач", professionDe: "Arzt / Ärztin", germanyEur: 6500, austriaEur: 5800, switzerlandEur: 11000 },
  { profession: "Инженер", professionDe: "Ingenieur", germanyEur: 4900, austriaEur: 4300, switzerlandEur: 8800 },
  { profession: "Учитель", professionDe: "Lehrer", germanyEur: 4200, austriaEur: 3700, switzerlandEur: 7500 },
  { profession: "Медсестра/медбрат", professionDe: "Krankenpfleger", germanyEur: 3400, austriaEur: 3000, switzerlandEur: 6200 },
  { profession: "Юрист", professionDe: "Rechtsanwalt", germanyEur: 5200, austriaEur: 4500, switzerlandEur: 9500 },
  { profession: "Бухгалтер", professionDe: "Buchhalter", germanyEur: 3600, austriaEur: 3200, switzerlandEur: 6500 },
  { profession: "Маркетолог", professionDe: "Marketingmanager", germanyEur: 4300, austriaEur: 3800, switzerlandEur: 7800 },
  { profession: "Механик/электрик", professionDe: "Mechatroniker", germanyEur: 3300, austriaEur: 2900, switzerlandEur: 6000 },
  { profession: "Официант", professionDe: "Kellner", germanyEur: 2100, austriaEur: 1900, switzerlandEur: 4200 },
  { profession: "Продавец", professionDe: "Verkäufer", germanyEur: 2400, austriaEur: 2200, switzerlandEur: 4500 },
  { profession: "Водитель", professionDe: "Berufskraftfahrer", germanyEur: 2700, austriaEur: 2400, switzerlandEur: 5200 },
];
