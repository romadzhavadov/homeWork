

    /*

        Документація:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Перевірка всіх полів форми на валідність
        form.reportValidity() > Перевіряє всі поля на валідність та виводить повідомлення з помилкою

        formElement.validity > Об'єкт із параметрами валідності поля
        formElement.setCustomValidity(message) > Метод, який задасть validity.valid = false, і при спробі відправки
            повідомлення виведе message у браузерний потрапив

        Класи для стилізації стану елемента
        input:valid{} // hover
        input:invalid{} // firstchild

        
        Завдання:
        
        Використовуючи браузерне API для валідації форм, реалізувати валідацію наступної форми:

        - Ім'я користувача: type:text -> validation: required; minlength = 2;
            Якщо порожнє вивести повідомлення: "Як тебе звуть друже?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Якщо емейл не валідний вивести повідомлення "Ну й дарма, не отримаєш бандероль із яблуками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";
        - Кількість з'їдених яблук: type: number -> validation: required; minlength = 1; validNumber;
            Якщо кількість 0 вивести ерор з повідомленням "Ну хоч поїсти трохи... Яблука смачні"
        - Дякуємо за яблука: type: text -> validation: required;
            Якщо текст !== "дякую" вивести ерор з повідомленням "Фу, невдячний(-а)!" використовуючи setCustomValidity();

        - згоден на навчання: type: checkbox -> validation: required;
            Якщо не вибрано вивести ерор з повідомлення: "Неосвічені живуть довше! Добре подумай!"

        Внизу дві кнопки:

        1) Звичайний submit який відправить форму, якщо вона валідна.
        2) Кнопка Validate(Перевірити) яка запускає методи:
            - yourForm.checkValidity: та виводить на сторінку повідомлення з результатом перевірки
            - yourForm.reportValidity: викликає перевірку всіх правил та виведення повідомлення з помилкою, якщо така є

    */


        let myForm = document.getElementById('mainForm');   
        let submitBtn = document.getElementById('submitBtn');
        let validateBtn = document.getElementById('validateBtn');

        var cleanValidationMessage = function() {
            let arrOfInputs = Array.from(myForm.elements);
            arrOfInputs.forEach( item => {
                item.setCustomValidity('');
            })
        }

        submitBtn.addEventListener('click', function(e) {
            cleanValidationMessage();

            if (myForm.userName.value.length === 0){
                myForm.userName.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
            } 

            if (!myForm.userEmail.validity.valid) {
                myForm.userEmail.setCustomValidity('Ну и зря, не получишь бандероль с яблоками!');
            }

            if (!myForm.userPassword.validity.valid) {
                myForm.userPassword.setCustomValidity('Я никому не скажу наш секрет');
            }

            if (!myForm.appleCount.validity.valid) {
                myForm.appleCount.setCustomValidity('Ну хоть покушай немного... Яблочки вкусные');
            }   

            if (myForm.blockThanks.value !== 'спасибо'){
                myForm.blockThanks.setCustomValidity("Фу, неблагодарный(-ая)!");
            }

            if (!myForm.agreeToStudy.validity.valid) {
                myForm.agreeToStudy.setCustomValidity('Необразованные живут дольше! Хорошо подумай!');
            }
        })

        myForm.validateBtn.addEventListener('click', function(){
            if(!myForm.checkValidity()){
                alert('please provide correct info');
            } else {
                alert('Good job, the form is good to be submitted');
            } 

            myForm.reportValidity();  
        });