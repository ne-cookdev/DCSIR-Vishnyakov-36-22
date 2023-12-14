"use strict"

let goods = document.getElementById('goods');
let price = document.getElementById('price');
let cartId = document.getElementById('cart');

function dragStart(event) {
    let good = event.target.closest('.good');

    good.ondragstart = function () {
        return false;
    }

    let shiftX = event.clientX - good.getBoundingClientRect().left;
    let shiftY = event.clientY - good.getBoundingClientRect().top;

    good.style.position = 'absolute';

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        good.style.left = pageX - shiftX + 'px';
        good.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    good.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        good.onmouseup = null;
    };
};

function dragStop(event) {
    let good = event.target.closest('.good');

    good.style.display = 'none';
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    good.style.display = 'flex';

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.cart');

    if (droppableBelow != null) {
        if (event.currentTarget.closest('.cart') == null) {
            droppableBelow.append(good);
            price.innerHTML = parseInt(price.innerHTML) + parseInt(good.lastElementChild.lastElementChild.innerHTML);
        }
    } else {
        if (event.currentTarget.closest('.cart') != null) {
            goods.append(good);
            price.innerHTML = parseInt(price.innerHTML) - parseInt(good.lastElementChild.lastElementChild.innerHTML);
        }
    }
    good.style.position = 'relative';
    good.style.top = 0;
    good.style.left = 0;
}


goods.onmousedown = dragStart;
cartId.onmousedown = dragStart;

goods.onmouseup = dragStop;
cartId.onmouseup = dragStop;
