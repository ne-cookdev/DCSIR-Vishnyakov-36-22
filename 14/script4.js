"use strict"

let backLine = document.getElementById('back_line');
let slider = document.getElementById('slider');

let backLineRect = backLine.getBoundingClientRect();
let backLineRectWithScroll = {};
backLineRectWithScroll.top = backLineRect.top + pageYOffset;
backLineRectWithScroll.left = backLineRect.left + pageXOffset;


slider.onmousedown = function (e) {
    slider.ondragstart = function () {
        return false;
    }

    let sliderRect = slider.getBoundingClientRect();
    let sliderRectWithScroll = {};
    sliderRectWithScroll.top = sliderRect.top + pageYOffset;
    sliderRectWithScroll.left = sliderRect.left + pageXOffset;

    let rightBoundary = backLine.offsetWidth - slider.offsetWidth;

    let shiftX = e.pageX - sliderRectWithScroll.left;

    document.onmousemove = function (e) {
        let newLeft = e.pageX - backLineRectWithScroll.left - shiftX;

        if (newLeft < 0) newLeft = 0;
        if (newLeft > rightBoundary) newLeft = rightBoundary;
        slider.style.left = newLeft + 'px';
    }

    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    };

    return false;
};
