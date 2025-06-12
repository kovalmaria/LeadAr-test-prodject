document.addEventListener('DOMContentLoaded', () => {
  function initSlider(containerSelector) {
    const slidesContainer = document.querySelector(`${containerSelector} .slides`);
    let slides = slidesContainer.querySelectorAll('.slide');
    let index = 0;
  
    const getSlidesPerView = () => {
      return window.innerWidth >= 1024 ? 3 :
             window.innerWidth >= 769 ? 2 : 1;
    };
  
    const cloneSlides = () => {
      const visible = getSlidesPerView();
      for (let i = 0; i < visible; i++) {
        const clone = slides[i].cloneNode(true);
        slidesContainer.appendChild(clone);
      }
      slides = slidesContainer.querySelectorAll('.slide');
    };
  
    cloneSlides();
  
    const updateSlider = (animate = true) => {
      const slideWidth = slides[0].clientWidth;
      slidesContainer.style.transition = animate ? 'transform 0.4s ease-in-out' : 'none';
      slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    };
  
    const resetLoopIfNeeded = () => {
      const maxIndex = slides.length - getSlidesPerView();
      if (index >= maxIndex) {
        index = 0;
        updateSlider(false);
      }
      if (index < 0) {
        index = slides.length - getSlidesPerView() - 1;
        updateSlider(false);
      }
    };
  
    let interval = setInterval(() => {
      index++;
      updateSlider();
      setTimeout(resetLoopIfNeeded, 400);
    }, 3000);
  
    let startX = 0;
    slidesContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      clearInterval(interval);
    });
  
    slidesContainer.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
  
      if (diff > 50) index++;
      if (diff < -50 && index > 0) index--;
  
      updateSlider();
      setTimeout(resetLoopIfNeeded, 400);
  
      interval = setInterval(() => {
        index++;
        updateSlider();
        setTimeout(resetLoopIfNeeded, 400);
      }, 3000);
    });
  
    window.addEventListener('resize', () => {
      updateSlider(false);
    });
  
    window.addEventListener('load', () => {
      updateSlider(false);
    });
  }
  
  initSlider('.section-slider');
  initSlider('.section-universe');
})
