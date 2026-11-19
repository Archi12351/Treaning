import type { Language } from "../types";

export interface CultureFact {
  id: string;
  country: string;
  flag: string;
  title: string;
  text: string;
  // Отмечает факты, сгенерированные ИИ (а не написанные вручную).
  ai?: boolean;
}

export interface CultureCountry {
  name: string;
  flag: string;
}

export interface SalaryRow {
  profession: string;
  professionLocal: string;
  // Значения в том же порядке, что и salaryCountries.
  values: number[];
}

export interface CultureBundle {
  // Как называть регион в заголовках («страны DACH», «англоязычные страны»).
  regionLabel: string;
  countries: CultureCountry[];
  facts: CultureFact[];
  salaryCountries: { code: string; flag: string }[];
  salaries: SalaryRow[];
}

// ─────────────────────────────── Немецкий ───────────────────────────────

const DE_FACTS: CultureFact[] = [
  { id: "de-1", country: "Deutschland", flag: "🇩🇪", title: "Мировой лидер экспорта", text: "Германия — крупнейшая экономика Европы и одна из ведущих экспортных держав мира: автомобили, машиностроение и химическая продукция расходятся по всему миру." },
  { id: "de-2", country: "Deutschland", flag: "🇩🇪", title: "Дуальное образование", text: "Немецкая система Ausbildung сочетает работу на предприятии с учёбой в профессиональной школе — благодаря ей молодёжная безработица в Германии одна из самых низких в ЕС." },
  { id: "de-3", country: "Deutschland", flag: "🇩🇪", title: "Пиво по чистоте", text: "Reinheitsgebot 1516 года — баварский закон о чистоте пива, разрешавший только воду, солод и хмель (дрожжи добавили позже) — один из старейших продуктовых стандартов в мире." },
  { id: "de-4", country: "Deutschland", flag: "🇩🇪", title: "Воскресенье — день тишины", text: "В Германии по воскресеньям почти все магазины закрыты, а шуметь (сверлить, косить газон) не принято и даже запрещено правилами тишины — Sonntagsruhe." },
  { id: "de-5", country: "Deutschland", flag: "🇩🇪", title: "Pfand — залог за бутылки", text: "За большинство пластиковых бутылок и банок платят залог 25 центов. Сдать тару можно в автомат в любом супермаркете — поэтому бутылки на улицах почти не валяются." },
  { id: "de-6", country: "Deutschland", flag: "🇩🇪", title: "Anmeldung за две недели", text: "После переезда в Германии нужно зарегистрироваться по месту жительства (Anmeldung) в течение двух недель. Без справки о регистрации сложно открыть счёт и получить налоговый номер." },
  { id: "de-7", country: "Deutschland", flag: "🇩🇪", title: "Автобан без ограничения", text: "На многих участках немецких автобанов нет общего ограничения скорости — действует лишь рекомендуемая скорость 130 км/ч. Это почти уникальная ситуация в мире." },
  { id: "de-8", country: "Deutschland", flag: "🇩🇪", title: "16 федеральных земель", text: "Германия — федерация из 16 земель. Школьное образование, полиция и даже даты школьных каникул регулируются на уровне земель, а не Берлина." },
  { id: "de-9", country: "Deutschland", flag: "🇩🇪", title: "Сортировка мусора", text: "Немцы сортируют отходы по нескольким бакам: жёлтый — упаковка, синий — бумага, коричневый — органика, серый/чёрный — остальное. Стекло относят в контейнеры по цветам." },
  { id: "de-10", country: "Deutschland", flag: "🇩🇪", title: "Самое длинное слово", text: "Немецкий позволяет строить очень длинные сложные слова. Знаменитое «Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz» (закон о контроле маркировки говядины) реально существовало до 2013 года." },
  { id: "de-11", country: "Deutschland", flag: "🇩🇪", title: "Kaffee und Kuchen", text: "Дневной ритуал «кофе с пирогом» около 15–16 часов, особенно по выходным, — давняя немецкая традиция, сопоставимая с британским чаепитием." },
  { id: "de-12", country: "Deutschland", flag: "🇩🇪", title: "Рождественские ярмарки", text: "Weihnachtsmärkte появились в немецкоязычных землях ещё в Средние века. Нюрнбергский Christkindlesmarkt и дрезденский Striezelmarkt — одни из старейших." },
  { id: "at-1", country: "Österreich", flag: "🇦🇹", title: "Музыкальная столица", text: "В Вене жили и работали Моцарт, Гайдн, Бетховен, Шуберт и Штраус — концентрация великих композиторов в одном городе не имеет аналогов." },
  { id: "at-2", country: "Österreich", flag: "🇦🇹", title: "Качество жизни", text: "Вена регулярно занимает верхние строчки мировых рейтингов качества жизни благодаря общественному транспорту, здравоохранению и социальному жилью." },
  { id: "at-3", country: "Österreich", flag: "🇦🇹", title: "Кофейни — культурное наследие", text: "Венская кофейная культура внесена ЮНЕСКО в список нематериального наследия. В кафе принято сидеть часами за одной чашкой и газетой." },
  { id: "at-4", country: "Österreich", flag: "🇦🇹", title: "Свой немецкий", text: "Австрийский немецкий отличается словами: Paradeiser вместо Tomate, Erdäpfel вместо Kartoffeln, Jänner вместо Januar, Sackerl вместо Tüte." },
  { id: "at-5", country: "Österreich", flag: "🇦🇹", title: "Страна Альп", text: "Около двух третей территории Австрии занимают Альпы. Горнолыжный туризм — одна из важнейших отраслей экономики страны." },
  { id: "ch-1", country: "Schweiz", flag: "🇨🇭", title: "Четыре официальных языка", text: "В Швейцарии четыре государственных языка: немецкий, французский, итальянский и ретороманский. Швейцарский немецкий (Schwiizerdütsch) на слух заметно отличается от Hochdeutsch." },
  { id: "ch-2", country: "Schweiz", flag: "🇨🇭", title: "Самые высокие зарплаты", text: "Швейцария стабильно входит в число стран с самой высокой средней зарплатой в мире — но и цены (особенно аренда и продукты) заметно выше, чем у соседей." },
  { id: "ch-3", country: "Schweiz", flag: "🇨🇭", title: "Прямая демократия", text: "Швейцарцы голосуют на референдумах несколько раз в год — по налогам, транспорту, иммиграции. Граждане могут сами инициировать изменение конституции." },
  { id: "ch-4", country: "Schweiz", flag: "🇨🇭", title: "Без «ß»", text: "В швейцарском варианте немецкого буква «ß» не используется вообще: пишут «Strasse» вместо «Straße» и «gross» вместо «groß»." },
  { id: "li-1", country: "Liechtenstein", flag: "🇱🇮", title: "Крошечная, но богатая страна", text: "Лихтенштейн — одна из самых маленьких стран мира (160 км²), но с одним из самых высоких ВВП на душу населения благодаря финансовому сектору и промышленности." },
  { id: "li-2", country: "Liechtenstein", flag: "🇱🇮", title: "Без собственной валюты", text: "В Лихтенштейне нет своей валюты — там используют швейцарский франк, а таможенный союз со Швейцарией действует с 1924 года." },
];

