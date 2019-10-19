"use strict";


//Main slider
const mainSlider = new Swiper('#main-slider', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

//Education

document.getElementById('click-block').onclick = function() {
  document.getElementById('click-block').classList.toggle('active');
  document.getElementById('result').classList.toggle('slide-descr-active');
}

//Projects

var swiper = new Swiper('#projects', {
  slidesPerView: 1,
  mousewheel: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});