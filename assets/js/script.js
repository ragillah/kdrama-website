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
    // $("body").attr("oncontextmenu", "return false");
    // $("body").attr("onselectstart", "return false");
    // $("body").attr("ondragstart", "return false");
});

// $(document).keydown(function (event) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
//         return false;
//     }
//     else if(event.ctrlKey&&(event.which==65||event.which==66||event.which==67||event.which==80||event.which==83||event.which==85||event.which==86)) {
//         return false;
//     }
// });