const DE_SALARIES: SalaryRow[] = [
  { profession: "Программист / IT", professionLocal: "Softwareentwickler", values: [4800, 4200, 8500] },
  { profession: "Врач", professionLocal: "Arzt / Ärztin", values: [6500, 5800, 11000] },
  { profession: "Инженер", professionLocal: "Ingenieur", values: [4900, 4300, 8800] },
  { profession: "Учитель", professionLocal: "Lehrer", values: [4200, 3700, 7500] },
  { profession: "Медсестра/медбрат", professionLocal: "Pflegefachkraft", values: [3400, 3000, 6200] },
  { profession: "Юрист", professionLocal: "Rechtsanwalt", values: [5200, 4500, 9500] },
  { profession: "Бухгалтер", professionLocal: "Buchhalter", values: [3600, 3200, 6500] },
  { profession: "Маркетолог", professionLocal: "Marketingmanager", values: [4300, 3800, 7800] },
  { profession: "Механик/электрик", professionLocal: "Mechatroniker", values: [3300, 2900, 6000] },
  { profession: "Официант", professionLocal: "Kellner", values: [2100, 1900, 4200] },
  { profession: "Продавец", professionLocal: "Verkäufer", values: [2400, 2200, 4500] },
  { profession: "Водитель", professionLocal: "Berufskraftfahrer", values: [2700, 2400, 5200] },
];

