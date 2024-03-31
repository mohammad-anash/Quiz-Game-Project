function SelectElement(selector) {
  return document.getElementById(selector);
}

const scoreValue = SelectElement("score");
const input = SelectElement("input");
const submitBtn = SelectElement("submit-btn");
const question = SelectElement("ques");
const para = SelectElement("para");
para.innerText = "Addition";

let counter = 0;

function generateNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
let firstNumber = generateNumber(50, 1);
let secondNumber = generateNumber(50, 1);

question.innerText = `What's The Answer ${firstNumber} ${para.innerText} By ${secondNumber}`;
submitBtn.addEventListener("click", addFunctionality);

SelectElement("option").addEventListener("change", (event) => {
  const operation = event.target.value;
  para.innerText = operation;
  question.innerText = `What's The Answer ${firstNumber} ${para.innerText} By ${secondNumber}`;
});

function addFunctionality(e) {
  const condition = para.innerText;
  let result;
  switch (condition) {
    case "Addition":
      result = firstNumber + secondNumber;
      break;
    case "Subtract":
      if (firstNumber < secondNumber) {
        let temp = secondNumber;
        secondNumber = firstNumber;
        firstNumber = temp;
      }
      result = firstNumber - secondNumber;
      break;
    case "Multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
  }
  console.log(result);

  const inputValue = parseInt(input.value);
  if (inputValue === result) {
    counter++;
    scoreValue.innerText = counter;
  } else {
    counter--;
    scoreValue.innerText = counter;
  }

  if (input.value.trim() === "") {
    alert("please fill input");
  } else {
    e.preventDefault();
    firstNumber = generateNumber(50, 1);
    secondNumber = generateNumber(50, 1);
    question.innerText = `What's The Answer ${firstNumber} ${para.innerText} By ${secondNumber}`;
    input.value = "";
  }
}
