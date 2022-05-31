let output = document.querySelector('.output');
let clearBtn = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');
let signChangeBtn = document.querySelector('#changeSign');
let percentageBtn = document.querySelector('#percentage');
let divideBtn = document.querySelector('#divide');
let multiplyBtn = document.querySelector('#multiply');
let subtractBtn = document.querySelector('#subtract');
let addBtn = document.querySelector('#add');
let equalsBtn = document.querySelector('#equals');
let decimalPointBtn = document.querySelector('#decimal');
let numberBtn = document.querySelectorAll('.number');
let resetValue = document.querySelector('#hidden');

clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', removeLast);
signChangeBtn.addEventListener('click', changeSign);
percentageBtn.addEventListener('click', toPercent);
decimalPointBtn.addEventListener('click', addDecimal);
numberBtn.forEach(btn => {
  btn.addEventListener('click', () => appendNumber(btn.textContent))
});
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);
equalsBtn.addEventListener('click', evaluateNumbers);

resetValue.textContent = "yes";

let operation = {
  firstOp: 0,
  secondOp: 0,
  operator: null,
}
function evaluateNumbers() {
  if (resetValue.textContent === "no") {
    evaluate();
    operation.operator = null;
  }
}

function divideNumbers() {
  if (operation.operator !== null) {
    evaluate();
  }
  operation.operator = "/";
  operation.firstOp = +output.textContent;
  resetValue.textContent = "yes";
}

function multiplyNumbers() {
  if (operation.operator !== null) {
    evaluate();
  }
  operation.operator = "*";
  operation.firstOp = +output.textContent;
  resetValue.textContent = "yes";
}

function subtractNumbers() {
  if (operation.operator !== null) {
    evaluate();
  }
  operation.operator = "-";
  operation.firstOp = +output.textContent;
  resetValue.textContent = "yes";
}

function addNumbers() {
  if (operation.operator !== null) {
    evaluate();
  }
  operation.operator = "+";
  operation.firstOp = +output.textContent;
  resetValue.textContent = "yes";
}

function evaluate() {
  if (operation.operator === null || resetValue.textContent === "yes") {
    return
  } else {
    operation.secondOp = +output.textContent;
    let display = operate(operation.operator, operation.firstOp, operation.secondOp);
    roundCalc(display);
    resetValue.textContent = "yes";
  } 
}

function operate(currentOperator, a, b) {
  a = +a;
  b = +b;
  switch (currentOperator) {
    case "/":
      if (b === 0) {
        return "Nice Try!";
      } else {
        return a / b;
      }
    case "*":
      return a * b;
    case "-":
      return a - b;
    case "+":
      return a + b;
  }
}

function appendNumber(number) {
  if (resetValue.textContent === "yes") {
    output.textContent = number;
    resetValue.textContent = "no";
  } else {
    output.textContent += number;
    output.textContent = output.textContent.substring(0, 11);
  }
}

function addDecimal() {
  if (output.textContent.includes(".")) {
    output.textContent = output.textContent;
  } else {
    output.textContent += ".";
  }
}

function toPercent() {
  let display = +output.textContent;
  display = display / 100;
  roundCalc(display);
}

function changeSign() {
  if (resetValue.textContent === "no") {
    let display = +output.textContent;
    display *= -1;
    output.textContent = display;
  }
}

function removeLast() {
  let display = output.textContent;
  let str = display.slice(0, -1);
  if (str === "") {
    output.textContent = "0";
    resetValue.textContent = "yes";
  } else {
    output.textContent = str;
  }
}

function clearAll() {
  output.textContent = "0";
  operation.firstOp = 0;
  operation.secondOp = 0;
  operation.operator = null;
  resetValue.textContent = "yes";
}

function roundCalc(display) {
  let str = display.toString();
  if (str.includes("e")) {
    let newStr = str.split("e");
    let firstPart = newStr[0];
    let secondPart = newStr[1];
    let fullSecondPart = `e${secondPart}`;
    let fullFirstPart = firstPart.substring(0, 7);
    output.textContent = `${fullFirstPart}${fullSecondPart}`;
  } else {
    output.textContent = str.substring(0, 11);
  }
}