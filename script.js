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
let hiddenValue = document.querySelector('#hidden');

let operation = {
  firstOp: 0,
  secondOp: 0,
  operator: null,
}

clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', removeLast);
signChangeBtn.addEventListener('click', changeSign);
percentageBtn.addEventListener('click', toPercent);
decimalPointBtn.addEventListener('click', addDecimal);
numberBtn.forEach(btn => {
  btn.addEventListener('click', () => appendNumber(btn.textContent))
});
addBtn.addEventListener('click', addNumbers);
equalsBtn.addEventListener('click', evaluate);



function addNumbers() {
  if (operation.operator !== null) {
    evaluate();
  }
  operation.operator = "+";
  operation.firstOp = +output.textContent;
}

function evaluate();

function operate(currentOperator, a, b) {
  a = +a;
  b = +b;
  switch (currentOperator) {
    case "/":
      if (b === 0) {
        return "Nice Try!";
      } else {
        return divide(a, b);
      }
    case "*":
      return multiply(a, b);
    case "-":
      return subtract(a, b);
    case "+":
      return add(a, b);
  }
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function appendNumber(number) {
  if (output.textContent === "0") {
    output.textContent = number;
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
  let newDisplay = display / 100;
  let str = newDisplay.toString();
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

function changeSign() {
  let display = +output.textContent;
  display *= -1;
  output.textContent = display;
}

function removeLast() {
  let display = output.textContent;
  let str = display.slice(0, -1);
  if (str === "") {
    output.textContent = "0";
  } else {
    output.textContent = str;
  }
}

function clearAll() {
  output.textContent = "0";
  hiddenValue.textContent = "";
  operation.firstOp = 0;
  operation.secondOp = 0;
  operation.operator = null;
}