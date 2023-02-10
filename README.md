# wb-nsp
Wirenboard &amp; Sonoff NSPanel  through ESPHOME intrgration 
Попытка состыковать Wirenboard  и Sonoff NSPanel через прошивку ESPHOME 
Основаная ветка - прошивка рум-контролера, размещенного в коридоре у санузла и позволяющего управлять санузлом и освещением в коридое.

Задача: Cделать панель-рум контроллер для каждой комнаты с приятынм дизайном который:
1) Будет подключаться напрямую к  mqtt wirenboard и работать локально
2) Будет управлять исполнительными устройствами wb через mqtt
3) Будет отображаться статус  и состояние тех или иных выходов или контролов
4) Легко кастомизируется

Основаня концепция:
1) Экран nextion - глупый выключатель, набор кнопок с простой кастомзацией и минимумом логки в прошивке экрана с целью макисмальной доступности
2) ESPHome - так же минимальный набор функций обеспечаивющих плучение/передачу и конвертацию данных от экрана в mqtt брокер WB и обратно без лишних автоматизаций.
3) Обработка сложных событий, скрипты, сценарии - все раелизуется через wb-rules
