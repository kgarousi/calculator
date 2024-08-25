let displayVal = ""
let display = document.querySelector('.display')
const numButtons= document.querySelectorAll('.number')
const clearButton = document.querySelector('.clear')
const operatorButtons = document.querySelectorAll('.operator')
const equalButton = document.querySelector('.equal')
const operatorDisplay = document.querySelector('.operators')
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
    Number(num2)
    if (num2 == 0){
        setTimeout(() => displayValue("Cannot divide by zero or undefined"), 500)
    }else{
        return Number(num1) / Number(num2);    
    }
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
            firstValue = "";
            displayVal += button.innerHTML;
            firstValue = displayVal;
            displayValue(displayVal);
        }
        else if(firstValue != null && secondValue == null){
            secondValue = "";
            secondValue += button.innerHTML;
            displayVal += secondValue;
            secondValue = displayVal;
            displayValue(displayVal);
        }
        else if(operatorValue != null && firstValue != null){
            secondValue = "";
            secondValue += button.innerHTML;
            displayVal += secondValue;
            secondValue = displayVal;
            displayValue(displayVal);
        }
    })
})

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        numButtons.forEach(function(button){
            button.disabled = false
        })
        if (operatorValue == null && firstValue != null){
            displayVal = button.innerHTML;
            operatorDisplay.innerText = displayVal;
            operatorValue = String(displayVal);
            displayVal = "";
        }
        else if(operatorValue != null && firstValue != null & secondValue != null){
            firstValue = operate(operatorValue, firstValue, secondValue);
            operatorDisplay.innerText = button.innerHTML;
            displayValue(firstValue);
            operatorValue = button.innerHTML;
            displayVal = "";
        }
        else if(operatorValue != null && firstValue != null && secondValue == null){
            displayVal = button.innerHTML;
            operatorValue = displayVal;
            operatorDisplay.innerText = displayVal;
            displayValue(firstValue);
            secondValue = "";
            displayVal = "";
        }
    })
})
 

clearButton.addEventListener("click", function(){
    displayVal = "";
    displayValue("----------");
    operatorValue = null;
    firstValue = null;
    secondValue = null;
    operatorDisplay.innerText = "";
    numButtons.forEach(function(button){
        button.disabled = false
    })
})


function displayValue(displayVal){
    display.innerText = displayVal;
}

equalButton.addEventListener("click", function(){
    firstValue = (operate(operatorValue, firstValue, secondValue))
    displayValue(firstValue)
    secondValue = null;
    numButtons.forEach(function(button){
        button.disabled = true
    })
})