// ─────────────────────────────── Английский ─────────────────────────────

const EN_FACTS: CultureFact[] = [
  { id: "uk-1", country: "United Kingdom", flag: "🇬🇧", title: "Четыре нации", text: "Соединённое Королевство состоит из Англии, Шотландии, Уэльса и Северной Ирландии. На футбольных турнирах у каждой — своя сборная." },
  { id: "uk-2", country: "United Kingdom", flag: "🇬🇧", title: "Очередь — святое", text: "Британцы известны любовью к аккуратным очередям (queue). Пролезть без очереди — одно из самых серьёзных нарушений бытового этикета." },
  { id: "uk-3", country: "United Kingdom", flag: "🇬🇧", title: "Левостороннее движение", text: "В Великобритании ездят по левой стороне дороги. Пешеходам на перекрёстках часто подсказывают надписью на асфальте: «Look right»." },
  { id: "uk-4", country: "United Kingdom", flag: "🇬🇧", title: "NHS", text: "Национальная служба здравоохранения (NHS), созданная в 1948 году, — одна из крупнейших бесплатных систем медицины в мире. Для записи к врачу нужно прикрепиться к GP — семейному врачу." },
  { id: "uk-5", country: "United Kingdom", flag: "🇬🇧", title: "Pub culture", text: "Паб — не просто бар, а центр местной жизни. Заказывают у стойки, а в компании принято покупать напитки «по кругу» (buying a round)." },
  { id: "uk-6", country: "United Kingdom", flag: "🇬🇧", title: "Вежливые отказы", text: "Британский английский полон смягчений: «I'm not sure that's a great idea» часто значит «это плохая идея», а «quite good» может звучать сдержанно-критично." },
  { id: "us-1", country: "USA", flag: "🇺🇸", title: "Чаевые обязательны", text: "В США официанты получают основной доход с чаевых, поэтому оставить 15–20% от счёта считается нормой, а не жестом щедрости." },
  { id: "us-2", country: "USA", flag: "🇺🇸", title: "Нет официального языка", text: "На федеральном уровне в США долго не было официального языка; лишь в 2025 году английский объявили официальным указом президента. Испанский — второй по распространённости язык." },
  { id: "us-3", country: "USA", flag: "🇺🇸", title: "Цены без налога", text: "В американских магазинах цена на ценнике обычно без налога с продаж — он добавляется на кассе и различается от штата к штату (в некоторых его нет вовсе)." },
  { id: "us-4", country: "USA", flag: "🇺🇸", title: "Social Security Number", text: "SSN — номер социального страхования — нужен в США почти для всего: работы, банковского счёта, кредитной истории и налогов." },
  { id: "us-5", country: "USA", flag: "🇺🇸", title: "Имперская система мер", text: "США — одна из немногих стран, где в быту используют мили, футы, фунты и градусы Фаренгейта. 70°F — это примерно 21°C." },
  { id: "us-6", country: "USA", flag: "🇺🇸", title: "50 штатов — 50 законов", text: "Штаты сами устанавливают многие законы: минимальную зарплату, налоги, правила получения водительских прав. Права выдаёт DMV конкретного штата." },
  { id: "ca-1", country: "Canada", flag: "🇨🇦", title: "Двуязычная страна", text: "В Канаде два официальных языка — английский и французский. На упаковках товаров и в федеральных учреждениях всё дублируется на обоих." },
  { id: "ca-2", country: "Canada", flag: "🇨🇦", title: "Иммиграция по баллам", text: "Канадская система Express Entry оценивает кандидатов на ПМЖ по баллам: возраст, образование, опыт работы и знание английского/французского (тесты IELTS, CELPIP, TEF)." },
  { id: "ca-3", country: "Canada", flag: "🇨🇦", title: "Самая длинная береговая линия", text: "У Канады самая протяжённая береговая линия в мире — более 200 000 км, если учитывать все острова." },
  { id: "au-1", country: "Australia", flag: "🇦🇺", title: "Сленг на «-ie»", text: "Австралийцы обожают сокращения: brekkie (завтрак), arvo (после обеда), barbie (барбекю), servo (заправка)." },
  { id: "au-2", country: "Australia", flag: "🇦🇺", title: "Обязательное голосование", text: "В Австралии участие в выборах обязательно для граждан старше 18 лет — за неявку без уважительной причины назначают небольшой штраф." },
  { id: "au-3", country: "Australia", flag: "🇦🇺", title: "Рождество летом", text: "В Австралии Рождество приходится на разгар лета, поэтому его часто отмечают барбекю на пляже." },
  { id: "ie-1", country: "Ireland", flag: "🇮🇪", title: "Два языка", text: "В Ирландии официальные языки — ирландский (гэльский) и английский. Дорожные указатели пишутся на обоих, хотя в быту почти везде говорят по-английски." },
  { id: "ie-2", country: "Ireland", flag: "🇮🇪", title: "Европейский IT-хаб", text: "Европейские штаб-квартиры многих технологических гигантов находятся в Дублине — во многом благодаря низкой ставке корпоративного налога." },
  { id: "nz-1", country: "New Zealand", flag: "🇳🇿", title: "Язык маори", text: "Te reo Māori — официальный язык Новой Зеландии наряду с английским и языком жестов. Многие места имеют двойные названия, например Aotearoa — маорийское имя страны." },
];

