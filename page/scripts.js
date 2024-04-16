const calculatorDisplay = document.getElementById('calculator-display'); 
let calculatorStart = true; 

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
  'function-button',
  (textContent)=>{

    // At the start only '(' is a valid option 
    if (calculatorStart && textContent === '(') {
      calculatorStart = false;
      calculatorDisplay.textContent = '';
    }

    switch (textContent) {
      case '=':
        evaluateFormula();
        break;
      case 'CE':
        removeLastInput();
        if (calculatorDisplay.textContent === '') {
          resetCalculator();
        }
        break;
      case '(':
        calculatorDisplay.textContent += '(';
        break;
      case ')':
        calculatorDisplay.textContent += ')';
        break;
      case '%':
        calculatorDisplay.textContent += '%';
        break;
      case '/':
        calculatorDisplay.textContent += '/';
        break;
      case '*':
        calculatorDisplay.textContent += '*';
        break;
      case '-':
        calculatorDisplay.textContent += '-';
        break;
      case '+':
        calculatorDisplay.textContent += '+';
        break;
      default:
        alert(`Illegal symbol '${textContent}'`)
    }
  }
);

addClickListener(
  'number-button',
  (textContent) => {
    if (calculatorStart) {
      calculatorDisplay.textContent = '';
    }

    if (/[0-9]/g.test(textContent)) {
      calculatorDisplay.textContent += textContent;
      calculatorStart = false;
    }

    if (/\./g.test(textContent)) {
      calculatorDisplay.textContent += textContent;
      calculatorStart = false;
    }
  }
);

function removeLastInput() {
  calculatorDisplay.textContent = calculatorDisplay.textContent.slice(0, -1);
}

function resetCalculator() {
  calculatorDisplay.textContent = '0';
  calculatorStart = true;
}

function evaluateFormula(formula) {
  try {
    calculatorDisplay.textContent =
          eval(calculatorDisplay.textContent);
  } catch (error) {
    console.error('Error evaluating formula:', error.message);
    return undefined;
  }
}
