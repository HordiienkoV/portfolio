const swiper = new Swiper('.swiper', {
    loop: true,
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 24,
    centeredSlides: true,
    breakpoints: {
        767: {
            slidesPerView: 1.5
        },
        599: {
            slidesPerView: 1,
        }
    }
})




