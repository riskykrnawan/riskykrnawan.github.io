const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
    }
});

AOS.init({
    offset: 250,
    once: true,
});