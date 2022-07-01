@@include('./partials/swiper-bundle.min.js')

const swiperProducts = new Swiper('.swiper-products', {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3.5,
        }
    }
})