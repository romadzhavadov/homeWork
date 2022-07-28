
  /*

  Завдання 1.

    Написати скрипт, який буде перемикати вкладки по натисканню
    на кнопки у хедері.

    

    Головна умова – змінювати файл HTML не можна.

    Алгоритм:
      1. Вибрати кожну кнопку у шапці
         + бонус вибрати одним селектором

      2. Повісити кнопку онклік
          button1.onclick = function(event) {

          }
          + бонус: один обробник на всі три кнопки

      3. Написати функцію, яка вибирає відповідну вкладку
         та додає до неї клас active

      4. Написати функцію hideAllTabs яка ховає всі вкладки.
         Видаляючи клас active з усіх вкладок

    Методи роботи:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */




      var buttons = document.querySelectorAll('.showButton');
      var tabsArray = Array.from(document.querySelectorAll('.tab'));
      
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e){
          buttons.forEach(function(btn){
            btn.classList.remove('active-btn');
          })
          e.target.classList.add('active-btn');
          hideAllTabs();
          getTabByDataTab(e.target.dataset.tab).classList.add('active');
        })
      })
      
      function getTabByDataTab(tabId) {
        return tabsArray.find(function(tab) {
          return tab.dataset.tab == tabId
        })
      }
      
      function hideAllTabs(){
        tabsArray.forEach(function(tab){
          tab.classList.remove('active');
        })
      }
      













// var a = document.querySelectorAll('.tab');
// a.forEach(item => console.log(item.dataset.tab));

//     button.onclick = function(event) {
//       if (item.dataset.tab == '1') {
//         document.querySelector.classList.toggle("active");
//       }

//       if (item.dataset.tab == '2') {
//         document.querySelector.classList.toggle("active");
//       }
//       if (item.dataset.tab == '3') {
//         document.querySelector.classList.toggle("active");
//       }
//     }
    








  //   button1.onclick = function(event) {
  //     document.querySelector('.tab');
  //     document.querySelector('[data-tab="1"]');
  //   }
    
  //  button2.onclick = function(event) {
  //    document.querySelector('.tab');
  //    document.querySelector('[data-tab="2"]');
  //   }
    
  //  button3.onclick = function(event) {
  //    document.querySelector('.tab');
  //    document.querySelector('[data-tab="3"]');
  //   }

  //   if (button1.onclick) {
  //     function showContentFirst() {
  //       contentOne.classList.toggle("active");
  //     }
  //   }

  //   if (button2.onclick) {
  //     function showContentSecond() {
  //       contentSecond.classList.toggle("active");
  //     }
  //   }
    
  //   if (button3.onclick) {
  //     function showContentThird() {
  //       contentThird.classList.toggle("active");
  //     }
  //   }

//     button1.onclick = showContentFirst;
// button2.onclick = showContentSecond;
// button3.onclick = showContentThird;

//     function showContentFirst() {
//   contentOne.classList.toggle("active");
// }
// function showContentSecond() {
//   contentSecond.classList.toggle("active");
// }
// function showContentThird() {
//   contentThird.classList.toggle("active");
// }






// const button1 = document.querySelector('[data-tab="1"]');
// const button2 = document.querySelector('[data-tab="2"]');
// const button3 = document.querySelector('[data-tab="3"]');

// //определяю в класс таб
// var contentOne = document.querySelector(".tab");

// var contentSecond = document.querySelector(".tab");

// var contentThird = document.querySelector(".tab");

// // и как определять с соответствующим дата-табом?

// // навесил кнопка онклик
// button1.onclick = showContentFirst;
// button2.onclick = showContentSecond;
// button3.onclick = showContentThird;
// // функции онклик
// function showContentFirst() {
//   contentOne.classList.toggle("active");
// }
// function showContentSecond() {
//   contentSecond.classList.toggle("active");
// }
// function showContentThird() {
//   contentThird.classList.toggle("active");
// }



//     const buttons = [1, 2, 3];
// // console.log(buttons);
// const onclick = event => {
//  // console.log(event.target);
//  const tabIndex = event.target.getAttribute('data-tab');
//  // console.log(tabIndex);
//  const tab = document.querySelector(.tab[data-tab="${tabIndex}"]);
//  // console.log(tab);
//  tab.classList.add('active');
//  // tab.classList.remove('active');
// };

// function addClickLisener() {
//  buttons.forEach((button) => {
//   const currentButton = document.querySelector([data-tab="${button}"]);
//   currentButton.addEventListener('click', onclick);
//  });
// }