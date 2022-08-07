/*

    Завдання написати простий слайдер.

    Є масив із картинками з яких має складатися наш слайдер.
    За замовчуванням виводимо перший елемент нашого слайдера в блок з id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По кліку на PrevSlide/NextSlide показуємо попередній або наступний слайд відповідно.

    Для цього необхідно написати 4 функції, які будуть:

    1. Спрацювати на подію load об'єкта window та завантажувати наш слайд за замовчуванням.
    2. RenderImage -> Очищати поточний вміст блоку #slider. Створювати нашу картинку і через метод апенд чайлд вставляти її в слайдер.
    3. NextSlide -> По кліку на NextSilde передавати currentPosition поточного слайда + 1 у функцію рендеру
    4. PrevSlide -> Теж саме що попередній варіант, але на кнопку PrevSlide і передавати currentPosition - 1
      + бонус зробити так що б при досягненні останнього та першого сладу вас після кидало на перший та останній слайд відповідно.
      + Бонс анімація появи слайдів через навішування додаткових стилів

*/

  var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;
  var sliders = document.querySelector('#slider');
  var btnNext = document.getElementById('NextSilde');
  var btnPrev = document.getElementById('PrevSilde');
  
  window.addEventListener('load', function(){
    renderImage(currentPosition);
    
    btnNext.addEventListener('click', function(){
      nextSlide(currentPosition);
    });

    btnPrev.addEventListener('click', function(){
      prevSlide(currentPosition);
    });
  })
 
  

  let renderImage = function (index) {
    var image = document.createElement('img');
    image.src = OurSliderImages[index];
    sliders.innerHTML = '';

    sliders.appendChild(image);

    // setTimeout(()=> slide.classList.add('animate'), 0);
  }

  function nextSlide() {
    if (currentPosition === OurSliderImages.length - 1) {
      currentPosition = 0;
    } else {
      currentPosition += 1;
    }
    
    renderImage(currentPosition);    
  }

  function prevSlide() {
    if (currentPosition === 0) {
      currentPosition = OurSliderImages.length - 1;
    } else {
      currentPosition -= 1;
    }
    renderImage(currentPosition);
  }


  // let SildeMinus = document.querySelector("#PrevSilde");
  // let SildePlus = document.querySelector("#NextSilde");

  // SildeMinus.addEventListener('click', PrevSildeMinus); 
  // SildePlus.addEventListener('click', NextSildePlus);
  
  // let PrevSildeMinus = function () {
  //   for (currentPosition = 0; i < OurSliderImages.length; i++) {
  //     OurSliderImages[i - 1];
  //     break;
  //   }
  // };

  // let NextSildePlus = function () {
  //   for (currentPosition = 0; i < OurSliderImages.length; i++) {
  //     OurSliderImages[i + 1];
  //     break;
  //   }
  // };