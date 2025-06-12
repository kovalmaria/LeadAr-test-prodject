document.addEventListener('DOMContentLoaded', () => {
  const SLIDE_INTERVAL = 3000;
  const container = document.querySelector('.join-us__slider-container');
  const slidesWrapper = document.querySelector('.join-us__slides');
  const slides = document.querySelectorAll('.join-us__slide');

  if (!slides.length || !container || window.innerWidth >= 768) return;

  let index = 0;
  let interval;

  const getSlideWidth = () => slides[0].offsetWidth;

  const showSlide = () => {
    const slideWidth = getSlideWidth();
    slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
  };

  const nextSlide = () => {
    index = (index + 1) % slides.length;
    showSlide();
  };

  const startSlider = () => {
    interval = setInterval(nextSlide, SLIDE_INTERVAL);
  };

  const stopSlider = () => {
    clearInterval(interval);
  };

  let startX = 0;

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopSlider();
  });

  container.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) index = (index + 1) % slides.length;
    if (diff < -50) index = (index - 1 + slides.length) % slides.length;

    showSlide();
    startSlider();
  });

  showSlide();
  startSlider();

  window.addEventListener('resize', () => {
    showSlide();
  });
})