const EN_SALARIES: SalaryRow[] = [
  { profession: "Программист / IT", professionLocal: "Software developer", values: [4600, 9500, 6200] },
  { profession: "Врач", professionLocal: "Doctor", values: [6500, 17000, 11000] },
  { profession: "Инженер", professionLocal: "Engineer", values: [4000, 7500, 5800] },
  { profession: "Учитель", professionLocal: "Teacher", values: [3300, 5200, 4600] },
  { profession: "Медсестра/медбрат", professionLocal: "Nurse", values: [3000, 6800, 5200] },
  { profession: "Юрист", professionLocal: "Lawyer", values: [5500, 11000, 7500] },
  { profession: "Бухгалтер", professionLocal: "Accountant", values: [3400, 6500, 4500] },
  { profession: "Маркетолог", professionLocal: "Marketing manager", values: [4100, 9000, 5500] },
  { profession: "Электрик", professionLocal: "Electrician", values: [3200, 5300, 4600] },
  { profession: "Официант", professionLocal: "Waiter / Server", values: [1900, 3000, 2400] },
  { profession: "Продавец", professionLocal: "Retail salesperson", values: [2000, 2800, 2500] },
  { profession: "Водитель грузовика", professionLocal: "Truck driver", values: [2900, 4800, 4200] },
];

// ─────────────────────────────── Французский ────────────────────────────

