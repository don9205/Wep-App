$(document).ready(function () {

    $('.ham-menu').click(function () {
        $('.sidebar').animate({ right: '0' }, 1000);

    });
    $('.sidebar-close').click(function () {
        $('.sidebar').animate({ right: '-200px' }, 1000);
    });

    var swiper = new Swiper('.contents.swiper-container');

    var titleSwiper = new Swiper('.title.swiper-container', {
        slidesPerView: 9,
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true
    });

    var autoplaySwiper = new Swiper('.autoplay.swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
    });


    swiper.controller.control = titleSwiper;
    titleSwiper.controller.control = swiper;

    // 클릭했을 때만 페이지가 넘어가게 하는 코드
    // $('.carousel').carousel('pause');

    new daum.roughmap.Lander({
        "timestamp": "1546584208365",
        "key": "rn7o",
        "mapWidth": "800",
        "mapHeight": "500"
    }).render();

});