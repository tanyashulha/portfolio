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

document.getElementById('click-block').onclick = function() {
  document.getElementById('click-block').classList.toggle('active');
  document.getElementById('result').classList.toggle('slide-descr-active');
}