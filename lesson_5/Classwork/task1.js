/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

var train = {};
train.name = 'Train';
train.speed = '100km/h';
train.passenger = 20;
train.drive = function () {
    console.log('Поезд' + train.name + 'везет' + train.passenger + 'со скоростью' + train.speed);
}
train.stop = function () {
    console.log('Поезд' + train.name + 'остановился. Скорость' + train.speed);
}
train.upPassengers = function (x) {
    if (x === undefined) {
        alert('x si  not provited, try again');
        return
    }
    train.passenger += x;
    console.log('Увеличивает кол-во пассажиров' + ( + train.passenger));
}