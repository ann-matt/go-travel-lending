const navMenu = document.querySelector('.modal-one__container');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.getElementById('modal-close');


navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});

document.querySelector('.modal-one').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-one')) {
        navMenu.classList.remove('show-menu');
    }
})

const swiperHome = new Swiper('.home__swiper', {

  loop: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  }
});
