/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/


function Dog(name, breed, status) {
  this.name = name;
  this.breed = breed;
  this.status = status;

  this.changeStatus = function () {
    console.log('Собака ' + this.name + ' бежит');
    console.log('Собака ' + this.name + ' есть')
  };
  this.showProps = function () {
    let self = this;
    for (key in self) {
      if (typeof self[key] == 'function') {
        continue;
    }
      console.log('Свойства обьекта:'+ key + ' = ' + self[key]);
      var dogEntries = Object.entries(self);
      console.log(dogEntries);
    }
  };
}


var dog1 = new Dog('Jack', 'pug', 'idle');
console.log(dog1);    


