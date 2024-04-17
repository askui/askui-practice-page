function addClickListener(className, callback) {
  // Select all elements with the given class
  const elements = document.querySelectorAll('.' + className);

  for (const element of elements) {
    element.addEventListener('click', function() {
      callback(this.textContent)
    });
  }
}

addClickListener(
  'dark-light-switch',
  ()=>{
    const dlSwitch = document.getElementById('dark-light-switch');
    const dlSwitchButton = dlSwitch.children[0];
    if (dlSwitchButton.textContent === 'Switch to Dark') {
      dlSwitchButton.textContent = 'Switch to Light';
      document.getElementById('light-theme').toggleAttribute('disabled');
      document.getElementById('dark-theme').toggleAttribute('disabled');
      document.getElementById('calculator-light-theme').toggleAttribute('disabled');
      document.getElementById('calculator-dark-theme').toggleAttribute('disabled');
    }
    else {
      dlSwitchButton.textContent = 'Switch to Dark';
      document.getElementById('dark-theme').toggleAttribute('disabled');
      document.getElementById('light-theme').toggleAttribute('disabled');
      document.getElementById('calculator-light-theme').toggleAttribute('disabled');
      document.getElementById('calculator-dark-theme').toggleAttribute('disabled');
    }
  }
);