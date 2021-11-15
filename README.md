# calculator
Creator - Abdul Oketunde

Simple Calculator is a calculator built with HTML5, SCSS and vanilla Javascript. I can perform basic functionalities such as addition, subtraction, multiplication and division.

How it works:

This calculator works by adding event listeners to each button. I created 4 global variables which are the basis for this program. These are: 

firstNumber = "";
let secondNumber = "";
let operator = "";
let numbers1 = []

Once a user clicks on a number, it will display the number onto the output screen. As soon as the user clicks on an operator: + - / * -- it will push the firstNumber into the Numbers1 array. 

The output also gets cleared so that when the user enters the second number after the operator has been selected, it can then be pushed into index[1] of the Numbers1 array. This is done once the user clicks on the equals button, the secondnNumber will be stored from the current output. 

Additionally, once the user clicks on the equals button, it will run the calculateNumbers() functions to calculate the two inputs in the Numbers1 array depending on which operator they used. 

I also added an event listener on the C button which sets the numbers1 array to empty and also sets the output to an empty string once the button is selected. 