const FR_FACTS: CultureFact[] = [
  { id: "fr-1", country: "France", flag: "🇫🇷", title: "Самая посещаемая страна", text: "Франция уже много лет — самая посещаемая туристами страна мира: ежегодно её посещают около 90–100 миллионов иностранцев." },
  { id: "fr-2", country: "France", flag: "🇫🇷", title: "35-часовая неделя", text: "Законная продолжительность рабочей недели во Франции — 35 часов. Всё, что сверх, оплачивается как сверхурочные или компенсируется днями отдыха (RTT)." },
  { id: "fr-3", country: "France", flag: "🇫🇷", title: "Обед — это важно", text: "Обеденный перерыв во Франции традиционно длится час и больше. Есть за рабочим столом долго считалось дурным тоном, а кафе в обед переполнены." },
  { id: "fr-4", country: "France", flag: "🇫🇷", title: "Багет под защитой", text: "Ремесло выпечки французского багета в 2022 году внесено ЮНЕСКО в список нематериального культурного наследия. Во Франции выпекают миллиарды багетов в год." },
  { id: "fr-5", country: "France", flag: "🇫🇷", title: "Bise — поцелуи при встрече", text: "Друзья и знакомые во Франции здороваются, касаясь щёк (la bise). Количество поцелуев зависит от региона — от одного до четырёх." },
  { id: "fr-6", country: "France", flag: "🇫🇷", title: "Préfecture и titre de séjour", text: "Вид на жительство (titre de séjour) иностранцы оформляют в префектуре. Сейчас почти все заявления подают онлайн через портал ANEF." },
  { id: "fr-7", country: "France", flag: "🇫🇷", title: "CAF и пособие на жильё", text: "Касса семейных пособий (CAF) выплачивает помощь на аренду (APL) даже студентам и иностранцам с ВНЖ — заявление подают онлайн." },
  { id: "fr-8", country: "France", flag: "🇫🇷", title: "Académie française", text: "С 1635 года Французская академия следит за нормами языка и предлагает французские замены англицизмам: courriel вместо e-mail, mot-dièse вместо hashtag." },
  { id: "fr-9", country: "France", flag: "🇫🇷", title: "Сыры на каждый день", text: "Во Франции производят более тысячи сортов сыра. Сырная тарелка подаётся после основного блюда — перед десертом." },
  { id: "fr-10", country: "France", flag: "🇫🇷", title: "Carte Vitale", text: "Carte Vitale — зелёная карта медицинского страхования. С ней большая часть стоимости приёма у врача возмещается автоматически, а остальное часто покрывает дополнительная страховка (mutuelle)." },
  { id: "fr-11", country: "France", flag: "🇫🇷", title: "Август — месяц отпусков", text: "В августе многие французы уходят в отпуск одновременно: Париж пустеет, часть небольших магазинов и пекарен закрывается на несколько недель." },
  { id: "be-1", country: "Belgique", flag: "🇧🇪", title: "Три языка", text: "В Бельгии три официальных языка: нидерландский (Фландрия), французский (Валлония) и немецкий (на востоке). Брюссель официально двуязычен." },
  { id: "be-2", country: "Belgique", flag: "🇧🇪", title: "Septante и nonante", text: "Бельгийцы говорят septante (70) и nonante (90) вместо французских soixante-dix и quatre-vingt-dix — это проще и логичнее." },
  { id: "be-3", country: "Belgique", flag: "🇧🇪", title: "Родина картошки фри", text: "Бельгийцы считают картофель фри (frites) своим изобретением. Его подают в бумажных кульках с майонезом и десятками соусов." },
  { id: "ch-fr-1", country: "Suisse", flag: "🇨🇭", title: "Романдия", text: "Франкоязычная часть Швейцарии называется Романдия (Suisse romande). Женева и Лозанна — её крупнейшие города и центры международных организаций." },
  { id: "ch-fr-2", country: "Suisse", flag: "🇨🇭", title: "Huitante", text: "В некоторых кантонах Романдии (Во, Вале, Фрибур) для числа 80 используют huitante вместо quatre-vingts." },
  { id: "qc-1", country: "Québec", flag: "🇨🇦", title: "Французский — единственный официальный", text: "В канадской провинции Квебек единственный официальный язык — французский. Вывески и коммерческие документы обязаны быть на французском." },
  { id: "qc-2", country: "Québec", flag: "🇨🇦", title: "Квебекские слова", text: "В Квебеке говорят «char» вместо «voiture» (машина), «magasiner» — ходить по магазинам, а «bienvenue» — ответ на «merci»." },
  { id: "lu-1", country: "Luxembourg", flag: "🇱🇺", title: "Трёхъязычие с детства", text: "В Люксембурге в ходу люксембургский, французский и немецкий. Французский — основной язык законодательства и административных документов." },
  { id: "af-1", country: "Afrique francophone", flag: "🌍", title: "Будущее французского — в Африке", text: "Большинство франкоговорящих людей в мире уже живут в Африке. Демографы ожидают, что к 2050 году на ней будет приходиться большая часть носителей французского." },
];

