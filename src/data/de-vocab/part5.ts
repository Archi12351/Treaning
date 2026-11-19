import { parseVocab } from "../vocabParse";

// Бюрократия, госуслуги, жильё, деньги, налоги, страхование, работа.
export const PART5 = [
  ...parseVocab("behoerden", "B1", `
die Behörde | ведомство, госорган | Für den Antrag müssen Sie zur Behörde gehen. | Для заявления нужно пойти в ведомство.
die Ausländerbehörde | ведомство по делам иностранцев | Ich habe einen Termin bei der Ausländerbehörde. | У меня назначена встреча в ведомстве по делам иностранцев.
das Standesamt | ЗАГС | Wir heiraten im Standesamt. | Мы женимся в ЗАГСе.
das Finanzamt | налоговая инспекция | Das Finanzamt hat mir einen Brief geschickt. | Налоговая прислала мне письмо.
das Jobcenter | центр занятости (выплаты пособий) | Er bekommt Bürgergeld vom Jobcenter. | Он получает пособие от джобцентра.
die Agentur für Arbeit | агентство по труду | Melden Sie sich bei der Agentur für Arbeit arbeitslos. | Встаньте на учёт как безработный в агентстве по труду.
die Familienkasse | касса семейных пособий | Das Kindergeld zahlt die Familienkasse. | Пособие на ребёнка выплачивает семейная касса.
die Kfz-Zulassungsstelle | регистрационное отделение (авто) | Das Auto melde ich bei der Kfz-Zulassungsstelle an. | Машину я регистрирую в регистрационном отделении.
das Sozialamt | отдел соцобеспечения | Das Sozialamt hilft in Notlagen. | Соцслужба помогает в трудных ситуациях.
das Ordnungsamt | отдел общественного порядка | Das Ordnungsamt kontrolliert die Parkplätze. | Отдел общественного порядка контролирует парковки.
das Konsulat | консульство | Den Pass verlängere ich im Konsulat. | Паспорт я продлеваю в консульстве.
die Botschaft | посольство | Das Visum beantragt man bei der Botschaft. | Визу оформляют в посольстве.
der Sachbearbeiter | сотрудник, ведущий дело | Mein Sachbearbeiter ist heute nicht da. | Моего сотрудника сегодня нет.
der Termin vereinbaren | записаться на приём | Ich möchte einen Termin vereinbaren. | Я хотел бы записаться на приём.
die Terminbuchung | онлайн-запись на приём | Die Terminbuchung erfolgt online. | Запись на приём осуществляется онлайн.
die Wartenummer | номер в электронной очереди | Ziehen Sie bitte eine Wartenummer. | Возьмите, пожалуйста, номерок.
die Unterlagen | документы | Bringen Sie bitte alle Unterlagen mit. | Принесите, пожалуйста, все документы.
das Dokument | документ | Dieses Dokument fehlt noch. | Этого документа ещё не хватает. | 📄
die Kopie | копия | Brauchen Sie eine Kopie oder das Original? | Вам нужна копия или оригинал?
das Original | оригинал | Bitte bringen Sie das Original mit. | Пожалуйста, принесите оригинал.
beglaubigt | заверенный | Sie brauchen eine beglaubigte Kopie. | Вам нужна заверенная копия.
die Übersetzung | перевод | Die Geburtsurkunde braucht eine beglaubigte Übersetzung. | Для свидетельства о рождении нужен заверенный перевод.
die Geburtsurkunde | свидетельство о рождении | Bitte legen Sie die Geburtsurkunde vor. | Пожалуйста, предъявите свидетельство о рождении.
die Heiratsurkunde | свидетельство о браке | Die Heiratsurkunde bekommen Sie im Standesamt. | Свидетельство о браке выдают в ЗАГСе.
der Personalausweis | удостоверение личности | Zeigen Sie bitte Ihren Personalausweis. | Покажите, пожалуйста, удостоверение личности. | 🪪
der Reisepass (B1) | загранпаспорт | Mein Reisepass läuft bald ab. | Срок моего загранпаспорта скоро истекает.
das Passfoto | фото на паспорт | Sie brauchen ein biometrisches Passfoto. | Вам нужно биометрическое фото.
gültig | действительный | Ihr Ausweis ist noch zwei Jahre gültig. | Ваше удостоверение действительно ещё два года.
abgelaufen | просроченный | Ihr Pass ist leider abgelaufen. | Ваш паспорт, к сожалению, просрочен.
verlängern | продлевать | Ich möchte meinen Aufenthaltstitel verlängern. | Я хочу продлить вид на жительство.
der Wohnsitz | место жительства | Wo ist Ihr Wohnsitz? | Где ваше место жительства?
die Meldebescheinigung | справка о регистрации | Ich brauche eine Meldebescheinigung. | Мне нужна справка о регистрации.
sich anmelden (Wohnung) | регистрироваться по месту жительства | Nach dem Umzug muss man sich innerhalb von zwei Wochen anmelden. | После переезда нужно зарегистрироваться в течение двух недель.
sich abmelden | сниматься с регистрации | Vor der Ausreise muss ich mich abmelden. | Перед выездом мне нужно сняться с регистрации.
sich ummelden | перерегистрироваться | Nach dem Umzug innerhalb der Stadt muss man sich ummelden. | После переезда в пределах города нужно перерегистрироваться.
die Wohnungsgeberbestätigung | подтверждение от арендодателя | Für die Anmeldung brauchen Sie eine Wohnungsgeberbestätigung. | Для регистрации нужно подтверждение арендодателя.
der Familienstand | семейное положение | Bitte geben Sie Ihren Familienstand an. | Укажите, пожалуйста, семейное положение.
das Geburtsdatum | дата рождения | Wie ist Ihr Geburtsdatum? | Какая у вас дата рождения?
der Geburtsort | место рождения | Tragen Sie den Geburtsort ein. | Впишите место рождения.
der Bescheid | решение (официальное), уведомление | Den Bescheid schicken wir Ihnen per Post. | Решение мы пришлём вам по почте.
die Bearbeitungszeit | срок рассмотрения | Die Bearbeitungszeit beträgt etwa sechs Wochen. | Срок рассмотрения около шести недель.
bearbeiten | рассматривать, обрабатывать | Ihr Antrag wird gerade bearbeitet. | Ваше заявление сейчас рассматривается.
genehmigen | одобрять | Der Antrag wurde genehmigt. | Заявление одобрено.
ablehnen (Antrag) | отклонять | Leider wurde Ihr Antrag abgelehnt. | К сожалению, ваше заявление отклонено.
der Widerspruch | возражение, обжалование | Sie können innerhalb eines Monats Widerspruch einlegen. | Вы можете подать возражение в течение месяца.
einreichen | подавать (документы) | Die Unterlagen müssen bis Freitag eingereicht werden. | Документы нужно подать до пятницы.
vorlegen | предъявлять | Bitte legen Sie Ihren Mietvertrag vor. | Пожалуйста, предъявите договор аренды.
nachreichen | досылать, донести позже | Die fehlenden Unterlagen können Sie nachreichen. | Недостающие документы можно донести позже.
unterschreiben | подписывать | Unterschreiben Sie bitte hier unten. | Подпишите, пожалуйста, внизу. | ✍️
die Vollmacht | доверенность | Mit einer Vollmacht kann mein Mann das für mich erledigen. | По доверенности мой муж может сделать это за меня.
das Aktenzeichen | номер дела | Bitte geben Sie immer das Aktenzeichen an. | Пожалуйста, всегда указывайте номер дела.
die Steuer-ID | налоговый идентификационный номер | Die Steuer-ID bekommen Sie nach der Anmeldung per Post. | Налоговый номер приходит по почте после регистрации.
die Sozialversicherungsnummer | номер социального страхования | Der Arbeitgeber braucht Ihre Sozialversicherungsnummer. | Работодателю нужен ваш номер соцстрахования.
der Rundfunkbeitrag | взнос за радио и ТВ | Jeder Haushalt zahlt den Rundfunkbeitrag. | Каждое домохозяйство платит взнос за радио и ТВ.
die Bürokratie | бюрократия | Die Bürokratie in Deutschland ist kompliziert. | Бюрократия в Германии сложная.
#B2
die Ausreise | выезд из страны | Vor der Ausreise müssen Sie alles erledigen. | Перед выездом вам нужно всё уладить.
die Einreise | въезд в страну | Für die Einreise brauchen Sie ein Visum. | Для въезда вам нужна виза.
die Zuständigkeit | компетенция, ответственность | Das fällt nicht in unsere Zuständigkeit. | Это не в нашей компетенции.
der Nachweis | подтверждение, доказательство | Wir brauchen einen Nachweis über Ihr Einkommen. | Нам нужно подтверждение вашего дохода.
die Frist einhalten | соблюдать срок | Bitte halten Sie die Frist unbedingt ein. | Пожалуйста, обязательно соблюдайте срок.
die Fristverlängerung | продление срока | Ich bitte um eine Fristverlängerung. | Прошу продлить срок.
das Bürgergeld | гражданское пособие | Er hat Bürgergeld beantragt. | Он подал заявку на гражданское пособие.
das Wohngeld | жилищная субсидия | Mit geringem Einkommen kann man Wohngeld beantragen. | С низким доходом можно получить жилищную субсидию.
das Elterngeld | родительское пособие | Elterngeld bekommt man bis zu 14 Monate. | Родительское пособие получают до 14 месяцев.
das Kindergeld | пособие на ребёнка | Das Kindergeld wird monatlich überwiesen. | Пособие на ребёнка перечисляется ежемесячно.
der Kitaplatz | место в детском саду | Wir haben endlich einen Kitaplatz bekommen. | Мы наконец получили место в детском саду.
die Einbürgerung | натурализация | Für die Einbürgerung braucht man das Sprachniveau B1. | Для получения гражданства нужен уровень языка B1.
der Einbürgerungstest | тест на гражданство | Sie hat den Einbürgerungstest bestanden. | Она сдала тест на гражданство.
die Anerkennung | признание (диплома) | Ich habe die Anerkennung meines Diploms beantragt. | Я подал заявление на признание диплома.
das Führungszeugnis | справка о несудимости | Für die Stelle brauchen Sie ein polizeiliches Führungszeugnis. | Для этой должности нужна справка о несудимости.
`),

  ...parseVocab("aufenthalt", "B1", `
der Aufenthaltstitel | вид на жительство (общее) | Mein Aufenthaltstitel ist noch ein Jahr gültig. | Мой вид на жительство действителен ещё год.
die Niederlassungserlaubnis | бессрочный вид на жительство | Nach fünf Jahren kann man eine Niederlassungserlaubnis beantragen. | Через пять лет можно подать на бессрочный ВНЖ.
die Blaue Karte EU | Голубая карта ЕС | Als IT-Spezialist hat er eine Blaue Karte EU bekommen. | Как IT-специалист он получил Голубую карту ЕС.
die Arbeitserlaubnis | разрешение на работу | Ohne Arbeitserlaubnis dürfen Sie nicht arbeiten. | Без разрешения на работу вам нельзя работать.
das Visum (B1) | виза | Das Visum gilt für drei Monate. | Виза действует три месяца.
das Schengen-Visum | шенгенская виза | Für Urlaub reicht ein Schengen-Visum. | Для отпуска хватит шенгенской визы.
der Integrationskurs | интеграционный курс | Der Integrationskurs dauert etwa ein Jahr. | Интеграционный курс длится около года.
der Orientierungskurs | ориентационный курс | Im Orientierungskurs lernt man viel über Deutschland. | На ориентационном курсе узнаёшь много о Германии.
die Fiktionsbescheinigung | временное разрешение на период рассмотрения | Bis zur Entscheidung bekommen Sie eine Fiktionsbescheinigung. | До решения вам выдадут временное свидетельство.
der Familiennachzug | воссоединение семьи | Sie hat einen Antrag auf Familiennachzug gestellt. | Она подала заявление на воссоединение семьи.
der Asylantrag | ходатайство об убежище | Sein Asylantrag wird noch geprüft. | Его ходатайство об убежище ещё рассматривается.
der Flüchtling | беженец | Viele Flüchtlinge lernen schnell Deutsch. | Многие беженцы быстро учат немецкий.
die Duldung | временное приостановление депортации | Er lebt mit einer Duldung in Deutschland. | Он живёт в Германии со статусом «дульдунг».
der Migrationshintergrund | миграционное происхождение | Viele Menschen in Deutschland haben einen Migrationshintergrund. | У многих людей в Германии миграционные корни.
die Staatsbürgerschaft | гражданство | Er hat die deutsche Staatsbürgerschaft angenommen. | Он принял немецкое гражданство.
die doppelte Staatsbürgerschaft | двойное гражданство | Seit 2024 ist die doppelte Staatsbürgerschaft leichter möglich. | С 2024 года двойное гражданство получить проще.
der Ausländer | иностранец | Ausländer müssen sich ebenfalls anmelden. | Иностранцы тоже должны регистрироваться.
die Heimat | родина | Er vermisst seine Heimat. | Он скучает по родине.
auswandern | эмигрировать | Sie sind nach Kanada ausgewandert. | Они эмигрировали в Канаду.
einwandern | иммигрировать | Viele Fachkräfte wandern nach Deutschland ein. | Многие специалисты иммигрируют в Германию.
die Einwanderung | иммиграция | Das neue Gesetz regelt die Einwanderung von Fachkräften. | Новый закон регулирует иммиграцию специалистов.
das Sprachzertifikat | языковой сертификат | Ich brauche ein Sprachzertifikat B1. | Мне нужен языковой сертификат B1.
der Lebensunterhalt | средства к существованию | Sie müssen Ihren Lebensunterhalt sichern. | Вы должны обеспечить свои средства к существованию.
das Sperrkonto | блокированный счёт | Studenten brauchen oft ein Sperrkonto. | Студентам часто нужен блокированный счёт.
die Krankenversicherung (Visum) | медицинская страховка | Für das Visum brauchen Sie eine Krankenversicherung. | Для визы вам нужна медицинская страховка.
die Chancenkarte | «карта возможностей» (поиск работы) | Mit der Chancenkarte kann man in Deutschland Arbeit suchen. | С «картой возможностей» можно искать работу в Германии.
`),

  ...parseVocab("bank_geld", "B1", `
#A2
das Konto | счёт (банковский) | Ich möchte ein Konto eröffnen. | Я хотел бы открыть счёт.
das Girokonto | текущий счёт | Für das Gehalt brauchen Sie ein Girokonto. | Для зарплаты нужен текущий счёт.
der Geldautomat | банкомат | Wo ist der nächste Geldautomat? | Где ближайший банкомат? | 🏧
Geld abheben | снимать деньги | Ich muss noch Geld abheben. | Мне ещё нужно снять деньги.
einzahlen | вносить (на счёт) | Ich zahle 200 Euro ein. | Я вношу 200 евро.
die PIN | ПИН-код | Geben Sie Ihre PIN ein. | Введите ПИН-код.
der Schein | купюра | Hast du einen Fünfzig-Euro-Schein? | У тебя есть пятидесятиевровая купюра? | 💵
die Münze | монета | Ich habe nur Münzen. | У меня только монеты. | 🪙
#B1
die Überweisung | перевод (банковский) | Die Überweisung dauert einen Tag. | Перевод идёт один день.
überweisen | переводить (деньги) | Ich überweise dir das Geld morgen. | Я переведу тебе деньги завтра.
die IBAN | IBAN (номер счёта) | Bitte geben Sie Ihre IBAN an. | Пожалуйста, укажите ваш IBAN.
der Kontoauszug | выписка со счёта | Den Kontoauszug kann man online sehen. | Выписку со счёта можно посмотреть онлайн.
der Dauerauftrag | постоянное поручение | Die Miete zahle ich per Dauerauftrag. | Аренду я плачу постоянным поручением.
die Lastschrift | прямое дебетование | Der Betrag wird per Lastschrift abgebucht. | Сумма будет списана прямым дебетованием.
abbuchen | списывать (со счёта) | Die Bank hat zu viel abgebucht. | Банк списал слишком много.
der Kontostand | остаток на счёте | Wie ist mein Kontostand? | Какой у меня остаток на счёте?
das Online-Banking | онлайн-банкинг | Ich mache alles per Online-Banking. | Я делаю всё через онлайн-банк.
die Gebühr (Bank) | комиссия | Für das Konto fallen keine Gebühren an. | За обслуживание счёта комиссии нет.
der Kredit | кредит | Wir haben einen Kredit für das Auto aufgenommen. | Мы взяли кредит на машину.
die Zinsen | проценты | Die Zinsen sind gestiegen. | Процентные ставки выросли.
sparen | копить, экономить | Ich spare für eine Reise. | Я коплю на поездку. | 🐷
das Sparkonto | сберегательный счёт | Das Geld liegt auf dem Sparkonto. | Деньги лежат на сберегательном счёте.
die Schulden | долги | Er hat hohe Schulden. | У него большие долги.
leihen | одалживать | Kannst du mir zehn Euro leihen? | Можешь одолжить мне десять евро?
der Betrag | сумма | Der Betrag ist zu hoch. | Сумма слишком велика.
die Währung | валюта | Die Währung in der Schweiz ist der Franken. | Валюта в Швейцарии — франк.
der Wechselkurs | обменный курс | Wie ist der Wechselkurs heute? | Какой сегодня обменный курс?
die Schufa | кредитная история (Шуфа) | Für die Wohnung brauchen Sie eine Schufa-Auskunft. | Для квартиры нужна выписка из Шуфы.
das Haushaltsbuch | книга учёта расходов | Ich führe ein Haushaltsbuch. | Я веду учёт расходов.
die Ausgaben | расходы | Unsere Ausgaben sind gestiegen. | Наши расходы выросли.
die Einnahmen | доходы | Die Einnahmen decken die Kosten nicht. | Доходы не покрывают расходов.
#B2
die Hypothek | ипотека | Sie haben eine Hypothek auf das Haus. | У них ипотека на дом.
die Rate | взнос (по рассрочке) | Ich zahle das Auto in Raten ab. | Я выплачиваю машину в рассрочку.
der Dispo | овердрафт | Mein Konto ist im Dispo. | Мой счёт в минусе (овердрафт).
die Aktie | акция | Er hat Aktien gekauft. | Он купил акции. | 📈
die Geldanlage | вложение денег | Immobilien gelten als sichere Geldanlage. | Недвижимость считается надёжным вложением.
die Rendite | доходность | Die Rendite ist gering. | Доходность невысокая.
das Vermögen | состояние, имущество | Er hat ein großes Vermögen geerbt. | Он унаследовал большое состояние.
erben | наследовать | Sie hat das Haus geerbt. | Она унаследовала дом.
`),

  ...parseVocab("steuern_versicherung", "B2", `
#B1
die Lohnsteuer | подоходный налог (с зарплаты) | Die Lohnsteuer zieht der Arbeitgeber direkt ab. | Подоходный налог работодатель удерживает сразу.
die Steuerklasse | налоговый класс | Verheiratete können die Steuerklasse wechseln. | Женатые могут сменить налоговый класс.
die Steuererklärung | налоговая декларация | Ich mache meine Steuererklärung online. | Я подаю налоговую декларацию онлайн.
die Steuerrückerstattung | возврат налога | Ich bekomme eine Steuerrückerstattung von 600 Euro. | Мне вернут 600 евро налога.
die Kirchensteuer | церковный налог | Wer nicht in der Kirche ist, zahlt keine Kirchensteuer. | Кто не состоит в церкви, не платит церковный налог.
die Mehrwertsteuer | НДС | Die Mehrwertsteuer beträgt 19 Prozent. | НДС составляет 19 процентов.
brutto | брутто, до вычета налогов | Ich verdiene 4000 Euro brutto. | Я зарабатываю 4000 евро брутто.
netto | нетто, на руки | Netto bleiben etwa 2600 Euro übrig. | На руки остаётся около 2600 евро.
die Lohnabrechnung | расчётный листок | Prüfen Sie Ihre Lohnabrechnung genau. | Внимательно проверьте расчётный листок.
die Krankenkasse | больничная касса | Bei welcher Krankenkasse sind Sie versichert? | В какой больничной кассе вы застрахованы?
gesetzlich versichert | застрахован в государственной кассе | Ich bin gesetzlich versichert. | Я застрахован в государственной больничной кассе.
privat versichert | застрахован частно | Als Beamter ist er privat versichert. | Как госслужащий он застрахован частно.
die Haftpflichtversicherung | страхование ответственности | Eine Haftpflichtversicherung ist sehr wichtig. | Страхование ответственности очень важно.
die Hausratversicherung | страхование имущества квартиры | Die Hausratversicherung zahlt bei Einbruch. | Страховка имущества платит при взломе.
die Rentenversicherung | пенсионное страхование | Ein Teil des Lohns geht an die Rentenversicherung. | Часть зарплаты идёт в пенсионное страхование.
die Arbeitslosenversicherung | страхование по безработице | Die Arbeitslosenversicherung zahlt das Arbeitslosengeld. | Страхование по безработице выплачивает пособие.
die Pflegeversicherung | страхование по уходу | Die Pflegeversicherung ist Pflicht. | Страхование по уходу обязательно.
der Beitrag | взнос | Der monatliche Beitrag beträgt 120 Euro. | Ежемесячный взнос составляет 120 евро.
der Versicherungsfall | страховой случай | Melden Sie den Versicherungsfall sofort. | Сообщите о страховом случае немедленно.
der Schaden | ущерб | Wer bezahlt den Schaden? | Кто оплатит ущерб?
kündigen (Vertrag) | расторгать договор | Ich möchte meinen Vertrag kündigen. | Я хочу расторгнуть договор.
die Kündigungsfrist | срок расторжения | Die Kündigungsfrist beträgt drei Monate. | Срок расторжения — три месяца.
#B2
der Steuerberater | налоговый консультант | Mein Steuerberater macht die Steuererklärung. | Мой налоговый консультант составляет декларацию.
absetzen (von der Steuer) | вычитать из налогов | Arbeitsmittel kann man von der Steuer absetzen. | Рабочие принадлежности можно вычесть из налоговой базы.
die Werbungskosten | профессиональные расходы (налоговый вычет) | Die Fahrtkosten zählen zu den Werbungskosten. | Транспортные расходы относятся к профессиональным расходам.
der Steuerbescheid | налоговое уведомление | Der Steuerbescheid kam nach drei Monaten. | Налоговое уведомление пришло через три месяца.
das Einkommen | доход | Sein Einkommen ist gestiegen. | Его доход вырос.
der Freibetrag | необлагаемая сумма | Bis zum Freibetrag zahlt man keine Steuern. | До необлагаемого минимума налоги не платят.
die Selbstbeteiligung | франшиза | Die Selbstbeteiligung beträgt 300 Euro. | Франшиза составляет 300 евро.
die Police | страховой полис | Bewahren Sie die Police gut auf. | Храните полис в надёжном месте.
der Versicherungsnehmer | страхователь | Der Versicherungsnehmer muss den Schaden melden. | Страхователь должен заявить об ущербе.
`),

  ...parseVocab("wohnen_miete", "B1", `
die Wohnungssuche | поиск квартиры | Die Wohnungssuche in München ist schwierig. | Искать квартиру в Мюнхене сложно.
die Wohnungsanzeige | объявление о квартире | Ich habe eine interessante Wohnungsanzeige gefunden. | Я нашёл интересное объявление о квартире.
die Besichtigung (Wohnung) | просмотр квартиры | Die Besichtigung ist am Dienstag um 18 Uhr. | Просмотр во вторник в 18 часов.
der Mietvertrag | договор аренды | Wir haben den Mietvertrag unterschrieben. | Мы подписали договор аренды.
die Kaltmiete | аренда без коммунальных | Die Kaltmiete beträgt 800 Euro. | Аренда без коммунальных — 800 евро.
die Warmmiete | аренда с коммунальными | Die Warmmiete liegt bei 1000 Euro. | Аренда с коммунальными — около 1000 евро.
die Quadratmeter | квадратные метры | Die Wohnung hat 65 Quadratmeter. | Площадь квартиры 65 квадратных метров.
der Altbau | старый дом (до ~1950) | Wir wohnen in einem schönen Altbau. | Мы живём в красивом старом доме.
der Neubau | новостройка | Der Neubau ist gut isoliert. | Новостройка хорошо утеплена.
die Einbauküche | встроенная кухня | Die Wohnung hat eine Einbauküche. | В квартире есть встроенная кухня.
die Mieterhöhung | повышение арендной платы | Wir haben eine Mieterhöhung bekommen. | Нам повысили арендную плату.
der Makler | риелтор | Der Makler verlangt zwei Monatsmieten Provision. | Риелтор берёт комиссию в две месячные аренды.
die Provision | комиссия | Für Mieter ist die Provision oft kostenlos. | Для арендаторов комиссия часто бесплатна.
die Selbstauskunft | анкета арендатора | Bitte füllen Sie die Selbstauskunft aus. | Пожалуйста, заполните анкету арендатора.
der Einkommensnachweis | подтверждение дохода | Der Vermieter will einen Einkommensnachweis sehen. | Арендодатель хочет увидеть подтверждение дохода.
die Übergabe | передача (квартиры) | Bei der Übergabe wird ein Protokoll gemacht. | При передаче составляется протокол.
der Untermieter | субарендатор | Ich suche einen Untermieter für drei Monate. | Я ищу субарендатора на три месяца.
die Hausverwaltung | управляющая компания | Die Hausverwaltung kümmert sich um Reparaturen. | Управляющая компания занимается ремонтом.
der Mangel | недостаток, дефект | Melden Sie Mängel bitte sofort. | Сообщайте о дефектах сразу.
die Mietminderung | снижение аренды (из-за дефекта) | Wegen des Schimmels haben wir eine Mietminderung verlangt. | Из-за плесени мы потребовали снизить аренду.
die Nebenkostenabrechnung | расчёт коммунальных платежей | Die Nebenkostenabrechnung kam im März. | Расчёт коммунальных платежей пришёл в марте.
die Nachzahlung | доплата | Wir müssen 200 Euro Nachzahlung leisten. | Нам нужно доплатить 200 евро.
das Eigentum | собственность | Die Wohnung ist unser Eigentum. | Квартира — наша собственность.
die Eigentumswohnung | квартира в собственности | Sie haben eine Eigentumswohnung gekauft. | Они купили квартиру в собственность.
der Eigentümer | владелец | Der Eigentümer wohnt in Spanien. | Владелец живёт в Испании.
#B2
der Mieterverein | союз арендаторов | Der Mieterverein berät bei Problemen. | Союз арендаторов консультирует при проблемах.
die Eigenbedarfskündigung | расторжение аренды из-за собственных нужд | Der Vermieter hat uns wegen Eigenbedarf gekündigt. | Арендодатель расторг договор из-за собственных нужд.
die Mietpreisbremse | ограничение роста арендной платы | Die Mietpreisbremse gilt in vielen Städten. | Ограничение аренды действует во многих городах.
der Wohnberechtigungsschein | разрешение на соцжильё | Für Sozialwohnungen braucht man einen Wohnberechtigungsschein. | Для социального жилья нужно специальное разрешение.
`),

  ...parseVocab("arbeit", "B1", `
#A2
die Arbeit | работа | Ich gehe um acht zur Arbeit. | Я иду на работу в восемь.
der Arbeitsplatz | рабочее место | Mein Arbeitsplatz ist im zweiten Stock. | Моё рабочее место на третьем этаже.
die Firma | фирма | Ich arbeite bei einer großen Firma. | Я работаю в большой фирме.
der Arbeitgeber | работодатель | Mein Arbeitgeber zahlt pünktlich. | Мой работодатель платит вовремя.
der Arbeitnehmer | работник | Arbeitnehmer haben Anspruch auf Urlaub. | Работники имеют право на отпуск.
die Vollzeit | полный рабочий день | Ich arbeite Vollzeit. | Я работаю полный день.
der Minijob | мини-работа (до 556 €) | Als Student hat er einen Minijob. | Как студент он подрабатывает на мини-работе.
die Schicht | смена | Ich habe heute Nachtschicht. | У меня сегодня ночная смена.
die Überstunden | сверхурочные | Diese Woche habe ich viele Überstunden gemacht. | На этой неделе у меня было много переработок.
die Mittagspause | обеденный перерыв | Die Mittagspause dauert eine Stunde. | Обеденный перерыв длится час.
#B1
die Stelle | должность, вакансия | Ich habe eine neue Stelle gefunden. | Я нашёл новую работу.
die Stellenanzeige | объявление о вакансии | Ich lese die Stellenanzeigen in der Zeitung. | Я читаю объявления о вакансиях в газете.
der Lebenslauf | резюме | Schicken Sie uns Ihren Lebenslauf. | Пришлите нам своё резюме.
das Anschreiben | сопроводительное письмо | Das Anschreiben sollte kurz sein. | Сопроводительное письмо должно быть коротким.
das Arbeitszeugnis | рекомендация с места работы | Mein alter Chef hat mir ein gutes Arbeitszeugnis geschrieben. | Мой бывший начальник написал мне хорошую характеристику.
die Probezeit | испытательный срок | Die Probezeit dauert sechs Monate. | Испытательный срок длится шесть месяцев.
der Arbeitsvertrag | трудовой договор | Lesen Sie den Arbeitsvertrag genau. | Внимательно прочитайте трудовой договор.
befristet | срочный (договор) | Mein Vertrag ist auf ein Jahr befristet. | Мой договор заключён на год.
unbefristet | бессрочный | Endlich habe ich einen unbefristeten Vertrag. | Наконец у меня бессрочный договор.
die Gehaltserhöhung | повышение зарплаты | Ich möchte um eine Gehaltserhöhung bitten. | Я хочу попросить о повышении зарплаты.
der Lohn | заработная плата | Der Lohn wird am Monatsende gezahlt. | Зарплату выплачивают в конце месяца.
der Mindestlohn | минимальная зарплата | Der Mindestlohn ist wieder gestiegen. | Минимальная зарплата снова выросла.
die Arbeitszeit | рабочее время | Meine Arbeitszeit ist flexibel. | У меня гибкий график.
die Gleitzeit | скользящий график | Wir haben Gleitzeit. | У нас скользящий график.
das Homeoffice | работа из дома | Zweimal pro Woche arbeite ich im Homeoffice. | Два раза в неделю я работаю из дома. | 🏠
der Betriebsrat | производственный совет | Der Betriebsrat vertritt die Mitarbeiter. | Производственный совет представляет сотрудников.
die Gewerkschaft | профсоюз | Die Gewerkschaft fordert mehr Lohn. | Профсоюз требует повышения зарплат.
der Streik | забастовка | Wegen des Streiks fahren keine Züge. | Из-за забастовки поезда не ходят.
die Abteilung (Firma) | отдел | Ich arbeite in der Marketingabteilung. | Я работаю в отделе маркетинга.
der Mitarbeiter | сотрудник | Die Firma hat 200 Mitarbeiter. | В фирме 200 сотрудников.
der Auszubildende (Azubi) | ученик (в системе Ausbildung) | Wir haben drei neue Azubis. | У нас три новых ученика.
die Ausbildung | профессиональное обучение | Sie macht eine Ausbildung zur Krankenpflegerin. | Она учится на медсестру.
das Praktikum | практика, стажировка | Ich mache ein Praktikum bei einer Bank. | Я прохожу стажировку в банке.
der Arbeitslose | безработный | Die Zahl der Arbeitslosen ist gesunken. | Число безработных снизилось.
arbeitslos | безработный | Er ist seit drei Monaten arbeitslos. | Он безработный уже три месяца.
das Arbeitslosengeld | пособие по безработице | Ich beziehe Arbeitslosengeld. | Я получаю пособие по безработице.
die Rente | пенсия | Mein Vater geht nächstes Jahr in Rente. | Мой отец в следующем году выходит на пенсию.
der Rentner | пенсионер | Viele Rentner reisen gern. | Многие пенсионеры любят путешествовать.
selbstständig sein | быть самозанятым | Sie ist seit fünf Jahren selbstständig. | Она уже пять лет работает на себя.
die Dienstreise | командировка | Nächste Woche bin ich auf Dienstreise. | На следующей неделе я в командировке.
#B2
der Arbeitsmarkt | рынок труда | Der Arbeitsmarkt für Ingenieure ist gut. | Рынок труда для инженеров хороший.
der Fachkräftemangel | нехватка специалистов | Der Fachkräftemangel betrifft viele Branchen. | Нехватка специалистов затрагивает многие отрасли.
die Branche | отрасль | In welcher Branche arbeiten Sie? | В какой отрасли вы работаете?
die Abfindung | выходное пособие | Er hat eine hohe Abfindung bekommen. | Он получил большое выходное пособие.
die Elternzeit | отпуск по уходу за ребёнком | Er nimmt ein Jahr Elternzeit. | Он берёт год отпуска по уходу за ребёнком.
der Mutterschutz | декретный отпуск | Im Mutterschutz darf sie nicht arbeiten. | В декретный период ей нельзя работать.
die Kurzarbeit | неполная занятость (с пособием) | Wegen der Krise gibt es Kurzarbeit. | Из-за кризиса ввели сокращённую занятость.
die Beförderung | повышение в должности | Sie hat eine Beförderung bekommen. | Её повысили в должности.
kündigen (Arbeit) | увольняться | Ich habe meine Stelle gekündigt. | Я уволился с работы.
entlassen | увольнять | Die Firma hat 50 Mitarbeiter entlassen. | Фирма уволила 50 сотрудников.
die Arbeitsbedingungen | условия труда | Die Arbeitsbedingungen sind hervorragend. | Условия труда превосходные.
`),

  ...parseVocab("buero", "B1", `
die Besprechung (B1) | совещание | Die Besprechung beginnt um zehn. | Совещание начинается в десять.
die Sitzung | заседание | Die Sitzung wurde verschoben. | Заседание перенесли.
die Tagesordnung | повестка дня | Was steht auf der Tagesordnung? | Что на повестке дня?
das Protokoll | протокол | Wer schreibt heute das Protokoll? | Кто сегодня ведёт протокол?
die Präsentation | презентация | Ich halte morgen eine Präsentation. | Завтра я делаю презентацию.
die Frist (Büro) | срок, дедлайн | Die Frist ist am Freitag. | Срок — в пятницу.
erledigen | выполнять, улаживать | Ich muss noch ein paar Dinge erledigen. | Мне нужно ещё уладить пару дел.
die Aufgabe | задача | Das ist eine schwierige Aufgabe. | Это сложная задача.
das Projekt | проект | Das Projekt ist fast fertig. | Проект почти готов.
der Kunde (Büro) | клиент | Der Kunde ist mit dem Ergebnis zufrieden. | Клиент доволен результатом.
der Auftrag | заказ, поручение | Wir haben einen großen Auftrag bekommen. | Мы получили большой заказ.
das Angebot (Firma) | коммерческое предложение | Wir schicken Ihnen ein Angebot. | Мы пришлём вам коммерческое предложение.
die Rechnung (Firma) | счёт-фактура | Die Rechnung ist noch nicht bezahlt. | Счёт ещё не оплачен.
die Mahnung | напоминание о долге | Wir haben eine Mahnung bekommen. | Нам прислали напоминание о задолженности.
der Kollege (B1) | коллега | Meine Kollegen sind sehr hilfsbereit. | Мои коллеги очень отзывчивые.
das Team | команда | Unser Team besteht aus acht Leuten. | Наша команда состоит из восьми человек.
die Leitung | руководство | Sie übernimmt die Leitung des Projekts. | Она берёт на себя руководство проектом.
der Abteilungsleiter | начальник отдела | Der Abteilungsleiter ist im Urlaub. | Начальник отдела в отпуске.
die Geschäftsführung | руководство фирмы | Die Geschäftsführung hat entschieden. | Руководство приняло решение.
der Termin (Büro) | встреча, срок | Ich habe heute drei Termine. | У меня сегодня три встречи.
verschieben | переносить | Können wir den Termin verschieben? | Можем перенести встречу?
absagen | отменять | Ich muss den Termin leider absagen. | К сожалению, мне придётся отменить встречу.
zusagen | подтверждать согласие | Ich habe für Montag zugesagt. | Я подтвердил на понедельник.
das Büromaterial | канцтовары | Das Büromaterial ist im Schrank. | Канцтовары в шкафу.
der Kopierer | копировальный аппарат | Der Kopierer ist schon wieder kaputt. | Копир снова сломался.
die Kantine | столовая (на работе) | Wir essen in der Kantine. | Мы едим в столовой.
der Feierabend (B1) | конец рабочего дня | Um fünf habe ich Feierabend. | В пять у меня конец рабочего дня.
die Visitenkarte | визитка | Hier ist meine Visitenkarte. | Вот моя визитка.
die Rückmeldung | обратная связь | Ich warte noch auf eine Rückmeldung. | Я ещё жду обратной связи.
weiterleiten | пересылать | Ich leite Ihnen die E-Mail weiter. | Я перешлю вам письмо.
in Kopie (CC) | в копии | Setzen Sie mich bitte in Kopie. | Поставьте меня, пожалуйста, в копию.
#B2
die Zielvereinbarung | договорённость о целях | Wir treffen jedes Jahr eine Zielvereinbarung. | Каждый год мы согласовываем цели.
die Umsetzung | реализация | Die Umsetzung des Plans dauert länger. | Реализация плана занимает больше времени.
die Verantwortung | ответственность | Er trägt die Verantwortung für das Projekt. | Он несёт ответственность за проект.
delegieren | делегировать | Ein guter Chef delegiert Aufgaben. | Хороший начальник делегирует задачи.
priorisieren | расставлять приоритеты | Wir müssen die Aufgaben priorisieren. | Нам нужно расставить приоритеты задач.
`),
];
