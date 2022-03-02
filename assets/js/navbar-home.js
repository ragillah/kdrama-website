$(document).ready(() => {
    setBrand();
});

$(document).scroll(() => {
    setBrand();
    scrollFunction();
});

function setBrand() {
    if ($(window).innerWidth() > 576) {
        $(".nav-brand").removeClass("d-none");
    } else {
        $(".nav-brand").addClass("d-none");
        $(".nav-toggler-open").addClass("ms-auto");
    }
}

function scrollFunction() {
    if ($(document).scrollTop() > 180) {
        $("nav").addClass("bg-dark");
        $(".nav-brand").removeClass("d-none");
    } else {
        $("nav").removeClass("bg-dark");
    }
}
