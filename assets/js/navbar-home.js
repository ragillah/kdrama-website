// NAVBAR [START]
document.addEventListener("DOMContentLoaded", function (event) {
    setBrand();
});

window.onscroll = function () {
    setBrand();
    scrollFunction();
};

function setBrand() {
    if (window.innerWidth > 576) {
        document.getElementById("brand").style.display = "inline";
    } else {
        document.getElementById("brand").style.display = "none";
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("nav").style.background = "#292e38";
        document.getElementById("brand").style.display = "inline";
        document.getElementById("btn-go-top").style.opacity = 1;
        document.getElementById("btn-go-top").style.cursor = "pointer";
    } else {
        document.getElementById("nav").style.background = "rgba(255, 0, 0, 0)";
        document.getElementById("btn-go-top").style.opacity = 0;
        document.getElementById("btn-go-top").style.cursor = "default";
    }
}

var togglerOpen = document.querySelector("#togglerOpen");
var togglerClose = document.querySelector("#togglerClose");

togglerOpen.addEventListener("click", function () {
    togglerOpen.classList.add("d-none");
    togglerClose.classList.remove("d-none");
});

togglerClose.addEventListener("click", function () {
    togglerClose.classList.add("d-none");
    togglerOpen.classList.remove("d-none");
});
// NAVBAR [END]
