let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEL = document.getElementById("sum-el")
function add() {
    let result = num1 + num2
    sumEL.textContent = "Sum " +  result
}

function subtract(params) {
    let result = num1 - num2
    sumEL.textContent = "Sum " +  result
}

function divide () {
    let result = num1 / num2
    sumEL.textContent = "Sum " +  result
}

function multiply(params) {
    let result = num1 * num2
    sumEL.textContent = "Sum " +  result
}