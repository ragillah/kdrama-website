$(document).ready(() => {
    $(".nav-toggler-open").click(() => {
        $("body").addClass("disabled");
        $("nav").addClass("show");
        $(".nav-toggler-open").addClass("d-none");
    });

    $(".nav-toggler-close").click(() => {
        $("body").removeClass("disabled");
        $("nav").removeClass("show");
        $(".nav-toggler-open").removeClass("d-none");
    });
});
