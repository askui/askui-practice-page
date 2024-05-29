document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slideIndicatorsContainer = document.querySelector('.slide-indicators');
  const slides = document.querySelectorAll('.slide');
  const slideIndicators = [];
  let isDown = false;
  let startX;
  let scrollLeft;

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

  function handleIndicatorClick(e) {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    carousel.scrollLeft = index * carousel.offsetWidth;
    updateSlideIndicators();
  }

  function preventImageDrag(e) {
    e.preventDefault();
  }

  function mouseDownHandler(e) {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  }

  function mouseLeaveHandler() {
    isDown = false;
    carousel.classList.remove('active');
  }

  function mouseUpHandler() {
    isDown = false;
    carousel.classList.remove('active');
  }

  function mouseMoveHandler(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
    updateSlideIndicators();
  }

  function handleWheelScroll(e) {
    if (e.deltaMode === WheelEvent.DOM_DELTA_PIXEL && Math.abs(e.deltaY) < 1) {
      e.preventDefault();
      carousel.scrollLeft += e.deltaX;
      updateSlideIndicators();
    }
  }

  carousel.addEventListener('touchstart', handleTouchStart);
  carousel.addEventListener('touchend', handleTouchEnd);
  carousel.addEventListener('mousedown', mouseDownHandler);
  carousel.addEventListener('mouseleave', mouseLeaveHandler);
  carousel.addEventListener('mouseup', mouseUpHandler);
  carousel.addEventListener('mousemove', mouseMoveHandler);
  carousel.addEventListener('scroll', updateSlideIndicators);
  carousel.addEventListener('wheel', handleWheelScroll);

  slides.forEach((slide, index) => {
    const slideIndicator = document.createElement('div');
    slideIndicator.classList.add('slide-indicator');
    slideIndicator.setAttribute('data-index', index);
    slideIndicator.addEventListener('click', handleIndicatorClick);
    slideIndicatorsContainer.appendChild(slideIndicator);
    slideIndicators.push(slideIndicator);

    const img = slide.querySelector('img');
    if (img) {
      img.addEventListener('dragstart', preventImageDrag);
    }
  });

  updateSlideIndicators();
});

document.addEventListener('DOMContentLoaded', () => {
  const mouseElement = document.querySelector('.mouseElement');
  
  function updateMouseElement(backgroundColor, textContent) {
    mouseElement.style.backgroundColor = backgroundColor;
    mouseElement.textContent = textContent;
    mouseElement.style.color = 'black';
  }

  function handleLeftDoubleClick(e) {
    if (e.button === 0) {
      console.log('Double Left click detected');
      updateMouseElement('lightgreen', 'Double Clicked Left Mouse Key');
    }
  }

  function handleRightDoubleClick(e) {
    e.preventDefault();
    if (e.button === 2) {
      console.log('Double Right click detected');
      updateMouseElement('lightcoral', 'Double Clicked Right Mouse Key');
    }
  }

  function handleMiddleDoubleClick(e) {
    if (e.button === 1) {
      console.log('Double Middle click detected');
      updateMouseElement('lightblue', 'Double Clicked Middle Mouse Key');
    }
  }

  mouseElement.addEventListener('dblclick', handleLeftDoubleClick);
  mouseElement.addEventListener('contextmenu', handleRightDoubleClick);
  mouseElement.addEventListener('mousedown', handleMiddleDoubleClick);
});