const FR_SALARIES: SalaryRow[] = [
  { profession: "Программист / IT", professionLocal: "Développeur", values: [3700, 4800, 8500] },
  { profession: "Врач", professionLocal: "Médecin", values: [6500, 7500, 11000] },
  { profession: "Инженер", professionLocal: "Ingénieur", values: [4000, 4900, 8800] },
  { profession: "Учитель", professionLocal: "Enseignant", values: [2800, 4000, 7500] },
  { profession: "Медсестра/медбрат", professionLocal: "Infirmier", values: [2600, 3600, 6200] },
  { profession: "Юрист", professionLocal: "Avocat", values: [4500, 5500, 9500] },
  { profession: "Бухгалтер", professionLocal: "Comptable", values: [2800, 3700, 6500] },
  { profession: "Маркетолог", professionLocal: "Responsable marketing", values: [3800, 4500, 7800] },
  { profession: "Электрик", professionLocal: "Électricien", values: [2300, 3200, 6000] },
  { profession: "Официант", professionLocal: "Serveur", values: [1900, 2400, 4200] },
  { profession: "Продавец", professionLocal: "Vendeur", values: [1950, 2500, 4500] },
  { profession: "Водитель", professionLocal: "Chauffeur routier", values: [2300, 3100, 5200] },
];

// Приблизительная средняя валовая (gross) месячная зарплата, округлённо, в евро
// (для США/Канады/Великобритании — в евровом эквиваленте). Ориентир для
// сравнения, не точная статистика.
export const CULTURE_BY_LANGUAGE: Record<Language, CultureBundle> = {
  de: {
    regionLabel: "DACH",
    countries: [
      { name: "Deutschland", flag: "🇩🇪" },
      { name: "Österreich", flag: "🇦🇹" },
      { name: "Schweiz", flag: "🇨🇭" },
      { name: "Liechtenstein", flag: "🇱🇮" },
    ],
    facts: DE_FACTS,
    salaryCountries: [
      { code: "DE", flag: "🇩🇪" },
      { code: "AT", flag: "🇦🇹" },
      { code: "CH", flag: "🇨🇭" },
    ],
    salaries: DE_SALARIES,
  },
  en: {
    regionLabel: "англоязычные страны",
    countries: [
      { name: "United Kingdom", flag: "🇬🇧" },
      { name: "USA", flag: "🇺🇸" },
      { name: "Canada", flag: "🇨🇦" },
      { name: "Australia", flag: "🇦🇺" },
      { name: "Ireland", flag: "🇮🇪" },
      { name: "New Zealand", flag: "🇳🇿" },
    ],
    facts: EN_FACTS,
    salaryCountries: [
      { code: "UK", flag: "🇬🇧" },
      { code: "US", flag: "🇺🇸" },
      { code: "CA", flag: "🇨🇦" },
    ],
    salaries: EN_SALARIES,
  },
  fr: {
    regionLabel: "франкофонные страны",
    countries: [
      { name: "France", flag: "🇫🇷" },
      { name: "Belgique", flag: "🇧🇪" },
      { name: "Suisse", flag: "🇨🇭" },
      { name: "Québec", flag: "🇨🇦" },
      { name: "Luxembourg", flag: "🇱🇺" },
      { name: "Afrique francophone", flag: "🌍" },
    ],
    facts: FR_FACTS,
    salaryCountries: [
      { code: "FR", flag: "🇫🇷" },
      { code: "BE", flag: "🇧🇪" },
      { code: "CH", flag: "🇨🇭" },
    ],
    salaries: FR_SALARIES,
  },
};
