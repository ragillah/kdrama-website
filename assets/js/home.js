$(document).ready(() => {
    setBrand();

    $(".search-toggle").click(() => {
        $("html").css("overflow-y", "hidden");
        $("body").addClass("p-0");
    });
    $(".btn-modal").click(() => {
        $("html").css("overflow-y", "");
    });
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
        $("nav").css("background", "linear-gradient(315deg, #292e38, #343d50)");
        $("nav").addClass("shadow");
        $(".nav-brand").removeClass("d-none");
    } else {
        $("nav").css("background", "transparent");
        $("nav").removeClass("shadow");
    }
}
