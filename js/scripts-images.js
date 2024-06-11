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
    carousel.scrollLeft += diff > 0 ? carousel.offsetWidth : -carousel.offsetWidth;
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
  const mouseElementDouble = document.querySelector('.mouseElementDouble');

  function updateMouseElementDouble(backgroundColor, textContent) {
    mouseElementDouble.style.backgroundColor = backgroundColor;
    mouseElementDouble.textContent = textContent;
    mouseElementDouble.style.color = 'black';
  }

  let lastLeftClickTime = 0;
  let lastRightClickTime = 0;
  let lastMiddleClickTime = 0;

  function handleLeftDoubleClick(e) {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastLeftClickTime;
    lastLeftClickTime = currentTime;

    if (e.button === 0 && timeDiff < 400) {
      console.log('Double Left click detected');
      updateMouseElementDouble('lightgreen', 'Double Left click detected');
    }
  }

  function handleRightDoubleClick(e) {
    e.preventDefault();
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastRightClickTime;
    lastRightClickTime = currentTime;

    if (e.button === 2 && timeDiff < 400) {
      console.log('Double Right click detected');
      updateMouseElementDouble('lightcoral', 'Double Right click detected');
    }
  }

  function handleMiddleDoubleClick(e) {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastMiddleClickTime;
    lastMiddleClickTime = currentTime;

    if (e.button === 1 && timeDiff < 400) {
      console.log('Double Middle click detected');
      updateMouseElementDouble('lightblue', 'Double Middle click detected');
    }
  }

  mouseElementDouble.addEventListener('click', (e) => {
    if (e.button === 0) {
      lastLeftClickTime = new Date().getTime();
    } else if (e.button === 1) {
      lastMiddleClickTime = new Date().getTime();
    } else if (e.button === 2) {
      lastRightClickTime = new Date().getTime();
    }
  });

  mouseElementDouble.addEventListener('dblclick', handleLeftDoubleClick);
  mouseElementDouble.addEventListener('contextmenu', handleRightDoubleClick);
  mouseElementDouble.addEventListener('mousedown', handleMiddleDoubleClick);

});

document.addEventListener('DOMContentLoaded', () => {
  const mouseElementSingle = document.querySelector('.mouseElementSingle');

  function updateMouseSingleElement(backgroundColor, textContent) {
    mouseElementSingle.style.backgroundColor = backgroundColor;
    mouseElementSingle.textContent = textContent;
    mouseElementSingle.style.color = 'black';
  }

  mouseElementSingle.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
      console.log('Single Left click detected');
      updateMouseSingleElement('lightgreen', 'Single Left click detected');
    } else if (e.button === 1) {
      console.log('Single Middle click detected');
      updateMouseSingleElement('lightblue', 'Single Middle click detected');
    } else if (e.button === 2) {
      console.log('Single Right click detected');
      updateMouseSingleElement('lightcoral', 'Single Right click detected');
    }
  });

  mouseElementSingle.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    handleClick(2);
  });
});

document.querySelector(".pixel-value-button").addEventListener("click", togglePixelValue);

let pixelValueEnabled = false;
let mouseMoveHandler;

function togglePixelValue() {
  const pixelValueDisplay = document.querySelector(".pixel-value-display");
  const dimensionsDisplay = document.querySelector(".dimensions-display");
  const button = document.querySelector(".pixel-value-button");

  if (pixelValueEnabled) {
    document.removeEventListener("mousemove", mouseMoveHandler);
    button.textContent = "Enable Pixel Value";
    pixelValueDisplay.textContent = '';
    pixelValueDisplay.style.display = 'none';
    dimensionsDisplay.innerHTML = '';
    dimensionsDisplay.style.display = 'none';
  } else {
    mouseMoveHandler = function (event) {
      const x = event.clientX;
      const y = event.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const displayX = x + 10 < width - 100 ? x + 10 : x - 110;
      const displayY = y + 10 < height - 30 ? y + 10 : y - 30;

      pixelValueDisplay.textContent = `X: ${x}px, Y: ${y}px`;
      pixelValueDisplay.style.left = `${displayX}px`;
      pixelValueDisplay.style.top = `${displayY}px`;
      pixelValueDisplay.style.display = 'block';
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    dimensionsDisplay.innerHTML = `
            <p>Viewport Width: ${viewportWidth} px</p>
            <p>Viewport Height: ${viewportHeight} px</p>
            <p>Screen Width: ${screenWidth} px</p>
            <p>Screen Height: ${screenHeight} px</p>`;
    dimensionsDisplay.style.display = 'grid';
    button.textContent = "Disable Pixel Value";
  }
  pixelValueEnabled = !pixelValueEnabled;
}