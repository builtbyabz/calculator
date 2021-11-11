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
var operator = "";

for (i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (event) {
    firstNumber = event.target.value;
    output.innerHTML += firstNumber; // console.log(firstNumber);
  });
}

for (i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (event) {
    operator = event.target.innerText;
    secondNumber = firstNumber;
    firstNumber = "";
    console.log(operator); //output.innerHTML += firstNumber;
  });
}

equalusButton.addEventListener("click", function () {
  console.log(addNumbers(firstNumber, secondNumber)); // console.log(firstNumber, secondNumber, operator);
});

var addNumbers = function addNumbers(first, second) {
  return first + second;
};
/* 1. Get the elements I neeed from the DOM.
   2. Store the first number after selecting operand.


*/