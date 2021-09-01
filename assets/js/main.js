/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    reset: true
});

sr.reveal('#title-genre',{}); 
sr.reveal('.subtitle-services',{delay: 200});
sr.reveal('#card',{delay: 400});
// sr.reveal('.img-fluid',{ interval: 200}); 