import { parseVocab } from "../vocabParse";

// Здоровье, спорт, транспорт, путешествия, связь.
export const PART4 = [
  ...parseVocab("arzt_krankheit", "A2", `
die Arztpraxis | врачебный кабинет, практика | Die Arztpraxis öffnet um acht. | Кабинет врача открывается в восемь.
der Hausarzt | семейный врач | Ich gehe zu meinem Hausarzt. | Я иду к своему семейному врачу.
der Zahnarzt | стоматолог | Ich habe morgen einen Termin beim Zahnarzt. | Завтра у меня приём у стоматолога. | 🦷
der Kinderarzt | педиатр | Der Kinderarzt untersucht das Baby. | Педиатр осматривает малыша.
der Frauenarzt | гинеколог | Sie hat einen Termin beim Frauenarzt. | У неё приём у гинеколога.
der Augenarzt | окулист | Der Augenarzt hat mir eine Brille verschrieben. | Окулист выписал мне очки.
das Wartezimmer | приёмная | Bitte nehmen Sie im Wartezimmer Platz. | Пожалуйста, подождите в приёмной.
die Sprechstunde | приёмные часы | Die Sprechstunde ist von 8 bis 12 Uhr. | Приём с 8 до 12 часов.
die Versichertenkarte | карта медстрахования | Haben Sie Ihre Versichertenkarte dabei? | У вас с собой страховая карта?
das Fieber | температура, жар | Das Kind hat hohes Fieber. | У ребёнка высокая температура. | 🤒
der Husten | кашель | Ich habe seit einer Woche Husten. | У меня уже неделю кашель.
der Schnupfen | насморк | Ich habe Schnupfen. | У меня насморк.
die Grippe | грипп | Er liegt mit Grippe im Bett. | Он лежит в постели с гриппом.
die Kopfschmerzen | головная боль | Ich habe starke Kopfschmerzen. | У меня сильно болит голова.
die Halsschmerzen | боль в горле | Gegen Halsschmerzen hilft Tee. | От боли в горле помогает чай.
die Bauchschmerzen | боль в животе | Das Kind hat Bauchschmerzen. | У ребёнка болит живот.
wehtun | болеть (о части тела) | Mein Rücken tut weh. | У меня болит спина.
der Schwindel | головокружение | Ich habe oft Schwindel. | У меня часто кружится голова.
die Übelkeit | тошнота | Nach dem Essen hatte ich Übelkeit. | После еды меня тошнило. | 🤢
sich übergeben | рвать (о рвоте) | Das Kind hat sich übergeben. | Ребёнка вырвало.
der Durchfall | диарея | Sie hat seit gestern Durchfall. | У неё со вчерашнего дня диарея.
die Verletzung | травма | Die Verletzung ist nicht schlimm. | Травма несерьёзная.
die Wunde | рана | Die Wunde muss genäht werden. | Рану нужно зашить.
das Pflaster | пластырь | Hast du ein Pflaster? | У тебя есть пластырь? | 🩹
der Verband | повязка | Der Arzt legt einen Verband an. | Врач накладывает повязку.
gebrochen | сломанный | Sein Arm ist gebrochen. | У него сломана рука.
das Rezept (Arzt) | рецепт (врача) | Für dieses Medikament brauchen Sie ein Rezept. | На это лекарство нужен рецепт.
das Medikament | лекарство | Nehmen Sie das Medikament dreimal täglich. | Принимайте лекарство три раза в день. | 💊
die Salbe | мазь | Die Salbe hilft gegen den Juckreiz. | Мазь помогает от зуда.
die Tropfen | капли | Nehmen Sie zehn Tropfen vor dem Schlafen. | Принимайте десять капель перед сном.
verschreiben | выписывать (лекарство) | Der Arzt verschreibt mir Antibiotika. | Врач выписывает мне антибиотики.
untersuchen | обследовать | Der Arzt untersucht den Patienten. | Врач осматривает пациента.
der Patient | пациент | Der Patient wartet schon. | Пациент уже ждёт.
die Krankmeldung | больничный лист | Ich brauche eine Krankmeldung für meinen Arbeitgeber. | Мне нужен больничный для работодателя.
krankgeschrieben sein | быть на больничном | Ich bin bis Freitag krankgeschrieben. | Я на больничном до пятницы.
der Notarzt | врач скорой помощи | Rufen Sie sofort den Notarzt! | Немедленно вызовите скорую! | 🚑
#B1
die Notaufnahme | приёмный покой | Wir sind in die Notaufnahme gefahren. | Мы поехали в приёмный покой.
die Überweisung (Arzt) | направление | Für den Facharzt brauchen Sie eine Überweisung. | К специалисту нужно направление.
der Facharzt | врач-специалист | Er hat mich zum Facharzt geschickt. | Он направил меня к специалисту.
die Blutuntersuchung | анализ крови | Morgen habe ich eine Blutuntersuchung. | Завтра у меня анализ крови.
der Blutdruck | кровяное давление | Ihr Blutdruck ist zu hoch. | У вас слишком высокое давление.
die Operation | операция | Die Operation ist gut verlaufen. | Операция прошла хорошо.
die Spritze | укол, шприц | Die Spritze tut kaum weh. | Укол почти не больно. | 💉
die Behandlung | лечение | Die Behandlung dauert zwei Wochen. | Лечение длится две недели.
behandeln | лечить | Welcher Arzt behandelt Sie? | Какой врач вас лечит?
die Entzündung | воспаление | Sie haben eine Entzündung im Hals. | У вас воспаление горла.
die Infektion | инфекция | Das ist eine Virusinfektion. | Это вирусная инфекция.
ansteckend | заразный | Die Krankheit ist sehr ansteckend. | Болезнь очень заразна.
die Erkrankung | заболевание | Er hat eine schwere Erkrankung. | У него тяжёлое заболевание.
der Zucker (Diabetes) | диабет (разг.) | Mein Vater hat Zucker. | У моего отца диабет.
das Gewicht | вес | Achten Sie auf Ihr Gewicht. | Следите за своим весом.
die Physiotherapie | физиотерапия | Nach der OP brauche ich Physiotherapie. | После операции мне нужна физиотерапия.
die Allergie gegen | аллергия на | Haben Sie Allergien gegen Medikamente? | У вас есть аллергия на лекарства?
schwanger sein | быть беременной | Sind Sie schwanger? | Вы беременны?
der Beipackzettel | инструкция к лекарству | Lesen Sie den Beipackzettel genau. | Внимательно прочитайте инструкцию.
die Zuzahlung | доплата (в аптеке) | Die Zuzahlung beträgt fünf Euro. | Доплата составляет пять евро.
#B2
die Vorerkrankung | ранее перенесённое заболевание | Haben Sie Vorerkrankungen? | У вас есть хронические заболевания?
die Unverträglichkeit | непереносимость | Ich habe eine Laktoseunverträglichkeit. | У меня непереносимость лактозы.
die Reha | реабилитация | Nach dem Unfall war er drei Wochen in der Reha. | После аварии он три недели был на реабилитации.
die Schwerbehinderung | инвалидность (тяжёлая) | Sie hat einen Ausweis für Schwerbehinderung. | У неё удостоверение инвалида.
`),

  ...parseVocab("apotheke_hygiene", "A2", `
die Apotheke (A2) | аптека | Die Apotheke hat bis 20 Uhr geöffnet. | Аптека открыта до 20 часов.
die Schmerztablette | обезболивающая таблетка | Haben Sie eine Schmerztablette? | У вас есть обезболивающее?
der Hustensaft | сироп от кашля | Dieser Hustensaft schmeckt gut. | Этот сироп от кашля приятный на вкус.
das Nasenspray | спрей для носа | Ich brauche ein Nasenspray. | Мне нужен спрей для носа.
das Thermometer | градусник | Wo ist das Thermometer? | Где градусник? | 🌡️
die Zahnbürste | зубная щётка | Ich habe meine Zahnbürste vergessen. | Я забыл зубную щётку. | 🪥
die Zahnpasta | зубная паста | Die Zahnpasta ist alle. | Зубная паста закончилась.
die Seife | мыло | Wasch dir die Hände mit Seife. | Помой руки с мылом. | 🧼
das Shampoo | шампунь | Das Shampoo riecht gut. | Шампунь хорошо пахнет.
das Duschgel | гель для душа | Ich kaufe ein neues Duschgel. | Я покупаю новый гель для душа.
die Creme | крем | Die Creme ist für trockene Haut. | Крем для сухой кожи. | 🧴
die Sonnencreme | солнцезащитный крем | Vergiss die Sonnencreme nicht! | Не забудь солнцезащитный крем!
das Toilettenpapier | туалетная бумага | Wir brauchen Toilettenpapier. | Нам нужна туалетная бумага. | 🧻
das Taschentuch | носовой платок | Hast du ein Taschentuch? | У тебя есть платок?
der Kamm | расчёска | Mein Kamm ist weg. | Моя расчёска пропала.
der Rasierer | бритва | Er benutzt einen elektrischen Rasierer. | Он пользуется электробритвой.
das Deo | дезодорант | Ich habe mein Deo vergessen. | Я забыл дезодорант.
die Kopfschmerztablette | таблетка от головной боли | Nimm eine Kopfschmerztablette. | Прими таблетку от головы.
rezeptfrei | без рецепта | Ist das Medikament rezeptfrei? | Это лекарство без рецепта?
verschreibungspflichtig | рецептурный | Antibiotika sind verschreibungspflichtig. | Антибиотики отпускаются по рецепту.
die Nebenwirkung (A2) | побочное действие | Hat das Medikament Nebenwirkungen? | У лекарства есть побочные эффекты?
die Notdienst-Apotheke | дежурная аптека | Am Sonntag hat nur die Notdienst-Apotheke offen. | В воскресенье открыта только дежурная аптека.
`),

  ...parseVocab("sport", "A2", `
der Sport | спорт | Ich mache dreimal pro Woche Sport. | Я занимаюсь спортом три раза в неделю.
Fußball spielen | играть в футбол | Wir spielen am Samstag Fußball. | В субботу мы играем в футбол. | ⚽
Tennis spielen | играть в теннис | Sie spielt gut Tennis. | Она хорошо играет в теннис. | 🎾
Basketball | баскетбол | Basketball ist in den USA sehr beliebt. | Баскетбол очень популярен в США. | 🏀
Volleyball | волейбол | Am Strand spielen wir Volleyball. | На пляже мы играем в волейбол. | 🏐
joggen | бегать трусцой | Ich jogge jeden Morgen im Park. | Я каждое утро бегаю в парке.
Rad fahren | кататься на велосипеде | Wir fahren am Wochenende Rad. | На выходных мы катаемся на велосипедах. | 🚴
Ski fahren | кататься на лыжах | Im Winter fahren wir Ski. | Зимой мы катаемся на лыжах. | ⛷️
Schlittschuh laufen | кататься на коньках | Die Kinder laufen Schlittschuh. | Дети катаются на коньках. | ⛸️
klettern | лазать, заниматься скалолазанием | Er klettert gern in den Bergen. | Он любит лазать по горам. | 🧗
reiten | ездить верхом | Meine Tochter reitet seit Jahren. | Моя дочь много лет занимается верховой ездой. | 🏇
segeln | ходить под парусом | Im Sommer segeln wir auf dem See. | Летом мы ходим под парусом по озеру. | ⛵
das Fitnessstudio | фитнес-клуб | Ich gehe zweimal pro Woche ins Fitnessstudio. | Я хожу в спортзал два раза в неделю. | 🏋️
trainieren | тренироваться | Wir trainieren jeden Dienstag. | Мы тренируемся каждый вторник.
das Training | тренировка | Das Training war hart. | Тренировка была тяжёлой.
der Trainer | тренер | Der Trainer ist sehr streng. | Тренер очень строгий.
das Spiel (Sport) | матч, игра | Das Spiel endete unentschieden. | Матч закончился вничью.
das Tor | гол; ворота | Er hat ein Tor geschossen. | Он забил гол. | 🥅
der Ball | мяч | Der Ball ist im Netz. | Мяч в сетке.
der Spieler | игрок | Er ist der beste Spieler der Mannschaft. | Он лучший игрок команды.
der Sieg | победа | Das war ein wichtiger Sieg. | Это была важная победа.
die Niederlage | поражение | Nach der Niederlage waren alle traurig. | После поражения все были грустными.
verlieren (Spiel) | проигрывать | Wir haben 1:2 verloren. | Мы проиграли 1:2.
unentschieden | вничью | Das Spiel steht unentschieden. | Счёт ничейный.
das Stadion | стадион | Das Stadion ist ausverkauft. | Стадион распродан. | 🏟️
die Meisterschaft | чемпионат | Wer gewinnt die Meisterschaft? | Кто выиграет чемпионат?
die Weltmeisterschaft | чемпионат мира | Deutschland hat die Weltmeisterschaft viermal gewonnen. | Германия выигрывала чемпионат мира четыре раза.
die Medaille | медаль | Sie hat eine Goldmedaille gewonnen. | Она выиграла золотую медаль. | 🥇
der Wettkampf | соревнование | Morgen ist ein wichtiger Wettkampf. | Завтра важное соревнование.
fit | в хорошей форме | Ich will fit bleiben. | Я хочу оставаться в форме.
sportlich | спортивный | Er ist sehr sportlich. | Он очень спортивный.
der Fan | болельщик | Die Fans singen im Stadion. | Болельщики поют на стадионе.
#B1
die Ausdauer | выносливость | Für den Marathon braucht man Ausdauer. | Для марафона нужна выносливость.
der Muskel | мышца | Nach dem Training tun mir die Muskeln weh. | После тренировки у меня болят мышцы.
der Muskelkater | крепатура | Ich habe heute Muskelkater. | У меня сегодня болят мышцы после тренировки.
sich aufwärmen | разминаться | Vor dem Laufen muss man sich aufwärmen. | Перед бегом нужно размяться.
der Schiedsrichter | судья (спорт) | Der Schiedsrichter pfeift das Spiel ab. | Судья даёт финальный свисток.
der Rekord | рекорд | Sie hat einen neuen Rekord aufgestellt. | Она установила новый рекорд.
die Olympischen Spiele | Олимпийские игры | Die Olympischen Spiele finden alle vier Jahre statt. | Олимпийские игры проходят каждые четыре года.
der Sportverein | спортивный клуб | Er ist Mitglied im Sportverein. | Он член спортивного клуба.
`),

  ...parseVocab("verkehr", "A1", `
das Fahrrad (A1) | велосипед | Ich fahre mit dem Fahrrad zur Arbeit. | Я езжу на работу на велосипеде. | 🚲
zu Fuß gehen | идти пешком | Ich gehe zu Fuß nach Hause. | Я иду домой пешком. | 🚶
der Bahnhof (A1) | вокзал | Wie komme ich zum Bahnhof? | Как пройти к вокзалу?
der Flughafen (A1) | аэропорт | Der Flughafen ist weit weg. | Аэропорт далеко.
das Schiff | корабль | Wir fahren mit dem Schiff nach Schweden. | Мы плывём на корабле в Швецию. | 🚢
die Fähre | паром | Die Fähre fährt jede Stunde. | Паром ходит каждый час. | ⛴️
der Fahrplan | расписание | Wo finde ich den Fahrplan? | Где найти расписание?
das Gleis | путь, платформа | Der Zug fährt von Gleis 3 ab. | Поезд отправляется с третьего пути.
der Bahnsteig | перрон | Wir warten auf dem Bahnsteig. | Мы ждём на перроне.
die Abfahrt | отправление | Die Abfahrt ist um 10 Uhr. | Отправление в 10 часов.
die Ankunft | прибытие | Die Ankunft ist um 12 Uhr. | Прибытие в 12 часов.
#A2
die Verbindung | маршрут, сообщение | Gibt es eine direkte Verbindung nach Berlin? | Есть ли прямой рейс до Берлина?
der Fahrkartenautomat | билетный автомат | Der Fahrkartenautomat nimmt keine Scheine. | Билетный автомат не принимает купюры.
die Monatskarte | проездной на месяц | Ich habe eine Monatskarte. | У меня месячный проездной.
die Einzelfahrkarte | разовый билет | Eine Einzelfahrkarte kostet drei Euro. | Разовый билет стоит три евро.
entwerten | компостировать | Sie müssen die Fahrkarte entwerten. | Вам нужно прокомпостировать билет.
der Schaffner | кондуктор | Der Schaffner kontrolliert die Fahrkarten. | Кондуктор проверяет билеты.
die Durchsage | объявление (по громкой связи) | Haben Sie die Durchsage verstanden? | Вы поняли объявление?
der Anschluss | пересадка, стыковка | Ich habe meinen Anschluss verpasst. | Я опоздал на пересадку.
verpassen | пропускать, опаздывать | Ich habe den Bus verpasst. | Я опоздал на автобус.
die Hin- und Rückfahrt | поездка туда и обратно | Eine Hin- und Rückfahrt nach Hamburg, bitte. | Билет туда и обратно до Гамбурга, пожалуйста.
der Fahrgast | пассажир | Die Fahrgäste steigen aus. | Пассажиры выходят.
der Fahrer | водитель | Der Fahrer hält an. | Водитель останавливается.
parken | парковаться | Hier dürfen Sie nicht parken. | Здесь нельзя парковаться. | 🅿️
der Parkplatz | парковка | Ich suche einen Parkplatz. | Я ищу парковку.
das Parkhaus | многоэтажная парковка | Das Parkhaus ist voll. | Парковка заполнена.
tanken | заправляться | Ich muss noch tanken. | Мне ещё нужно заправиться.
die Autobahn | автобан | Auf der Autobahn gibt es Stau. | На автобане пробка. | 🛣️
die Geschwindigkeit | скорость | Die erlaubte Geschwindigkeit ist 50 km/h. | Разрешённая скорость 50 км/ч.
der Unfall | авария | Es gab einen Unfall auf der Kreuzung. | На перекрёстке была авария. | 💥
der Fußgänger | пешеход | Fußgänger haben hier Vorrang. | Здесь у пешеходов приоритет.
der Zebrastreifen | пешеходный переход | Geh über den Zebrastreifen. | Переходи по зебре.
der Radweg | велодорожка | Fahr auf dem Radweg! | Езжай по велодорожке!
#B1
die Umleitung | объезд | Wegen der Baustelle gibt es eine Umleitung. | Из-за стройки объезд.
die Baustelle | стройка | Auf der Autobahn ist eine Baustelle. | На автобане стройка. | 🚧
die Vorfahrt | право преимущественного проезда | Rechts hat Vorfahrt. | Правый имеет преимущество.
der Strafzettel | штраф (квитанция) | Ich habe einen Strafzettel bekommen. | Я получил штраф.
der Blitzer | камера фиксации скорости | Vorsicht, hier steht ein Blitzer! | Осторожно, здесь камера!
die Fahrprüfung | экзамен на права | Ich habe die Fahrprüfung bestanden. | Я сдал экзамен на права.
die Fahrschule | автошкола | Er macht gerade die Fahrschule. | Он сейчас учится в автошколе.
die Mitfahrgelegenheit | попутка | Ich suche eine Mitfahrgelegenheit nach Leipzig. | Я ищу попутку до Лейпцига.
das Deutschlandticket | «Дойчландтикет» (проездной по всей стране) | Mit dem Deutschlandticket fährt man im Nahverkehr. | С «Дойчландтикетом» ездят на региональном транспорте.
der Nahverkehr | общественный транспорт (местный) | Der Nahverkehr ist hier gut ausgebaut. | Местный транспорт здесь хорошо развит.
der Fernverkehr | дальнее сообщение | Im Fernverkehr fahren ICE-Züge. | На дальних маршрутах ходят поезда ICE.
`),

  ...parseVocab("auto_werkstatt", "B1", `
der Motor | двигатель | Der Motor springt nicht an. | Двигатель не заводится.
der Reifen | шина | Ich habe einen platten Reifen. | У меня спустило колесо.
die Bremse | тормоз | Die Bremsen müssen erneuert werden. | Тормоза нужно заменить.
das Lenkrad | руль | Halte das Lenkrad mit beiden Händen. | Держи руль обеими руками.
der Kofferraum | багажник | Der Koffer ist im Kofferraum. | Чемодан в багажнике.
der Scheinwerfer | фара | Ein Scheinwerfer ist kaputt. | Одна фара не работает.
der Scheibenwischer | дворник | Die Scheibenwischer quietschen. | Дворники скрипят.
das Benzin | бензин | Das Benzin ist wieder teurer geworden. | Бензин снова подорожал.
der Diesel | дизель | Mein Auto fährt mit Diesel. | Моя машина на дизеле.
das Elektroauto | электромобиль | Wir haben ein Elektroauto gekauft. | Мы купили электромобиль.
die Ladestation | зарядная станция | Wo ist die nächste Ladestation? | Где ближайшая зарядная станция? | 🔋
die Werkstatt | автомастерская | Das Auto ist in der Werkstatt. | Машина в мастерской.
die Panne | поломка (в пути) | Wir hatten eine Panne auf der Autobahn. | У нас сломалась машина на автобане.
der Abschleppdienst | эвакуатор | Wir müssen den Abschleppdienst rufen. | Нам нужно вызвать эвакуатор.
der Ölwechsel | замена масла | Das Auto braucht einen Ölwechsel. | Машине нужна замена масла.
der TÜV | техосмотр | Mein Auto muss zum TÜV. | Моей машине нужно пройти техосмотр.
die Inspektion | техническое обслуживание | Die Inspektion kostet 300 Euro. | Техобслуживание стоит 300 евро.
der Kostenvoranschlag | предварительная смета | Können Sie mir einen Kostenvoranschlag machen? | Можете составить смету?
der Gebrauchtwagen | подержанный автомобиль | Wir kaufen einen Gebrauchtwagen. | Мы покупаем подержанную машину.
das Kennzeichen | номерной знак | Notieren Sie das Kennzeichen! | Запишите номер машины!
die Kfz-Versicherung | автостраховка | Die Kfz-Versicherung ist Pflicht. | Автостраховка обязательна.
die Zulassung | регистрация (авто) | Für die Zulassung brauchen Sie den Fahrzeugbrief. | Для регистрации нужен ПТС.
der Fahrzeugschein | свидетельство о регистрации ТС | Zeigen Sie mir bitte den Fahrzeugschein. | Покажите, пожалуйста, техпаспорт.
überholen | обгонять | Hier darf man nicht überholen. | Здесь нельзя обгонять.
abbiegen | поворачивать | An der Ampel links abbiegen. | На светофоре повернуть налево.
bremsen | тормозить | Er hat zu spät gebremst. | Он слишком поздно затормозил.
der Sicherheitsgurt | ремень безопасности | Schnallen Sie sich bitte an. | Пристегните, пожалуйста, ремень.
die Warnweste | светоотражающий жилет | Im Auto muss eine Warnweste sein. | В машине должен быть светоотражающий жилет.
das Warndreieck | знак аварийной остановки | Stell das Warndreieck auf! | Поставь знак аварийной остановки!
`),

  ...parseVocab("reise_hotel", "A2", `
das Einzelzimmer | одноместный номер | Ich möchte ein Einzelzimmer reservieren. | Я хотел бы забронировать одноместный номер.
das Doppelzimmer | двухместный номер | Ein Doppelzimmer kostet 90 Euro. | Двухместный номер стоит 90 евро.
die Rezeption | ресепшен | Fragen Sie an der Rezeption. | Спросите на ресепшене. | 🛎️
die Reservierung | бронь | Ich habe eine Reservierung auf den Namen Petrow. | У меня бронь на фамилию Петров.
reservieren | бронировать | Wir haben einen Tisch reserviert. | Мы забронировали столик.
die Übernachtung | ночёвка | Eine Übernachtung mit Frühstück kostet 70 Euro. | Ночь с завтраком стоит 70 евро.
die Halbpension | полупансион | Wir haben Halbpension gebucht. | Мы забронировали полупансион.
die Vollpension | полный пансион | Vollpension ist teurer. | Полный пансион дороже.
einchecken | регистрироваться (в отеле) | Wir können ab 14 Uhr einchecken. | Заселиться можно с 14 часов.
auschecken | выезжать (из отеля) | Bis wann muss ich auschecken? | До которого часа нужно выехать?
die Jugendherberge | молодёжный хостел | Wir übernachten in einer Jugendherberge. | Мы ночуем в молодёжном хостеле.
die Ferienwohnung | апартаменты для отдыха | Wir mieten eine Ferienwohnung am Meer. | Мы снимаем апартаменты у моря.
der Campingplatz | кемпинг | Der Campingplatz liegt am See. | Кемпинг находится у озера. | ⛺
das Zelt | палатка | Wir schlafen im Zelt. | Мы спим в палатке.
der Urlaub (A2) | отпуск | Wir machen Urlaub in Spanien. | Мы проводим отпуск в Испании. | 🌴
die Reise | путешествие | Die Reise war wunderschön. | Путешествие было замечательным.
der Reiseführer | путеводитель; гид | Der Reiseführer erklärt die Geschichte der Stadt. | Гид рассказывает историю города.
das Reisebüro | турагентство | Wir buchen die Reise im Reisebüro. | Мы бронируем поездку в турагентстве.
die Pauschalreise | пакетный тур | Eine Pauschalreise ist oft günstiger. | Пакетный тур часто дешевле.
der Strand | пляж | Wir liegen den ganzen Tag am Strand. | Мы весь день лежим на пляже. | 🏖️
die Küste | побережье | Die Küste ist sehr schön. | Побережье очень красивое.
die Insel | остров | Wir fahren auf eine Insel. | Мы едем на остров. | 🏝️
das Gepäck | багаж | Wo kann ich mein Gepäck abgeben? | Где можно сдать багаж? | 🧳
der Rucksack | рюкзак | Ich reise nur mit einem Rucksack. | Я путешествую только с рюкзаком. | 🎒
packen | паковать | Hast du schon gepackt? | Ты уже собрал вещи?
die Postkarte | открытка | Ich schreibe dir eine Postkarte. | Я напишу тебе открытку.
das Souvenir | сувенир | Wir kaufen Souvenirs für die Familie. | Мы покупаем сувениры для семьи.
die Besichtigung | экскурсия, осмотр | Die Besichtigung dauert zwei Stunden. | Осмотр длится два часа.
die Stadtführung | экскурсия по городу | Um zehn beginnt die Stadtführung. | В десять начинается экскурсия по городу.
#B1
der Flug | рейс, полёт | Der Flug wurde gestrichen. | Рейс отменили.
der Abflug | вылет | Der Abflug verspätet sich um eine Stunde. | Вылет задерживается на час.
die Landung | посадка | Die Landung war ruhig. | Посадка была мягкой.
die Bordkarte | посадочный талон | Bitte zeigen Sie Ihre Bordkarte. | Пожалуйста, покажите посадочный талон.
das Handgepäck | ручная кладь | Flüssigkeiten im Handgepäck sind begrenzt. | Жидкости в ручной клади ограничены.
die Sicherheitskontrolle | досмотр | An der Sicherheitskontrolle ist eine lange Schlange. | На досмотре длинная очередь.
der Zoll | таможня | Haben Sie etwas zu verzollen? | Вам есть что декларировать?
die Passkontrolle | паспортный контроль | Nach der Passkontrolle gehen wir zum Gate. | После паспортного контроля идём к выходу.
der Anschlussflug | стыковочный рейс | Ich verpasse sonst meinen Anschlussflug. | Иначе я опоздаю на стыковочный рейс.
die Reiseversicherung | туристическая страховка | Hast du eine Reiseversicherung abgeschlossen? | Ты оформил туристическую страховку?
`),

  ...parseVocab("kommunikation", "A2", `
das Telefon | телефон | Das Telefon klingelt. | Звонит телефон. | ☎️
telefonieren | разговаривать по телефону | Ich telefoniere mit meiner Mutter. | Я разговариваю по телефону с мамой.
die Nachricht | сообщение; новость | Ich habe dir eine Nachricht geschickt. | Я отправил тебе сообщение. | 💬
die SMS | СМС | Schreib mir eine SMS. | Напиши мне эсэмэску.
der Anrufbeantworter | автоответчик | Sprechen Sie bitte auf den Anrufbeantworter. | Оставьте сообщение на автоответчике.
die Mailbox | голосовая почта | Ich habe dir auf die Mailbox gesprochen. | Я оставил тебе голосовое сообщение.
besetzt (Telefon) | занято | Die Leitung ist besetzt. | Линия занята.
zurückrufen | перезванивать | Ich rufe Sie später zurück. | Я перезвоню вам позже.
die Vorwahl | код (телефонный) | Die Vorwahl von Berlin ist 030. | Код Берлина — 030.
der Brief | письмо | Ich habe einen Brief bekommen. | Я получил письмо. | ✉️
die Briefmarke | почтовая марка | Eine Briefmarke für Russland, bitte. | Марку для России, пожалуйста.
der Umschlag | конверт | Steck den Brief in den Umschlag. | Положи письмо в конверт.
der Absender | отправитель | Auf dem Brief steht kein Absender. | На письме нет отправителя.
der Empfänger | получатель | Der Empfänger ist unbekannt. | Получатель неизвестен.
das Einschreiben | заказное письмо | Ich schicke den Vertrag per Einschreiben. | Я отправлю договор заказным письмом.
die Postleitzahl | почтовый индекс | Wie ist Ihre Postleitzahl? | Какой у вас индекс?
#B1
das Ladegerät | зарядное устройство | Ich habe mein Ladegerät vergessen. | Я забыл зарядку.
der Akku | аккумулятор | Mein Akku ist fast leer. | Мой аккумулятор почти разряжен. | 🔋
der Handyvertrag | договор мобильной связи | Mein Handyvertrag läuft bald aus. | Мой контракт на мобильную связь скоро заканчивается.
die Prepaid-Karte | предоплаченная SIM-карта | Ich kaufe eine Prepaid-Karte. | Я покупаю предоплаченную SIM-карту.
das Guthaben | баланс (на счёте) | Ich habe kein Guthaben mehr. | У меня закончился баланс.
das Netz | сеть, связь | Hier habe ich kein Netz. | Здесь нет связи. | 📶
der Empfang | приём (сигнала) | Der Empfang ist schlecht. | Плохой приём сигнала.
erreichbar | доступный (на связи) | Ich bin bis 18 Uhr erreichbar. | Я на связи до 18 часов.
die Videokonferenz | видеоконференция | Die Besprechung findet als Videokonferenz statt. | Совещание пройдёт в формате видеоконференции.
`),

  ...parseVocab("computer_internet", "B1", `
#A2
der Laptop | ноутбук | Mein Laptop ist sehr langsam. | Мой ноутбук очень медленный. | 💻
die Tastatur | клавиатура | Die Tastatur ist deutsch. | Клавиатура немецкая. | ⌨️
die Maus (PC) | мышь (компьютерная) | Die Maus funktioniert nicht. | Мышь не работает. | 🖱️
der Drucker | принтер | Der Drucker hat kein Papier. | В принтере нет бумаги. | 🖨️
drucken | печатать | Kannst du das für mich drucken? | Можешь распечатать мне это?
die Webseite | веб-сайт | Die Informationen stehen auf der Webseite. | Информация на сайте.
das WLAN | Wi-Fi | Wie ist das WLAN-Passwort? | Какой пароль от вайфая? | 📶
online | онлайн | Bist du gerade online? | Ты сейчас онлайн?
klicken | кликать | Klicken Sie auf den Link. | Нажмите на ссылку.
die Datei | файл | Ich schicke dir die Datei. | Я отправлю тебе файл. | 📄
der Ordner | папка | Die Datei ist im Ordner „Arbeit“. | Файл в папке «Работа». | 📁
#B1
hochladen | загружать (на сервер) | Laden Sie das Dokument hier hoch. | Загрузите документ сюда.
der Anhang | вложение | Im Anhang finden Sie meinen Lebenslauf. | Во вложении — моё резюме. | 📎
das Benutzerkonto | учётная запись | Erstellen Sie ein Benutzerkonto. | Создайте учётную запись.
sich einloggen | входить в систему | Ich kann mich nicht einloggen. | Я не могу войти в систему.
sich ausloggen | выходить из системы | Vergiss nicht, dich auszuloggen. | Не забудь выйти из аккаунта.
der Benutzername | имя пользователя | Geben Sie Ihren Benutzernamen ein. | Введите имя пользователя.
das Update | обновление | Das Handy braucht ein Update. | Телефону нужно обновление.
installieren | устанавливать | Ich installiere ein neues Programm. | Я устанавливаю новую программу.
löschen | удалять | Ich habe die E-Mail aus Versehen gelöscht. | Я случайно удалил письмо.
die Suchmaschine | поисковая система | Ich suche das in einer Suchmaschine. | Я поищу это в поисковике.
googeln | гуглить | Ich google mal schnell die Adresse. | Я быстро погуглю адрес.
die sozialen Medien | социальные сети | Sie verbringt viel Zeit in den sozialen Medien. | Она проводит много времени в соцсетях.
posten | публиковать (пост) | Er postet jeden Tag Fotos. | Он каждый день выкладывает фото.
der Bildschirm (B1) | экран | Der Bildschirm ist zu dunkel. | Экран слишком тёмный.
der Virus (PC) | вирус (компьютерный) | Mein Computer hat einen Virus. | В моём компьютере вирус.
die Sicherheitskopie | резервная копия | Mach regelmäßig eine Sicherheitskopie. | Регулярно делай резервную копию.
abstürzen | зависать, падать (о программе) | Das Programm ist abgestürzt. | Программа зависла.
die Einstellungen | настройки | Ändere das in den Einstellungen. | Измени это в настройках. | ⚙️
der Link | ссылка | Ich schicke dir den Link. | Я пришлю тебе ссылку. | 🔗
der Datenschutz | защита данных | Der Datenschutz ist in Deutschland sehr wichtig. | Защита данных очень важна в Германии.
#B2
die Verschlüsselung | шифрование | Die Nachrichten sind durch Verschlüsselung geschützt. | Сообщения защищены шифрованием.
die Cloud | облако | Ich speichere meine Fotos in der Cloud. | Я храню фото в облаке. | ☁️
das Betriebssystem | операционная система | Welches Betriebssystem benutzt du? | Какой операционной системой ты пользуешься?
die Zwei-Faktor-Authentifizierung | двухфакторная аутентификация | Aktivieren Sie die Zwei-Faktor-Authentifizierung. | Включите двухфакторную аутентификацию.
`),
];
