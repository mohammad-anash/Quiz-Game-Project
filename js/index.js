function SelectElement(selector) {
  return document.getElementById(selector);
}

const scoreValue = SelectElement("score");
const input = SelectElement("input");
const submitBtn = SelectElement("submit-btn");
const question = SelectElement("ques");

let counter = 0;

function generateNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
let firstNumber = generateNumber(50, 1);
let secondNumber = generateNumber(50, 1);

question.innerText = `What's The Answer ${firstNumber} multiply By ${secondNumber}`;

submitBtn.addEventListener("click", addFunctionality);

function addFunctionality(e) {
  if (input.value.trim() === "") {
    alert("please fill input");
  } else {
    e.preventDefault();
    const getInputValue = parseInt(input.value);
    const calculation = firstNumber * secondNumber;

    if (calculation === getInputValue) {
      counter++;
      scoreValue.innerText = counter;
    } else {
      counter--;
      scoreValue.innerText = counter;
    }
    firstNumber = generateNumber(50, 1);
    secondNumber = generateNumber(50, 1);
    question.innerText = `What's The Answer ${firstNumber} multiply By ${secondNumber}`;

    input.value = "";
  }
}
