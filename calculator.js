let currentInput = '';
let operator = '';
let previousInput = '';

function inputValue(value) {
  currentInput += value;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function calculate() {
  let result;
  
if (operator === '+') {
    result = parseFloat(previousInput) + parseFloat(currentInput);
} else if (operator === '-') {
    result = parseFloat(previousInput) - parseFloat(currentInput);
} else if (operator === '*') {
    result = parseFloat(previousInput) * parseFloat(currentInput);
} else if (operator === '/') {
    result = parseFloat(previousInput) / parseFloat(currentInput);
}
  
currentInput = result.toString();
previousInput = '';
operator = '';
updateDisplay();
}

function updateDisplay() {
document.getElementById('display').innerText = currentInput || '0';
}
