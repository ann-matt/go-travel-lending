const swiperTestimonial = new Swiper('.testimonial__swiper', {

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