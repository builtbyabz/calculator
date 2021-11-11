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

//added empty array to 
let numbers1 = []

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        firstNumber = event.target.value;
        output.innerHTML += firstNumber;
        console.log(firstNumber);
    });
}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        firstNumber = output.innerHTML
        numbers1.push(firstNumber)
        operator = event.target.innerText;
        //secondNumber = firstNumber;
        //firstNumber = "";
        console.log(operator);
        output.innerHTML += operator;
        console.log(numbers1)
        output.innerHTML = "";
    });
}



const calculateNumbers = (first, second) => {

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

}




equalusButton.addEventListener("click", () => {
    secondNumber = output.innerHTML
    numbers1.push(secondNumber)

    console.log(numbers1)
    output.innerHTML = (calculateNumbers(numbers1[0], numbers1[1]))

    

    //secondNumber = numbers1[1]
    //console.log(secondNumber)
    //console.log(calculateNumbers(numbers1[0], numbers1[1]))
    //console.log(calculateNumbers(firstNumber, secondNumber))

    // console.log(firstNumber, secondNumber, operator);
});



/* 1. Get the elements I neeed from the DOM.
   2. Store the first number after selecting operand.


*/