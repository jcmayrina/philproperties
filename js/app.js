$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.2,
    },
    600: {
      items: 3,
    },
    1300: {
      items: 4.5,
    },
  },
});
