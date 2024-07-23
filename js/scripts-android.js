document.addEventListener('DOMContentLoaded', function () {
  const inputElements = [
    { id: 'keyInput', limit: 1, updateBox: updateSingleKeyBox },
    { id: 'keyInput2a', limit: 1, updateBox: updateTwoKeyBox },
    { id: 'keyInput2b', limit: 1, updateBox: updateTwoKeyBox },
    { id: 'keyInput3a', limit: 1, updateBox: updateThreeKeyBox },
    { id: 'keyInput3b', limit: 1, updateBox: updateThreeKeyBox },
    { id: 'keyInput3c', limit: 1, updateBox: updateThreeKeyBox }
  ];

  const keyBoxes = {
    oneKeyBox: document.getElementById('oneKeyBox'),
    twoKeyBox: document.getElementById('twoKeyBox'),
    threeKeyBox: document.getElementById('threeKeyBox')
  };

  let focusedInput = null;

  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function disableInputs() {
    inputElements.forEach(({ id }) => {
      const input = document.getElementById(id);
      input.disabled = true;
      input.placeholder = "Input allowed only on Android devices";
      input.style.backgroundColor = "#f8d7da";
      input.classList.add('disabled');
    });
  }

  function isValidKey(key) {
    return /^[0-9a-zA-Z]$/.test(key) || (key.startsWith('F') && !isNaN(key.slice(1)) && Number(key.slice(1)) >= 1 && Number(key.slice(1)) <= 12);
  }

  function handleInput(event, limit, updateBox) {
    const input = event.target;
    if (input.value.length > limit) {
      input.value = input.value.slice(0, limit);
    }
    updateBox();
  }

  function updateSingleKeyBox() {
    const keyInput = document.getElementById('keyInput').value;
    if (isValidKey(keyInput)) {
      keyBoxes.oneKeyBox.textContent = `${keyInput} is pressed`;
    } else {
      keyBoxes.oneKeyBox.textContent = 'No valid key pressed';
    }
  }

  function updateTwoKeyBox() {
    const keyInput2a = document.getElementById('keyInput2a').value;
    const keyInput2b = document.getElementById('keyInput2b').value;
    const messages = [keyInput2a, keyInput2b].filter(isValidKey);
    if (messages.length === 1) {
      keyBoxes.twoKeyBox.textContent = `${messages[0]} is pressed`;
    } else if (messages.length > 1) {
      keyBoxes.twoKeyBox.textContent = messages.join(' and ') + ' are pressed';
    } else {
      keyBoxes.twoKeyBox.textContent = 'Maximum 2 Keys allowed';
    }
  }

  function updateThreeKeyBox() {
    const keyInput3a = document.getElementById('keyInput3a').value;
    const keyInput3b = document.getElementById('keyInput3b').value;
    const keyInput3c = document.getElementById('keyInput3c').value;
    const messages = [keyInput3a, keyInput3b, keyInput3c].filter(isValidKey);
    if (messages.length === 1) {
      keyBoxes.threeKeyBox.textContent = `${messages[0]} is pressed`;
    } else if (messages.length > 1) {
      keyBoxes.threeKeyBox.textContent = messages.join(', ') + ' are pressed';
    } else {
      keyBoxes.threeKeyBox.textContent = 'Maximum 3 Keys allowed';
    }
  }

  function handleKeydown(event) {
    const key = event.key;
    if (focusedInput) {
      if (isValidKey(key)) {
        focusedInput.value = key;
        if (focusedInput.id === 'keyInput') {
          updateSingleKeyBox();
        } else if (focusedInput.id.startsWith('keyInput2')) {
          updateTwoKeyBox();
        } else if (focusedInput.id.startsWith('keyInput3')) {
          updateThreeKeyBox();
        }
        event.preventDefault();
      }
    }
  }

  if (!isMobile()) {
    disableInputs();
  } else {
    inputElements.forEach(({ id, limit, updateBox }) => {
      const input = document.getElementById(id);
      input.addEventListener('focus', () => { focusedInput = input; });
      input.addEventListener('blur', () => { focusedInput = null; });
      input.addEventListener('input', (event) => handleInput(event, limit, updateBox));
    });
    document.addEventListener('keydown', handleKeydown);
  }
});