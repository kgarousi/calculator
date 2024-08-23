let displayVal = ""
let display = document.querySelector('.display')
const numButtons= document.querySelectorAll('.number')
const clearButton = document.querySelector('.clear')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('#equal')
let firstValue = null
let secondValue = null
let operatorValue = null


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
numButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        if(operatorValue == null){
            firstValue = ""
            displayVal += button.innerHTML
            firstValue = displayVal
        }
        else{
            secondValue = ""
            secondValue += button.innerHTML
            displayVal += secondValue
            secondValue = displayVal
        }
        displayValue(displayVal)
    })
})

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        if (operatorValue == null && firstValue != null){
            displayVal = button.innerHTML
            displayValue(displayVal)
            operatorValue = String(displayVal)
            displayVal = ""
        }
    })
})
 

clearButton.addEventListener("click", function(){
    displayVal = ""
    displayValue(displayVal)
    operatorValue = null
    firstValue = null
    secondValue = null
})

equalButton.addEventListener("click", function(){
    displayValue(operate(operatorValue, firstValue, secondValue))
})

function displayValue(displayVal){
    display.innerText = displayVal
}

equalButton.addEventListener("click", function(){
    console.log((operate(operatorValue, firstValue, secondValue)))
})