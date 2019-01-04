$(document).ready(function(){

    var swiper = new Swiper('.contents.swiper-container');

    var titleSwiper = new Swiper('.title.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide:true
      });

      swiper.controller.control = titleSwiper;
      titleSwiper.controller.control = swiper;
});