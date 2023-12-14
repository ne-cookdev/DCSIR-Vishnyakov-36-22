"use strict"

let contents = document.getElementById('contents');

contents.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.closest('a')) {
        let link = event.target.closest('a').getAttribute('href');
        if (window.confirm(`Вы действительно хотите перейти на ${link}`)) {
            window.open(link);
        }
    }
})
