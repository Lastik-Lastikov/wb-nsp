//Виртуальные часы для получения данных панелями.
defineVirtualDevice("date_time", {
    title: "Часы" ,
    cells: {
      date: {
        title: "Дата",
	    type: "test",
	    value: ""
	    },
      time: {
        title: "Время",
	    type: "test",
	    value: ""
	    }

    }
});
setInterval( function() { dev["date_time/time"] = Date().substr(11, 5)}, 5000);
setInterval( function() { dev["date_time/date"] = Date().substr(0, 10)}, 5000);
//Настройки панели 
//Название виртуального девайса должно совпадать с названием ноды панели в yaml - файле
defineVirtualDevice('nspbathroom', {
    title: 'NSP Bathroom' ,
    cells: {
	   Brightness: {
        title: "Яркость",
	    type: "range",
	    value: 100,
        max: 100,
        min: 0
	    },
       Backlight: {
        title: "Подсветка",
	    type: "switch",
	    value: true
	    },
    }
})
/* Включаем/выключаем подсветку панели по датчику движения. В данном проекте не используется так, как панель размещена вне зоны датчика. 
//задаем название функции и переменные в ней в скобках
function makeMotionDetector(name, timeout_ms, detector_control, detector_size, relay_control) {
//объявляем переменную идентификатора таймера и очищаем ее (пусто/ложь)
var motion_timer_id = null;
//объявляем правило с названием из еременно
  defineRule(name, {
//при изменении значения переменной детектор контрол:
      whenChanged: detector_control,
//забираем текущее значение измененного параметра детектор контрола в виде newValue, имя устройства devName и имя параметра cellName
      then: function(newValue, devName, cellName) {
//если новое значение  детектор контроля больше переменной детектор контрол (больше порога освещенности) то выполняются операции в фигурных скобках
          if (newValue > detector_size) {
//включаем реле
              if (!dev[relay_control]) {
                dev[relay_control] = true;
              }
//если переменная таймера не пустая и таймер уже работает 
              if (motion_timer_id) {
//то останавливаем этот таймер потому что было опять движение выше
                  clearTimeout(motion_timer_id);

              }
// запускаем новый  таймер и прсваиваем его идентификатор переменной таймер ид
              motion_timer_id = setTimeout(function() {
//тут описано что случится когда таймер закончит отсчет  
                //выключаем реле
                if (dev[relay_control]) {
                dev[relay_control] = false;
                }
//забываем таймер
                  motion_timer_id = null;
//тт время работы таймера в МС которое забираем из переменной
              }, timeout_ms);

          }

      }

  });

}
makeMotionDetector("nsp_bedroom2_motion", 15000, "wb-msw-v3_140/Max Motion", "300", "nsp-bedroom2/Screen");
*/
