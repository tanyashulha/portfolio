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

//Projects slider

const swiper = new Swiper('#projects', {
  slidesPerView: 1,
  mousewheel: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Show description on click for mobile

let toggleButtons = [...document.getElementsByClassName('show')];
toggleButtons.forEach( (toggleButton) => {
  toggleButton.addEventListener('click', function() {
    toggleButton.innerHTML =
      (toggleButton.innerHTML === 'show') ? toggleButton.innerHTML = 'close' : toggleButton.innerHTML = 'show';
  })
  toggleButton.onclick = () => {
    toggleButton.classList.toggle('active');
    let showDescriptions = [...document.getElementsByClassName('show-description')];
    showDescriptions.forEach((showDescription) => {
      showDescription.classList.toggle('active');
    })
  }
})
