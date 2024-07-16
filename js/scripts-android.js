document.addEventListener('DOMContentLoaded', function () {
  const keyInput = document.getElementById('keyInput');
  const oneKeyBox = document.getElementById('oneKeyBox');

  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  if (!isMobile()) {
    keyInput.disabled = true;
    keyInput.placeholder = "Input allowed only on Android devices";
    keyInput.style.backgroundColor = "#f8d7da";
  } else {
    document.addEventListener('keydown', function (event) {
      if (event.key.startsWith('F') && !isNaN(event.key.slice(1))) {
        const keyNumber = event.key.slice(1);
        if (keyNumber >= 1 && keyNumber <= 12) {
          oneKeyBox.textContent = `F${keyNumber} key is pressed`;
          event.preventDefault();
        }
      }
    });
  }
});