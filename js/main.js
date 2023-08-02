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
  slidesPerView: 3,
      spaceBetween: 16,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {

    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

    accordeonTitle.classList.toggle('accordeon__title--active');
    currentText.classList.toggle('accordeon__text--visible');

    if (currentText.classList.contains('accordeon__text--visible')) {
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