//Global Variables
const numbers = document.querySelectorAll(".number");
const output = document.querySelector(".screen");
const operators = document.querySelectorAll(".operator");
const equalusButton = document.querySelector(".equals");
const clear = document.querySelector(".maximum-red");

//Global Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let numbers1 = [];
let currentExpression = ""; // To track the current input

// Handle number inputs
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        firstNumber = event.target.value;
        output.innerHTML += firstNumber;
        currentExpression = output.innerHTML;
    });
}

// Handle operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        firstNumber = output.innerHTML;
        numbers1.push(firstNumber);
        operator = event.target.innerText;
        currentExpression = firstNumber + " " + operator + " ";
        output.innerHTML = currentExpression;
    });
}

//Function to calculate numbers
const calculateNumbers = (first, second) => {
    if (operator === "+") {
        return parseInt(first) + parseInt(second);
    } else if (operator === "-") {
        return parseInt(first) - parseInt(second);
    } else if (operator === "÷") {
        return parseInt(first) / parseInt(second);
    } else if (operator === "x") {
        return parseInt(first) * parseInt(second);
    }
}

/*Calls the functions to calculate numbers when the user clicks on the equals button*/
equalusButton.addEventListener("click", () => {
    // Get the full expression and split it
    let parts = output.innerHTML.split(operator);
    if (parts.length === 2) {
        firstNumber = parts[0].trim();
        secondNumber = parts[1].trim();
        numbers1 = [firstNumber, secondNumber];
        
        const result = calculateNumbers(firstNumber, secondNumber);
        output.innerHTML = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
        
        // Reset for next calculation
        numbers1 = [];
        currentExpression = result.toString();
    }
});

/*Clears the numbers1 array and sets the output screen to nothing when you click on the C button*/
clear.addEventListener("click", () => {
    numbers1 = [];
    currentExpression = "";
    output.innerHTML = "";
});




