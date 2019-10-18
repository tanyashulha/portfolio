"use strict";

var swiper = new Swiper('#main-slider', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
});