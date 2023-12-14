"use strict"

let container = document.getElementById('container');

container.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.closest('span')) {
        if (!(event.ctrlKey || event.metaKey)) {
            unselectAll();
        }
        event.target.closest('span').classList.toggle('selected');
    }
})

function unselectAll() {
    let spans = document.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.remove('selected');
    }
}

document.onmousedown = function () {
    return false;
}
