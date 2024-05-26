$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 1000,
    loop: true,
    nav:true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },

       1000: {
            items: 3
        }
    }
});