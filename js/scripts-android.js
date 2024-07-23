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
    return;
  }

  keyInput.addEventListener('input', function () {
    if (keyInput.value.length > 1) {
      keyInput.value = keyInput.value.slice(0, 1);
    }
  });

  document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key.startsWith('F') && !isNaN(key.slice(1))) {
      const keyNumber = Number(key.slice(1));
      if (keyNumber >= 1 && keyNumber <= 12) {
        oneKeyBox.textContent = `F${keyNumber} key is pressed`;
        event.preventDefault();
      }
    }
    else if (/^[0-9a-zA-Z]$/.test(key)) {
      oneKeyBox.textContent = `${key} is pressed`;
      event.preventDefault();
    }
  });

  keyInput.addEventListener('input', function () {
    const value = keyInput.value;
    if (/^[0-9a-zA-Z]$/.test(value)) {
      oneKeyBox.textContent = `${value} is pressed`;
    }
  });
});
