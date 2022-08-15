/*
Завдання:

  Написати клас SuperDude, який як аргумент приймає два параметри:
    - Ім'я
    - Масив суперздібностей, які є об'єктом.

    Модель суперздатності:
      {
        // Ім'я здібності
        name:'Invisibility',
        // Повідомлення, яке буде виведено коли здатність була викликана
        spell: function(){ return `${this.name} hide from you`}
      }

    У конструкторі потрібно:
    - зробити так, щоб ім'я не можна було перезаписувати і привласнити йому те
      значення, яке ми передали як аргумент.

    - перебрати масив здібностей і на кожну з них створити метод для цього
      об'єкта, використовуючи поле name як назву методу, а spell як то,
      що потрібно повернути в console.log під час виклику цього методу.
    - всі здібності повинні бути незмінними

    - бонус, створити конструктор суперздатностей -> new Spell (name, spellFunc);
*/

  // class SuperDude {
    
  // }

  // let superPowers = [
  //   { name:'Invisibility', spell: function(){ return `${this.name} hide from you`} },
  //   { name:'superSpeed', spell: function(){ return `${this.name} running from you`} },
  //   { name:'superSight', spell: function(){ return `${this.name} see you`} },
  //   { name:'superFroze', spell: function(){ return `${this.name} will froze you`} },
  //   { name:'superSkin',  spell: function(){ return `${this.name} skin is unbreakable`} },
  // ];

  // let Luther = new Dude('Luther', superPowers);
  //     // Тестування: Методи повинні працювати та виводити повідомлення.
  //     Luther.superSight();
  //     Luther.superSpeed();
  //     Luther.superFroze();
  //     Luther.Invisibility();
  //     Luther.superSkin();

  class SuperDude {
    constructor(name, ArrSuperProp){

      this.name = name;
      this.ArrSuperProp = ArrSuperProp;
      this.ArrSuperProp.forEach(item => {

      Object.defineProperty(
        this,
        item.name,
        {
          value: item.spell,
          writable: false,
          configurable: false,
          enumerable: true
        }
      );
      })
    }

  }

  function Spell(obj){

    let self = this;
    Object.defineProperty(
      self,
      "name",
      {
        value: obj.name,
        writable: false,
        configurable: false,
        enumerable: true
      }
    );

    this.spell = obj.spell;
  } 

  let superPowers = [
    new Spell({ name:'Invisibility', spell: function(){ return `${this.name} hide from you`} }),
    new Spell({ name:'superSpeed', spell: function(){ return `${this.name} running from you`} }),
    new Spell({ name:'superSight', spell: function(){ return `${this.name} see you`} }),
    new Spell({ name:'superFroze', spell: function(){ return `${this.name} will froze you`} }),
    new Spell({ name:'superSkin',  spell: function(){ return `${this.name} skin is unbreakable`} })
  ];

  superPowers.forEach(function(item){
    Object.defineProperty(
      item,
      item.name,
      {
        value: item.spell,
        writable: false,
        configurable: false,
        enumerable: false
      }
    );
  });

  let Luther = new SuperDude('Luther', superPowers);
      //Тестування: Методи повинні працювати та виводити повідомлення.
      // Luther.superSight();
      // Luther.superSpeed();
      // Luther.superFroze();
      // Luther.Invisibility();
      // Luther.superSkin();
