function add(a,b) {
    return a + b
}
function subtract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b 
}
function divide(a,b) {
    return a / b
}
function operate(a, sign, b) {
    if (sign == "+") {
        return add(a,b)
    }
    if (sign == "-") {
        return subtract(a,b)
    }
    if (sign == "*") {
        return multiply(a,b)
    }
    if (sign == "/") {
        return divide(a,b)
    }
}

const screen = document.querySelector(".screen")
function display(number) {
    screen.textContent = screen.textContent.concat(number)
    if (screen.textContent.includes('.') == true) {
        document.getElementById('.').removeEventListener('click', anon)
    }
}
const anon = function(e) {
    display(e.target.id) 
}
const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener('click', anon))

