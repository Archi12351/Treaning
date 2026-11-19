import { parseVocab } from "../vocabParse";

// B2–C1: общество, политика, экономика, экология, наука, медиа, история, психология.
export const PART7 = [
  ...parseVocab("gesellschaft", "B2", `
die Politik | политика | Er interessiert sich nicht für Politik. | Он не интересуется политикой.
die Regierung | правительство | Die Regierung plant neue Gesetze. | Правительство планирует новые законы.
der Bundeskanzler | федеральный канцлер | Der Bundeskanzler hält eine Rede. | Федеральный канцлер выступает с речью.
der Bundestag | бундестаг | Der Bundestag hat das Gesetz beschlossen. | Бундестаг принял закон.
die Partei | партия | Welche Partei wählst du? | За какую партию ты голосуешь?
die Wahl | выборы | Die nächste Wahl ist im September. | Следующие выборы в сентябре. | 🗳️
wählen (Politik) | голосовать, избирать | Ab 18 darf man wählen. | С 18 лет можно голосовать.
der Abgeordnete | депутат | Der Abgeordnete vertritt seinen Wahlkreis. | Депутат представляет свой избирательный округ.
die Opposition | оппозиция | Die Opposition kritisiert die Regierung. | Оппозиция критикует правительство.
die Koalition | коалиция | Die Koalition besteht aus drei Parteien. | Коалиция состоит из трёх партий.
die Demokratie | демократия | Deutschland ist eine Demokratie. | Германия — демократия.
die Diktatur | диктатура | Das Land war lange eine Diktatur. | Страна долго была диктатурой.
der Staat | государство | Der Staat finanziert die Schulen. | Государство финансирует школы.
die Gesellschaft (B2) | общество | Die Gesellschaft wird immer älter. | Общество стареет.
die Minderheit | меньшинство | Die Rechte von Minderheiten müssen geschützt werden. | Права меньшинств должны защищаться.
die Mehrheit | большинство | Die Mehrheit hat dagegen gestimmt. | Большинство проголосовало против.
die Gleichberechtigung | равноправие | Gleichberechtigung ist im Grundgesetz verankert. | Равноправие закреплено в Основном законе.
die Diskriminierung | дискриминация | Diskriminierung ist verboten. | Дискриминация запрещена.
der Rassismus | расизм | Wir müssen gegen Rassismus kämpfen. | Мы должны бороться с расизмом.
die Armut | бедность | Armut ist ein großes Problem. | Бедность — большая проблема.
der Wohlstand | благосостояние | Der Wohlstand ist ungleich verteilt. | Благосостояние распределено неравномерно.
die Demonstration | демонстрация | Tausende nahmen an der Demonstration teil. | Тысячи приняли участие в демонстрации.
protestieren | протестовать | Die Bürger protestieren gegen das Gesetz. | Граждане протестуют против закона.
die Rente (Politik) | пенсионная система | Die Rente muss reformiert werden. | Пенсионную систему нужно реформировать.
der Sozialstaat | социальное государство | Der Sozialstaat hilft Bedürftigen. | Социальное государство помогает нуждающимся.
der demografische Wandel | демографические изменения | Der demografische Wandel stellt uns vor Herausforderungen. | Демографические изменения ставят перед нами задачи.
die Globalisierung | глобализация | Die Globalisierung hat Vor- und Nachteile. | У глобализации есть плюсы и минусы.
die Generation | поколение | Die junge Generation denkt anders. | Молодое поколение думает иначе.
#C1
die Gewaltenteilung | разделение властей | Die Gewaltenteilung ist ein Grundprinzip der Demokratie. | Разделение властей — основной принцип демократии.
der Rechtsstaat | правовое государство | Im Rechtsstaat gilt das Gesetz für alle. | В правовом государстве закон действует для всех.
der Föderalismus | федерализм | Der Föderalismus gibt den Ländern viel Macht. | Федерализм даёт землям много власти.
die Bürgerinitiative | гражданская инициатива | Eine Bürgerinitiative kämpft gegen den Neubau. | Гражданская инициатива борется против новостройки.
die Polarisierung | поляризация | Die Polarisierung der Gesellschaft nimmt zu. | Поляризация общества усиливается.
der Populismus | популизм | Populismus vereinfacht komplexe Probleme. | Популизм упрощает сложные проблемы.
die Teilhabe | участие, сопричастность | Soziale Teilhabe ist für alle wichtig. | Социальное участие важно для всех.
die Chancengleichheit | равенство возможностей | Chancengleichheit beginnt in der Schule. | Равенство возможностей начинается в школе.
die Zivilgesellschaft | гражданское общество | Die Zivilgesellschaft spielt eine wichtige Rolle. | Гражданское общество играет важную роль.
die Lobby | лобби | Die Autoindustrie hat eine starke Lobby. | У автопромышленности сильное лобби.
das Wahlrecht | избирательное право | Das Wahlrecht wurde reformiert. | Избирательное право реформировали.
die Legislaturperiode | легислатурный период | Die Legislaturperiode dauert vier Jahre. | Созыв длится четыре года.
`),

  ...parseVocab("wirtschaft", "B2", `
die Wirtschaft | экономика | Die Wirtschaft wächst langsam. | Экономика растёт медленно.
das Unternehmen | предприятие | Das Unternehmen hat 5000 Mitarbeiter. | На предприятии 5000 сотрудников.
der Unternehmer | предприниматель | Er ist ein erfolgreicher Unternehmer. | Он успешный предприниматель.
der Gewinn | прибыль | Die Firma hat einen hohen Gewinn gemacht. | Фирма получила высокую прибыль.
der Verlust | убыток | Das Jahr endete mit einem Verlust. | Год закончился убытком.
die Kosten | расходы, затраты | Die Kosten sind zu hoch. | Расходы слишком высоки.
die Nachfrage | спрос | Die Nachfrage nach E-Autos steigt. | Спрос на электромобили растёт.
das Angebot (Wirtschaft) | предложение | Angebot und Nachfrage bestimmen den Preis. | Спрос и предложение определяют цену.
der Markt (Wirtschaft) | рынок | Das Produkt kommt nächstes Jahr auf den Markt. | Продукт выйдет на рынок в следующем году.
der Export | экспорт | Deutschland lebt vom Export. | Германия живёт за счёт экспорта.
der Import | импорт | Der Import von Öl ist teuer. | Импорт нефти дорог.
der Handel | торговля | Der Handel mit China wächst. | Торговля с Китаем растёт.
die Produktion | производство | Die Produktion wurde ins Ausland verlagert. | Производство перенесли за границу.
die Krise | кризис | Die Firma steckt in der Krise. | Фирма находится в кризисе.
die Rezession | рецессия | Experten befürchten eine Rezession. | Эксперты опасаются рецессии.
das Wachstum | рост | Das Wachstum liegt bei zwei Prozent. | Рост составляет два процента.
die Arbeitslosigkeit | безработица | Die Arbeitslosigkeit ist gesunken. | Безработица снизилась.
der Haushalt (Staat) | бюджет | Der Haushalt für 2026 wurde beschlossen. | Бюджет на 2026 год утверждён.
die Subvention | субсидия | Die Landwirtschaft bekommt Subventionen. | Сельское хозяйство получает субсидии.
die Börse | биржа | An der Börse fallen die Kurse. | На бирже падают курсы.
der Konzern | концерн | Der Konzern übernimmt ein Start-up. | Концерн поглощает стартап.
das Start-up | стартап | Sie hat ein Start-up gegründet. | Она основала стартап.
gründen | основывать | Er hat eine Firma gegründet. | Он основал фирму.
der Lieferant | поставщик | Wir suchen einen neuen Lieferanten. | Мы ищем нового поставщика.
die Lieferkette | цепочка поставок | Die Lieferketten sind unterbrochen. | Цепочки поставок нарушены.
die Investition | инвестиция | Die Investition hat sich gelohnt. | Инвестиция окупилась.
der Preisanstieg | рост цен | Der Preisanstieg trifft vor allem Rentner. | Рост цен бьёт прежде всего по пенсионерам.
die Energiepreise | цены на энергию | Die Energiepreise sind stark gestiegen. | Цены на энергию сильно выросли.
#C1
die Marktwirtschaft | рыночная экономика | Deutschland hat eine soziale Marktwirtschaft. | В Германии социальная рыночная экономика.
das Bruttoinlandsprodukt | валовой внутренний продукт | Das Bruttoinlandsprodukt ist gesunken. | ВВП снизился.
die Fusion | слияние | Die Fusion der beiden Banken ist geplant. | Планируется слияние двух банков.
die Übernahme | поглощение | Die feindliche Übernahme wurde verhindert. | Враждебное поглощение удалось предотвратить.
die Wettbewerbsfähigkeit | конкурентоспособность | Die Wettbewerbsfähigkeit muss gestärkt werden. | Конкурентоспособность нужно укреплять.
der Standort | место расположения (бизнеса) | Deutschland ist ein attraktiver Standort. | Германия — привлекательное место для бизнеса.
die Bilanz | баланс | Die Bilanz des Jahres ist positiv. | Итоги года положительные.
die Abwanderung | отток | Die Abwanderung von Fachkräften ist ein Problem. | Отток специалистов — проблема.
die Deregulierung | дерегулирование | Die Deregulierung des Marktes war umstritten. | Дерегулирование рынка было спорным.
nachhaltig wirtschaften | вести устойчивое хозяйство | Immer mehr Firmen wollen nachhaltig wirtschaften. | Всё больше фирм хотят вести устойчивый бизнес.
`),

  ...parseVocab("umwelt", "B1", `
die Umwelt | окружающая среда | Wir müssen die Umwelt schützen. | Мы должны защищать окружающую среду. | 🌱
der Umweltschutz | защита окружающей среды | Umweltschutz geht uns alle an. | Защита среды касается всех нас.
der Müll trennen | сортировать мусор | In Deutschland trennt man den Müll. | В Германии сортируют мусор. | ♻️
recyceln | перерабатывать | Plastik kann man recyceln. | Пластик можно перерабатывать.
das Plastik | пластик | Wir sollten weniger Plastik benutzen. | Нам следует меньше использовать пластик.
die Verpackung | упаковка | Die Verpackung ist aus Papier. | Упаковка из бумаги.
die Luftverschmutzung | загрязнение воздуха | Die Luftverschmutzung in der Stadt ist hoch. | Загрязнение воздуха в городе высокое.
die Energie | энергия | Wir sparen Energie. | Мы экономим энергию.
die Solarenergie | солнечная энергия | Auf dem Dach haben wir Solarenergie. | На крыше у нас солнечные панели. | ☀️
die Windkraft | энергия ветра | Windkraft ist eine erneuerbare Energie. | Энергия ветра — возобновляемая энергия.
das Kraftwerk | электростанция | Das Kraftwerk wird abgeschaltet. | Электростанцию отключают.
der Atomausstieg | отказ от атомной энергии | Deutschland hat den Atomausstieg beschlossen. | Германия решила отказаться от атомной энергии.
die Kohle | уголь | Kohle ist schlecht fürs Klima. | Уголь вреден для климата.
das Abgas | выхлопной газ | Die Abgase der Autos verschmutzen die Luft. | Выхлопы машин загрязняют воздух.
der Treibhauseffekt | парниковый эффект | Der Treibhauseffekt erwärmt die Erde. | Парниковый эффект нагревает Землю.
das Aussterben | вымирание | Viele Arten sind vom Aussterben bedroht. | Многим видам грозит вымирание.
die Dürre | засуха | Die Dürre zerstört die Ernte. | Засуха губит урожай.
der Waldbrand | лесной пожар | Im Sommer gab es viele Waldbrände. | Летом было много лесных пожаров.
das Hochwasser | паводок | Das Hochwasser hat die Stadt überflutet. | Паводок затопил город.
#B2
die Nachhaltigkeit | устойчивость (экологическая) | Nachhaltigkeit ist ein wichtiges Thema. | Устойчивое развитие — важная тема.
klimaneutral | климатически нейтральный | Die Stadt will bis 2035 klimaneutral sein. | Город хочет стать климатически нейтральным к 2035 году.
der ökologische Fußabdruck | экологический след | Wir wollen unseren ökologischen Fußabdruck verringern. | Мы хотим уменьшить свой экологический след.
die Energiewende | энергетический поворот | Die Energiewende kostet viel Geld. | Энергетический переход стоит много денег.
der Emissionshandel | торговля квотами на выбросы | Der Emissionshandel soll den CO2-Ausstoß senken. | Торговля квотами должна снизить выбросы CO2.
die Wärmepumpe | тепловой насос | Wir heizen mit einer Wärmepumpe. | Мы отапливаемся тепловым насосом.
die Mehrwegflasche | многоразовая бутылка | Mehrwegflaschen sind umweltfreundlich. | Многоразовые бутылки экологичны.
die Einwegflasche | одноразовая бутылка | Einwegflaschen erzeugen viel Müll. | Одноразовые бутылки дают много мусора.
der Biomüll | пищевые отходы | Kartoffelschalen gehören in den Biomüll. | Картофельные очистки идут в пищевые отходы.
der Klimaschutz | защита климата | Der Klimaschutz muss Vorrang haben. | Защита климата должна иметь приоритет.
die Abholzung | вырубка лесов | Die Abholzung des Regenwaldes geht weiter. | Вырубка тропических лесов продолжается.
die Ressourcenknappheit | нехватка ресурсов | Ressourcenknappheit führt zu Konflikten. | Нехватка ресурсов приводит к конфликтам.
`),

  ...parseVocab("technik", "B2", `
die Technik | техника | Die Technik entwickelt sich schnell. | Техника быстро развивается.
die Technologie | технология | Neue Technologien verändern die Arbeit. | Новые технологии меняют работу.
die Wissenschaft | наука | Die Wissenschaft hat große Fortschritte gemacht. | Наука сделала большие успехи. | 🔬
der Wissenschaftler | учёный | Die Wissenschaftler forschen an einem Impfstoff. | Учёные работают над вакциной.
das Experiment | эксперимент | Das Experiment war erfolgreich. | Эксперимент прошёл успешно.
die Entdeckung | открытие | Das war eine wichtige Entdeckung. | Это было важное открытие.
entdecken | открывать | Wer hat Amerika entdeckt? | Кто открыл Америку?
erfinden | изобретать | Wer hat das Telefon erfunden? | Кто изобрёл телефон?
der Fortschritt | прогресс | Der technische Fortschritt ist enorm. | Технический прогресс огромен.
die Entwicklung | развитие, разработка | Die Entwicklung des Produkts dauerte drei Jahre. | Разработка продукта заняла три года.
das Gerät | прибор | Das Gerät ist leicht zu bedienen. | Прибор прост в обращении.
bedienen | управлять, обслуживать | Wie bedient man diese Maschine? | Как управлять этой машиной?
die Maschine | машина, механизм | Die Maschine läuft rund um die Uhr. | Машина работает круглосуточно.
der Roboter | робот | Roboter übernehmen viele Aufgaben. | Роботы берут на себя многие задачи. | 🤖
die Automatisierung | автоматизация | Die Automatisierung ersetzt Arbeitsplätze. | Автоматизация заменяет рабочие места.
die Digitalisierung | цифровизация | Die Digitalisierung der Verwaltung kommt langsam voran. | Цифровизация управления продвигается медленно.
die Software | программное обеспечение | Die Software muss aktualisiert werden. | Программу нужно обновить.
die Hardware | аппаратное обеспечение | Die Hardware ist veraltet. | Оборудование устарело.
programmieren | программировать | Er kann gut programmieren. | Он хорошо программирует.
die Daten | данные | Die Daten werden in der Cloud gespeichert. | Данные хранятся в облаке.
die Raumfahrt | космонавтика | Die Raumfahrt ist sehr teuer. | Космонавтика очень дорогая. | 🚀
der Satellit | спутник | Der Satellit kreist um die Erde. | Спутник вращается вокруг Земли. | 🛰️
#C1
die Gentechnik | генная инженерия | Die Gentechnik ist umstritten. | Генная инженерия — спорная тема.
die Quantenphysik | квантовая физика | Die Quantenphysik ist schwer zu verstehen. | Квантовую физику трудно понять.
die Hypothese | гипотеза | Die Hypothese wurde bestätigt. | Гипотеза подтвердилась.
die Studie | исследование | Laut einer Studie schlafen wir zu wenig. | Согласно исследованию, мы слишком мало спим.
das Patent | патент | Die Firma hat ein Patent angemeldet. | Фирма подала заявку на патент.
die Cybersicherheit | кибербезопасность | Cybersicherheit wird immer wichtiger. | Кибербезопасность становится всё важнее.
das maschinelle Lernen | машинное обучение | Maschinelles Lernen wird in der Medizin eingesetzt. | Машинное обучение применяют в медицине.
das Sprachmodell | языковая модель | Das Sprachmodell beantwortet Fragen auf Deutsch. | Языковая модель отвечает на вопросы по-немецки.
die Innovation | инновация | Innovationen sichern die Zukunft. | Инновации обеспечивают будущее.
`),

  ...parseVocab("medien", "B1", `
die Zeitung | газета | Ich lese jeden Morgen die Zeitung. | Я каждое утро читаю газету. | 📰
die Zeitschrift | журнал | Sie liest eine Modezeitschrift. | Она читает модный журнал.
die Nachrichten | новости | Hast du die Nachrichten gesehen? | Ты видел новости?
der Artikel | статья | Ich habe einen interessanten Artikel gelesen. | Я прочитал интересную статью.
die Schlagzeile | заголовок | Die Schlagzeile ist reißerisch. | Заголовок кричащий.
der Journalist | журналист | Der Journalist interviewt den Minister. | Журналист берёт интервью у министра.
das Interview | интервью | Das Interview wurde im Radio gesendet. | Интервью передали по радио.
das Radio | радио | Im Auto höre ich Radio. | В машине я слушаю радио. | 📻
die Sendung | передача | Die Sendung beginnt um 20 Uhr. | Передача начинается в 20 часов.
der Sender | телеканал, радиостанция | Auf welchem Sender läuft das Spiel? | На каком канале идёт матч?
die Werbung | реклама | Im Fernsehen gibt es zu viel Werbung. | По телевизору слишком много рекламы.
der Podcast | подкаст | Ich höre einen Podcast über Geschichte. | Я слушаю подкаст об истории. | 🎙️
das Abonnement | подписка | Ich habe ein Abonnement für die Zeitung. | У меня подписка на газету.
#B2
die Pressefreiheit | свобода прессы | Pressefreiheit ist ein Grundrecht. | Свобода прессы — основное право.
die Fake News | фейковые новости | Fake News verbreiten sich schnell. | Фейки распространяются быстро.
der Influencer | инфлюенсер | Der Influencer hat eine Million Follower. | У инфлюенсера миллион подписчиков.
die Meinungsbildung | формирование мнения | Medien spielen bei der Meinungsbildung eine wichtige Rolle. | Медиа играют важную роль в формировании мнения.
die Manipulation | манипуляция | Das ist reine Manipulation. | Это чистая манипуляция.
die Medienkompetenz | медиаграмотность | Kinder brauchen Medienkompetenz. | Детям нужна медиаграмотность.
der Kommentar | комментарий | Der Kommentar in der Zeitung ist sehr kritisch. | Комментарий в газете очень критичный.
die Auflage | тираж | Die Zeitung hat eine hohe Auflage. | У газеты большой тираж.
die Boulevardpresse | жёлтая пресса | Die Boulevardpresse liebt Skandale. | Жёлтая пресса обожает скандалы.
der Algorithmus (Medien) | алгоритм (соцсетей) | Der Algorithmus zeigt uns nur ähnliche Inhalte. | Алгоритм показывает нам только похожий контент.
die Filterblase | информационный пузырь | In der Filterblase sehen wir nur unsere Meinung. | В информационном пузыре мы видим лишь своё мнение.
`),

  ...parseVocab("geschichte", "B2", `
die Geschichte | история | Die Geschichte der Stadt ist spannend. | История города увлекательна. | 📜
das Mittelalter | Средневековье | Die Burg stammt aus dem Mittelalter. | Крепость относится к Средневековью.
die Antike | античность | In der Antike war Rom sehr mächtig. | В античности Рим был очень могущественным.
der Krieg | война | Der Krieg dauerte sechs Jahre. | Война длилась шесть лет.
der Frieden | мир | Wir wünschen uns Frieden. | Мы желаем мира. | 🕊️
der Zweite Weltkrieg | Вторая мировая война | Der Zweite Weltkrieg endete 1945. | Вторая мировая война закончилась в 1945 году.
die Mauer | стена | Die Berliner Mauer fiel 1989. | Берлинская стена пала в 1989 году.
die Wiedervereinigung | воссоединение | Die Wiedervereinigung war 1990. | Воссоединение произошло в 1990 году.
die DDR | ГДР | Meine Eltern sind in der DDR aufgewachsen. | Мои родители выросли в ГДР.
die Teilung | раздел, разделение | Die Teilung Deutschlands dauerte über 40 Jahre. | Раздел Германии длился более 40 лет.
der Kaiser | император | Der Kaiser regierte das Reich. | Император правил империей.
der König | король | Der König lebte im Schloss. | Король жил во дворце. | 👑
das Reich | империя, царство | Das Römische Reich war riesig. | Римская империя была огромной.
die Revolution | революция | Die Revolution veränderte das Land. | Революция изменила страну.
die Epoche (Geschichte) | эпоха | In welcher Epoche lebte er? | В какую эпоху он жил?
die Reformation | Реформация | Luther begann 1517 die Reformation. | Лютер начал Реформацию в 1517 году.
die Aufklärung | Просвещение | Kant ist ein wichtiger Philosoph der Aufklärung. | Кант — важный философ эпохи Просвещения.
die Industrialisierung | индустриализация | Die Industrialisierung veränderte die Gesellschaft. | Индустриализация изменила общество.
das Denkmal (Geschichte) | памятник | Das Denkmal erinnert an die Opfer. | Памятник напоминает о жертвах.
die Erinnerungskultur | культура памяти | Die Erinnerungskultur ist in Deutschland sehr wichtig. | Культура памяти очень важна в Германии.
#C1
der Nationalsozialismus | национал-социализм | Der Nationalsozialismus führte zur Katastrophe. | Национал-социализм привёл к катастрофе.
die Aufarbeitung | осмысление (прошлого) | Die Aufarbeitung der Vergangenheit dauert an. | Осмысление прошлого продолжается.
der Kalte Krieg | холодная война | Im Kalten Krieg war Berlin geteilt. | Во время холодной войны Берлин был разделён.
die Zeitzeugen | очевидцы эпохи | Zeitzeugen erzählen von ihren Erlebnissen. | Очевидцы рассказывают о пережитом.
die Besatzung | оккупация | Nach dem Krieg gab es vier Besatzungszonen. | После войны было четыре оккупационные зоны.
der Wendepunkt | поворотный момент | 1989 war ein Wendepunkt in der Geschichte. | 1989 год стал поворотным моментом истории.
`),

  ...parseVocab("psychologie", "C1", `
#B2
die Psyche | психика | Stress belastet die Psyche. | Стресс нагружает психику.
der Psychologe | психолог | Sie geht regelmäßig zum Psychologen. | Она регулярно ходит к психологу.
die Therapie | терапия | Die Therapie hat ihr sehr geholfen. | Терапия ей очень помогла.
die Depression | депрессия | Er leidet unter Depressionen. | Он страдает от депрессии.
die Angststörung | тревожное расстройство | Angststörungen sind weit verbreitet. | Тревожные расстройства широко распространены.
das Burnout | эмоциональное выгорание | Nach dem Burnout hat er die Stelle gewechselt. | После выгорания он сменил работу.
das Selbstbewusstsein | уверенность в себе | Sie hat ein starkes Selbstbewusstsein. | У неё большая уверенность в себе.
das Selbstwertgefühl | самооценка | Lob stärkt das Selbstwertgefühl. | Похвала укрепляет самооценку.
die Motivation | мотивация | Mir fehlt heute die Motivation. | Мне сегодня не хватает мотивации.
das Verhalten | поведение | Sein Verhalten ist merkwürdig. | Его поведение странное.
die Gewohnheit | привычка | Das ist eine schlechte Gewohnheit. | Это плохая привычка.
die Stimmung | настроение | Die Stimmung auf der Party war toll. | Настроение на вечеринке было отличным.
#C1
das Unterbewusstsein | подсознание | Träume kommen aus dem Unterbewusstsein. | Сны приходят из подсознания.
die Wahrnehmung | восприятие | Die Wahrnehmung ist subjektiv. | Восприятие субъективно.
die Verdrängung | вытеснение (психол.) | Verdrängung ist ein Schutzmechanismus. | Вытеснение — защитный механизм.
die Resilienz | устойчивость (психологическая) | Resilienz hilft, Krisen zu überstehen. | Устойчивость помогает переживать кризисы.
die Achtsamkeit | осознанность | Achtsamkeit reduziert Stress. | Осознанность снижает стресс.
die Empathie | эмпатия | Gute Ärzte zeigen Empathie. | Хорошие врачи проявляют эмпатию.
die Prägung | формирование, отпечаток (влияние) | Die frühe Prägung beeinflusst das ganze Leben. | Ранние впечатления влияют на всю жизнь.
die Bewältigung | преодоление | Die Bewältigung von Stress ist erlernbar. | Справляться со стрессом можно научиться.
die Hemmschwelle | психологический барьер | Die Hemmschwelle, Hilfe zu holen, ist hoch. | Барьер обратиться за помощью высок.
der Zwiespalt | внутренний конфликт | Sie befindet sich in einem inneren Zwiespalt. | Она переживает внутренний конфликт.
die Überforderung | перегрузка | Überforderung führt oft zu Stress. | Перегрузка часто ведёт к стрессу.
die Selbstreflexion | саморефлексия | Selbstreflexion hilft bei der Entwicklung. | Саморефлексия помогает развиваться.
`),

  ...parseVocab("religion_philosophie", "C1", `
#B1
die Religion | религия | In Deutschland herrscht Religionsfreiheit. | В Германии свобода вероисповедания.
der Glaube | вера | Der Glaube gibt ihr Kraft. | Вера даёт ей силы.
beten | молиться | Sie betet jeden Abend. | Она молится каждый вечер. | 🙏
die Moschee | мечеть | Die Moschee ist neu gebaut. | Мечеть недавно построена. | 🕌
die Synagoge | синагога | Die Synagoge wurde renoviert. | Синагогу отремонтировали.
evangelisch | евангелический | Er ist evangelisch. | Он протестант.
katholisch | католический | Bayern ist überwiegend katholisch. | Бавария преимущественно католическая.
#C1
die Philosophie | философия | Sie studiert Philosophie. | Она изучает философию.
die Ethik | этика | Die Ethik der KI ist ein wichtiges Thema. | Этика ИИ — важная тема.
die Moral | мораль | Das ist eine Frage der Moral. | Это вопрос морали.
das Gewissen | совесть | Ich habe ein schlechtes Gewissen. | У меня нечиста совесть.
die Vernunft | разум | Er handelt nach Vernunft. | Он действует разумно.
die Freiheit | свобода | Freiheit ist ein hohes Gut. | Свобода — высшая ценность.
die Würde | достоинство | Die Würde des Menschen ist unantastbar. | Достоинство человека неприкосновенно.
der Sinn des Lebens | смысл жизни | Was ist der Sinn des Lebens? | В чём смысл жизни?
die Weltanschauung | мировоззрение | Jeder hat seine eigene Weltanschauung. | У каждого своё мировоззрение.
die Toleranz | терпимость | Toleranz ist die Basis des Zusammenlebens. | Терпимость — основа совместной жизни.
die Säkularisierung | секуляризация | Die Säkularisierung der Gesellschaft schreitet voran. | Секуляризация общества продолжается.
die Erkenntnistheorie | теория познания | Kant hat die Erkenntnistheorie geprägt. | Кант сформировал теорию познания.
das Dilemma | дилемма | Das ist ein moralisches Dilemma. | Это моральная дилемма.
die Tugend | добродетель | Geduld ist eine Tugend. | Терпение — добродетель.
`),
];
