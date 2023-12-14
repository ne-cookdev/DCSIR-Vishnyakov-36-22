"use strict";

//task1
let notificationBody = document.getElementById('notification_body');
notificationBody.dataset.after = 4;
let timer = null;

function createNotification(message) {
    const notificationList = document.getElementById('noty_list');

    const notification = document.createElement('li');
    notification.textContent = message;

    notificationList.appendChild(notification);
}

function addNotification() {
    notificationBody.dataset.after++;
    const message = `${notificationBody.dataset.after}`;

    createNotification(message);

    timer = setTimeout(addNotification, 3000);
}

timer = setTimeout(addNotification, 3000);

function delay(func, delayTime) {
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delayTime);
    };
}

const delayedAddNotification = delay(addNotification, 10000);

notificationBody.addEventListener("mouseenter", function () {
    delayedAddNotification();
});



//task3
function createListItem() {
    let userInput = prompt('Введите содержимое пункта списка:');

    if (userInput === null || userInput.trim() === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerText = userInput;

    document.getElementById('list').appendChild(listItem);

    createListItem();
}

//task4
function showNotification(options) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = options.content;

    document.body.appendChild(notification);

    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
        document.body.removeChild(notification);
    }, 1500);
}


showNotification({
    content: 'Это уведомление!'
});
