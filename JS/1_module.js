// 1 Запросіть у користувача його ім’я та виведіть у відповідь
// «Привіт, (його ім’я)!».
// const  _NAME = prompt("Пожалуйста, представьтесь?");
// alert(`Привет ${_NAME}`);


// 2. Запросіть у користувача його рік народження, підрахуйте
// скільки йому років і виведіть результат. Поточний рік
// вкажіть у коді як константу.
// const  _AGE = parseInt(prompt("Пожалуйста, введите ваш год рождения")) ;
// const _year = 2023;
// const res = _year - _AGE ;
// alert(` Ваш возраст: ${res}`);

// 3. Запросіть у користувача довжину сторони квадрата та
// виведіть його периметр.
// const _P = parseFloat(prompt("Пожалуйста, введите длину стороны квадрата")) ;
// let result_P = _P * 4;
// alert(`Периметр квадрата: ${result_P} ` )

// 4. Запросіть у користувача радіус кола та виведіть його пло-
// щу.
// const _R = parseFloat( prompt("Пожалуйста, введите радиус круга"));
// const _PI = 3.14;
// let result_S = _PI * Math.pow(_R, 2);
// alert(`Площина круга: ${result_S}`);

// 5. Запросіть у користувача відстань у кілометрах між двома
// містами та за скільки годин він хоче дістатися. Порахуйте
// швидкість, з якою потрібно рухатися, щоб встигнути вчас-
// но.
// const _Distance = parseFloat( prompt('Пожалуйста, введите расстояние в км между двумя городами'));
// const _HOURS_OF_TRAVEL = parseFloat( prompt('Укажите за сколько часов вы хотите добраться до места назначения'))
// let travelSpeed = _Distance / _HOURS_OF_TRAVEL;
// alert( `Для того, что бы вовремя добраться до места назначения, вам нужно двигаться со скорость: ${travelSpeed.toFixed(0)}  км/час`);

// 6. Реалізуйте конвертор валют. Користувач вводить долари,
// програма конвертує у євро. Курс валюти зберігайте у кон-
// станті.
// const _AMOUNT = parseInt( prompt('Введите количество долларов для конвертации в евро'))
// const USD_TO_EUR = 0.91;
// let result = _AMOUNT * USD_TO_EUR
// alert(`${_AMOUNT} долларов это\n ${result.toFixed(2)} евро `)

// 7. Користувач вказує обсяг флешки у ГБ. Програма має під-
// рахувати скільки файлів розміром 820 МБ вміститься на
// флешку.
// const _CAPACITY_USB = parseInt( prompt('Введите объём флешки'))
// const _FILE = 820
// const _Mb = _CAPACITY_USB * 1024;
// const countFile = (_Mb / _FILE).toFixed(0);
// alert(`Количество файлов, которое поместиться на флешку: ${countFile}`)

// 8. Користувач вводить суму грошей у гаманці та вартість
// однієї шоколадки. Програма виводить скільки шоколадок
// може купити користувач і скільки здачі в нього залишить-
// ся.
// const _MONEY = parseFloat( prompt("Сколько денег у вас есть?"));
// const _СHOCOLATE = parseFloat ( prompt("Стоимость 1 шоколадки:"));
// const amount_Сhocolate = _MONEY / _СHOCOLATE;
// const your_Сhange = _MONEY % _СHOCOLATE;
// alert(`Количество шоколадок которое вы можете купить: ${(Math.trunc (amount_Сhocolate))} \n\n Ваша сдача: ${your_Сhange}`);

// 9. Запросіть у користувача тризначне число і виведіть його
// паліндром (число-перевертень). Для вирішення завдання
// вам знадобиться оператор % (залишок від ділення).
// let Num = parseInt( prompt(`Введите число:`))
// let copyNum = Num;
// let reverse = 0;

// while(copyNum > 0){ 
//   let digit = copyNum % 10;
//   reverse = (reverse * 10) + digit;
//   copyNum = parseInt(copyNum / 10);
// }
// alert(`Обратный порядок: ${reverse}`);



// 10. Запросіть у користувача ціле число і виведіть у відповідь
// парне або непарне. В завданні використовуйте логічні
// оператори і не використовуйте if та switch.
// const _NUMBER  = parseInt( prompt('Введите целое число'))
// let resultNumber = (_NUMBER % 2 == 0)
// alert(`Число: ${resultNumber} ` );
