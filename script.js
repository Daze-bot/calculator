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
let zeroBtn = document.querySelector('#zero');
let oneBtn = document.querySelector('#one');
let twoBtn = document.querySelector('#two');
let threeBtn = document.querySelector('#three');
let fourBtn = document.querySelector('#four');
let fiveBtn = document.querySelector('#five');
let sixBtn = document.querySelector('#six');
let sevenBtn = document.querySelector('#seven');
let eightBtn = document.querySelector('#eight');
let nineBtn = document.querySelector('#nine');

clearBtn.addEventListener('click', () => output.textContent = "0");
deleteBtn.addEventListener('click', removeLast);
signChangeBtn.addEventListener('click', changeSign);
percentageBtn.addEventListener('click', toPercent);
decimalPointBtn.addEventListener('click', addDecimal);

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
  } else if (str === "NaN") {
    output.textContent = "Too Small";
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