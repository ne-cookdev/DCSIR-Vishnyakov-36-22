"use strict";


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateTextCaptcha() {
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var captcha = '';

    for (var i = 0; i < 6; i++) {
        var randomIndex = getRandomInt(0, letters.length - 1);
        captcha += letters[randomIndex];
    }

    return captcha;
}


function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}


var captchaInput = document.getElementById('captchaInput');
var captchaText = document.getElementById('captchaText');
var captchaButton = document.getElementById('captchaButton');
var submitButton = document.getElementById('submitButton');
var text = "";

captchaButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (text == captchaInput.value) {
        alert('Капча пройдена');
        submitButton.disabled = false;
        captchaInput.value = ' ';
    } else {
        alert('Ошибка! Попробуйте другую капчу.');
        captchaInput.value = '';

        var num1 = getRandomInt(1, 10);
        var num2 = getRandomInt(1, 10);
        captchaText.innerText = `${num1} + ${num2} = ?`;
        text = `${num1 + num2}`;
    }
});


function initializeForm() {
    text = generateTextCaptcha();
    captchaText.innerText = text;
}

captchaInput.addEventListener('input', function () {
    captchaButton.disabled = isEmpty(captchaInput.value);
});


window.addEventListener('load', initializeForm);



var basket = document.getElementById('basket');
var addButton = document.getElementById('addButton');


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        var userInput = parseFloat(prompt('Введите количество:'));
        if (!isNaN(userInput)) {
            this.value += userInput;
        } else {
            alert('Введите корректное число.');
        }
        updateBasket();
    };
}

var accumulator = new Accumulator(5);

function updateBasket() {
    basket.textContent = 'Корзина: ' + accumulator.value;
}

function ButtonClick() {
    accumulator.read();
}

window.addEventListener('load', updateBasket);
addButton.addEventListener('click', ButtonClick);




function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
    } else {
        return str;
    }
}

textInput.addEventListener('input', function () {
    var textInput = document.getElementById('textInput');
    var maxLength = 10;
    var resultElement = document.getElementById('result');
    var truncatedString = truncate(textInput.value, maxLength);
    resultElement.innerText = 'Результат: ' + truncatedString;
});
