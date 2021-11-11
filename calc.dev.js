"use strict";

var one = document.querySelector(".one");

var changeColor = function changeColor() {
  one.classList.add("red");
};

one.addEventListener("click", changeColor); //This displays the number 7 onto the screen
//const number = document.querySelector(".seven");
//const output = document.querySelector(".screen")
//const displayNumber = () => {
//output.innerHTML = number.value;
//}
//number.addEventListener("click", displayNumber);
//Displays numbers on the screen

var numbers = document.querySelectorAll(".number");
var output = document.querySelector(".screen");
var operators = document.querySelectorAll(".operator");
var equalusButton = document.querySelector(".equals");
console.log(operators);
var firstNumber = "";
var secondNumber = "";
var operator = ""; //added empty array to 

var numbers1 = [];

for (i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (event) {
    firstNumber = event.target.value;
    output.innerHTML += firstNumber;
    console.log(firstNumber);
  });
}

for (i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (event) {
    firstNumber = output.innerHTML;
    numbers1.push(firstNumber);
    operator = event.target.innerText; //secondNumber = firstNumber;
    //firstNumber = "";

    console.log(operator);
    output.innerHTML += operator;
    console.log(numbers1);
    output.innerHTML = "";
  });
}

var calculateNumbers = function calculateNumbers(first, second) {
  if (operator === "+") {
    console.log(first);
    console.log(second);
    return parseInt(first) + parseInt(second);
  } else if (operator === "-") {
    return parseInt(first) - parseInt(second);
  } else if (operator === "÷") {
    return parseInt(first) / parseInt(second);
  } else if (operator === "x") {
    return parseInt(first) * parseInt(second);
  }
};

equalusButton.addEventListener("click", function () {
  secondNumber = output.innerHTML;
  numbers1.push(secondNumber);
  console.log(numbers1);
  output.innerHTML = calculateNumbers(numbers1[0], numbers1[1]); //secondNumber = numbers1[1]
  //console.log(secondNumber)
  //console.log(calculateNumbers(numbers1[0], numbers1[1]))
  //console.log(calculateNumbers(firstNumber, secondNumber))
  // console.log(firstNumber, secondNumber, operator);
});
/* 1. Get the elements I neeed from the DOM.
   2. Store the first number after selecting operand.


*/