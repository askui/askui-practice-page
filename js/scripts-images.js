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

document.addEventListener('DOMContentLoaded', () => {
  const mouseElement = document.querySelector('.mouseElement');

  function handleLeftDoubleClick(e) {
    if (e.button === 0) {
      console.log('Double Left click detected');
      mouseElement.style.backgroundColor = 'lightgreen';
      mouseElement.textContent = `Double Clicked Left Mouse Key`;
    }
  }

  function handleRightDoubleClick(e) {
    e.preventDefault();
    if (e.button === 2) {
      console.log(`Double Right click detected`);
      mouseElement.style.backgroundColor = 'lightcoral';
      mouseElement.textContent = 'Double Clicked Right Mouse Key';
    }
  }

  function handleMiddleDoubleClick(e) {
    if (e.button === 1) {
      console.log('Double Middle click detected');
      mouseElement.style.backgroundColor = 'lightblue';
      mouseElement.textContent = 'Double Clicked Middle Mouse Key';
    }
  }

  mouseElement.addEventListener('dblclick', handleLeftDoubleClick);
  mouseElement.addEventListener('contextmenu', handleRightDoubleClick);
  mouseElement.addEventListener('mousedown', handleMiddleDoubleClick);
});