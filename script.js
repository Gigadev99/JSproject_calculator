function operate(a, sign, b) {
    if (sign == "add") {
        return a + b
    }
    if (sign == "subtract") {
        return a - b
    }
    if (sign == "multiply") {
        return a * b
    }
    if (sign == "divide") {
        return a / b
    }
}
var num1;
var num2;
var signflag;
var operation;

const screen = document.querySelector(".screen")
function display(number) {
    if (signflag == 1) {
        signs.forEach(sign => sign.removeEventListener('click', input))
    }
    screen.textContent += `${number}`
    if (screen.textContent.includes('.')) {
        document.getElementById('.')
        .removeEventListener('click', input)
    }
}
const input = function(e) {
    if (e.target.className.includes('sign')) {  
        num1 = Number(screen.textContent)
        signflag = 1;
        screen.textContent = ""    
        display(e.target.textContent)
        operation = e.target.id
        return
    }
    if (signflag == 1 && e.target.className.includes('number')) {
        signflag = 0;
        screen.textContent = e.target.textContent
        return
    }
    if (e.target.id == "equals") {
        num2 = Number(screen.textContent)
        screen.textContent = operate(num1, operation, num2)
        return
    }
    display(e.target.textContent);
}
const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener('click', input))

const signs = document.querySelectorAll(".sign")
signs.forEach(sign => sign.addEventListener('click', input))
const equals = document.querySelector('#equals')
equals.addEventListener('click', input)
