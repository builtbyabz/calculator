const one = document.querySelector(".one");

const changeColor = () => {
    one.classList.add("red");
};
one.addEventListener("click", changeColor);

//This displays the number 7 onto the screen
//const number = document.querySelector(".seven");
//const output = document.querySelector(".screen")

//const displayNumber = () => {
//output.innerHTML = number.value;
//}

//number.addEventListener("click", displayNumber);

//Displays numbers on the screen
const numbers = document.querySelectorAll(".number");
const output = document.querySelector(".screen");

const operators = document.querySelectorAll(".operator");

const equalusButton = document.querySelector(".equals");

console.log(operators);

let firstNumber = "";
let secondNumber = "";
let operator = "";

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        firstNumber = event.target.value;
        output.innerHTML += firstNumber;
        // console.log(firstNumber);
    });
}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        operator = event.target.innerText;
        secondNumber = firstNumber;
        firstNumber = "";
        console.log(operator);
        //output.innerHTML += firstNumber;
    });
}

equalusButton.addEventListener("click", () => {
     console.log(addNumbers(firstNumber, secondNumber));

    // console.log(firstNumber, secondNumber, operator);
});

const addNumbers = (first, second) => {

    return first + second;

}

/* 1. Get the elements I neeed from the DOM.
   2. Store the first number after selecting operand.


*/