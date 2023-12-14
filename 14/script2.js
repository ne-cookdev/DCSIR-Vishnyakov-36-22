"use strict"

let smallPics = document.getElementById('small-pics');
let bigPic = document.getElementById('big-pic');

smallPics.addEventListener("click", function (event) {
    if (event.target.closest('img')) {
        bigPic.src = event.target.closest('img').getAttribute('src');
    }
})
