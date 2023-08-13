const btnUp = {
  el: document.querySelector('.footer__box-btn'),

  addEventListener() {
    document.querySelector('.footer__box-btn').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    901: {
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: 3,
    }
  },
});

const accordion = document.querySelector('.accordion');
const accordionTitles = accordion.querySelectorAll('.accordion__title');

accordionTitles.forEach.call(accordionTitles, function (accordionTitle) {
  accordionTitle.addEventListener('click', function () {

    const currentText = accordionTitle.parentElement.querySelector('.accordion__text');

    accordionTitle.classList.toggle('accordion__title--active');
    currentText.classList.toggle('accordion__text--visible');

    if (currentText.classList.contains('accordion__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null
    }
  });
});

const menuBtn = document.querySelector('.header__menu-btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});