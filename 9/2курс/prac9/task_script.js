"use strict"


function task1() {
    let u_choice = prompt("Желаете пройти регистарцию на сайте?");

    if (u_choice == "Да") {
        alert("Круто!");
    } else {
        alert("Попробуйте ещё раз");
    }
}


function task2() {
    let login = prompt("Введите логин");

    if (login == "Админ") {
        let password = prompt("Введите пароль")
        if (password == "Я главный") {
            alert("Здравствуйте!");
        } else if (password == null) {
            alert("Отменено");
        } else {
            alert("Неверный пароль");
        }
    } else if (login == null || login == "") {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
}


function task3(currElem) {
    let unpressed = document.getElementById('first_like');
    let pressed = document.getElementById('second_like');
    let likeCounter = document.getElementById('like_counter');
    unpressed.classList.toggle('like_hide');
    pressed.classList.toggle('like_hide');
    likeCounter.classList.toggle('like_counter_pressed');
    if (unpressed.classList.contains('like_hide')) {
        likeCounter.innerHTML = Number(likeCounter.innerHTML) + 1;
    } else {
        likeCounter.innerHTML = Number(likeCounter.innerHTML) - 1;
    }
    currElem.classList.toggle('like_pressed');
}


document.addEventListener("mousemove", task4);

function task4(e) {
    let x = e.pageX;
    let y = e.pageY;
    let unpressed = document.getElementById('first_like');
    if (unpressed.classList.contains('like_hide')) {
        makeElem(x, y);
    }
}


function makeElem(x, y) {
    let img = document.createElement('img');
    img.src = "../images/telegram.png";
    img.style.height = "25px";
    img.style.position = "absolute";
    img.style.left = x + "px";
    img.style.top = y + "px";
    document.body.append(img);
}


//task1();
