const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: false,
    },
  },
});
