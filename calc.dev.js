"use strict";

// const one = document.querySelector(".one");
// const changeColor = () => {
//     one.classList.add("red");
// };
// one.addEventListener("click", changeColor);
//Global Variables
var numbers = document.querySelectorAll(".number");
var output = document.querySelector(".screen");
var operators = document.querySelectorAll(".operator");
var equalusButton = document.querySelector(".equals");
var clear = document.querySelector(".maximum-red"); //Global Variables

var firstNumber = "";
var secondNumber = "";
var operator = ""; //added empty array to 

var numbers1 = [];

for (i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (event) {
    firstNumber = event.target.value;
    output.innerHTML += firstNumber;
  });
}

for (i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (event) {
    firstNumber = output.innerHTML;
    numbers1.push(firstNumber);
    operator = event.target.innerText;
    output.innerHTML += operator;
    output.innerHTML = ""; //output.innerHTML = operator;
  });
} //Function to calculate numbers.


var calculateNumbers = function calculateNumbers(first, second) {
  if (operator === "+") {
    return parseInt(first) + parseInt(second);
  } else if (operator === "-") {
    return parseInt(first) - parseInt(second);
  } else if (operator === "÷") {
    return parseInt(first) / parseInt(second);
  } else if (operator === "x") {
    return parseInt(first) * parseInt(second);
  }
};
/*Calls the functions to calculate numbers when the user clicks on the equals button.*/


equalusButton.addEventListener("click", function () {
  secondNumber = output.innerHTML;
  numbers1.push(secondNumber);
  output.innerHTML = calculateNumbers(numbers1[0], numbers1[1]);
});
/*Clears the numbers1 array and sets the output screen to nothing when you click on the C button*/

clear.addEventListener("click", function () {
  numbers1 = [];
  output.innerHTML = "";
});