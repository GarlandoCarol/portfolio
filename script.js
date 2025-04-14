document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider-wrapper');

    document.addEventListener('DOMContentLoaded', () => {
        const swipers = document.querySelectorAll('.mySwiper');
      
        swipers.forEach((slider) => {
          new Swiper(slider, {
            cssMode: true,
            navigation: {
              nextEl: slider.querySelector('.swiper-button-next'),
              prevEl: slider.querySelector('.swiper-button-prev'),
            },
            pagination: {
              el: slider.querySelector('.swiper-pagination'),
              clickable: true,
            },
            mousewheel: true,
            keyboard: true,
          });
        });
      });