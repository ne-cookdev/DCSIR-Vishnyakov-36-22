"use strict"

$("nav").on("click", function () {
    var elems = $('.ham_menu_lines');
    for (var i = 0; i < elems.length; i++) {
        elems.toggleClass('ham_menu_close');
        $('#body_tinter').toggleClass('body_tint');
    }
})
