@@include('./partials/swiper-bundle.min.js')
@@include('./partials/remodal.js')
@@include('./partials/jquery.mask.js')

const swiperProducts = new Swiper('.swiper-products', {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 33,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
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

$(function (){
    $('.js-phone-mask').mask('+7 (000) 000-00-00');


    $('.js-recipes-link').on('click', function (){
        if ($(this).text() === "свернуть") {
            $(this).text('Развернуть');
        } else {
            $(this).text('свернуть');
        }
        $('.recipes__text').toggleClass('hide');
        return false;
    })
})

