let displayValue = "";
const displayEl = document.querySelector(".display")
const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn= document.querySelector(".nineBtn");

function add(num1, num2){
    console.log(num1 + num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
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

oneBtn.addEventListener("click", () =>{
    displayEl.textContent = "1";
    displayValue = 1;
})
twoBtn.addEventListener("click", () =>{
    displayEl.textContent = "2";
    displayValue = 2;
})
threeBtn.addEventListener("click", () =>{
    displayEl.textContent = "3";
    displayValue = 3;
})
fourBtn.addEventListener("click", () =>{
    displayEl.textContent = "4";
    displayValue = 4;
})
fiveBtn.addEventListener("click", () =>{
    displayEl.textContent = "5";
    displayValue = 5;
})
sixBtn.addEventListener("click", () =>{
    displayEl.textContent = "6";
    displayValue = 6;
})
sevenBtn.addEventListener("click", () =>{
    displayEl.textContent = "7";
    displayValue = 7;
})
eightBtn.addEventListener("click", () =>{
    displayEl.textContent = "8";
    displayValue = 8;
})
nineBtn.addEventListener("click", () =>{
    displayEl.textContent = "9";
    displayValue = 9;
})