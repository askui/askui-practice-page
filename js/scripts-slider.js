document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slideIndicatorsContainer = document.querySelector('.slide-indicators');
  const slideIndicators = [];
  let startX;

  function updateSlideIndicators() {
    const currentSlideIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);

    slideIndicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlideIndex);
    });
  }

  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 0) {
      carousel.scrollLeft += carousel.offsetWidth;
    } else {
      carousel.scrollLeft -= carousel.offsetWidth;
    }

    updateSlideIndicators();
  }

  carousel.addEventListener('touchstart', handleTouchStart);
  carousel.addEventListener('touchend', handleTouchEnd);
  carousel.addEventListener('scroll', updateSlideIndicators);

  document.querySelectorAll('.slide').forEach(() => {
    const slideIndicator = document.createElement('div');
    slideIndicator.classList.add('slide-indicator');
    slideIndicatorsContainer.appendChild(slideIndicator);
    slideIndicators.push(slideIndicator);
  });

  updateSlideIndicators();
});