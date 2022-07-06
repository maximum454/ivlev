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

const burger = document.getElementById('burger');

burger.addEventListener('click', function (e){
    let target = e.currentTarget;
    let menu = document.getElementsByClassName('header__dropdown-menu');
    menu[0].classList.toggle('active');
    target.classList.toggle('active')
})