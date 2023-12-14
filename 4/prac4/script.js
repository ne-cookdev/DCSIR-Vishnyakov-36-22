"use strict"

$("nav").on("click", function () {
    var elems = $('.ham_menu_lines');
    elems.toggleClass('ham_menu_close');
    $('#open_menu_body_id').toggleClass('open_menu_body_closed');
    $('#body_tinter').fadeToggle(400);
})
