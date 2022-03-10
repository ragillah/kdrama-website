$(document).ready(() => {
    if ($(window).innerWidth() > 576) {
        $(".tilt").tilt({
            maxTilt: 5,
            speed: 300,
            glare: true,
            maxGlare: 0.2,
        });
    } else {
        $(".tilt").tilt({
            maxTilt: 0,
            speed: 0,
            glare: false,
        });
    }
});
