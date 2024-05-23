
let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;
const buttons = document.querySelectorAll('button');
const display = document.querySelector(".display");


function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return Number(num1) - Number(num2);
}

function multiply(num1, num2){
    return Number(num1) * Number(num2);
}

function divide(num1, num2){
    return Number(num1) / Number(num2);
}

function operate(operator, num1, num2){
   switch(operator){
    case "*":
        return multiply(num1, num2);
        break; 
   case "+":
        return add(num1, num2)
        break;
    case "-":
        return subtract(num1, num2);
        break;
    case "%":
        return divide(num1, num2)
        break;
    }
}

function clickButton(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(buttons[i].classList.contains('operator')){
                inputOperator(buttons[i].value);
                updateDisplay();
            }
           else if(buttons[i].classList.contains('number')){
                inputNumber(buttons[i].value);
                updateDisplay();
            }
            else if(buttons[i].classList.contains('clear')){
                displayValue = "- - -";
                display.innerText = displayValue;
            }
        })
    }
}

function inputOperator(operand){
    displayValue = operand;
}
function inputNumber(operator){
    displayValue = operator;

}
function updateDisplay(){
    display.textContent = displayValue;
}


clickButton();