document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        // Получаем значения из полей с новыми ID
        var name = document.getElementById('order-name').value;
        var surname = document.getElementById('order-surname').value;
        var phone = document.getElementById('order-phone').value;
        var destination = document.getElementById('order-destination').value;
        var date = document.getElementById('order-date').value;
        var time = document.getElementById('order-time').value;
        var quantity = document.getElementById('order-quantity').value;
        var payment = document.getElementById('order-payment').value;
        
        // Валидация 
        if (!name) {
            alert('Пожалуйста, введите имя!');
            return;
        }
        if (!surname) {
            alert('Пожалуйста, введите фамилию!');
            return;
        }
        if (!phone) {
            alert('Пожалуйста, введите телефон!');
            return;
        }
        if (!destination) {
            alert('Пожалуйста, введите место назначения!');
            return;
        }
        if (!date) {
            alert('Пожалуйста, выберите дату!');
            return;
        }
        if (!time) {
            alert('Пожалуйста, выберите время!');
            return;
        }
        if (!quantity || quantity < 1) {
            alert('Пожалуйста, укажите количество (минимум 1)!');
            return;
        }
        if (!payment) {
            alert('Пожалуйста, выберите метод оплаты!');
            return;
        }
        
        // Если всё правильно
        var message = 'Ваш заказ:\n\n' +
                     'Имя: ' + name + '\n' +
                     'Фамилия: ' + surname + '\n' +
                     'Телефон: ' + phone + '\n' +
                     'Место назначения: ' + destination + '\n' +
                     'Дата: ' + date + '\n' +
                     'Время: ' + time + '\n' +
                     'Количество: ' + quantity + '\n' +
                     'Метод оплаты: ' + payment;
        
        alert(message);

    });
});



// Меняем цвет кнопки "Отправить заказ" при наведении
var orderButton = document.getElementById('submitBtn');

orderButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
});

orderButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
    this.style.color = 'white';
});

// Находим главную картинку (в part12)
var mainImage = document.querySelector('.part12 img');

// Когда мышка наводится на картинку
mainImage.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.25)'; 
    this.style.transition = 'transform 0.3s ease'; 
});

// Когда мышка уходит с картинки
mainImage.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)'; // Возвращаем обычный размер
});

// Прячем/показываем логотип при клике на него
var logo = document.querySelector('.part11 img');

logo.addEventListener('click', function() {
    if (this.style.opacity === '0') {
        this.style.opacity = '1';
    } else {
        this.style.opacity = '0';
    }
});