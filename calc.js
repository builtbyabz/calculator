// const one = document.querySelector(".one");

// const changeColor = () => {
//     one.classList.add("red");
// };
// one.addEventListener("click", changeColor);


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

//added empty array to 
let numbers1 = []

for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        firstNumber = event.target.value;
        output.innerHTML += firstNumber; 
    });
}



for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        firstNumber = output.innerHTML
        numbers1.push(firstNumber)
        operator = event.target.innerText;
        output.innerHTML += operator;
        output.innerHTML = "";
        //output.innerHTML = operator;
    });
}


//Function to calculate numbers.
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


/*Calls the functions to calculate numbers when the user clicks on the equals button.*/
equalusButton.addEventListener("click", () => {
    secondNumber = output.innerHTML
    numbers1.push(secondNumber)
    output.innerHTML = (calculateNumbers(numbers1[0], numbers1[1]))
});

/*Clears the numbers1 array and sets the output screen to nothing when you click on the C button*/
clear.addEventListener("click", () => {

    numbers1 = []
    output.innerHTML = "";
  
  })




