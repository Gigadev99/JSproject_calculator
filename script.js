function operate(a, operation, b) {
    if (operation == "add") {
        return a + b
    }
    if (operation == "subtract") {
        return a - b
    }
    if (operation == "multiply") {
        return a * b
    }
    if (operation == "divide") {
        return a / b
    }
    return a
}
var num1;
var num2;
var num3
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
    if (e.target.className.includes('sign') && signflag == 0) {
        num2 = Number(screen.textContent)
        screen.textContent = operate(num1, operation, num2)
        num1 = screen.textContent
        signflag = 1;
        operation = e.target.id
    }
    else if (e.target.className.includes('sign')) {  
        num3 = Number(screen.textContent)
        if (!isNaN(num3)) {
            num1 = num3
        } 
        signflag = 1;
        screen.textContent = e.target.textContent
        operation = e.target.id
        return
    }
    if (screen.textContent == 0 && e.target.id != "equals" ) {
        screen.textContent = e.target.textContent
        return
    }
    if (signflag == 1 && e.target.className.includes('number')) {
        signflag = 0;
        screen.textContent = e.target.textContent
        return
    }
    if (e.target.id == "equals") {
        num2 = Number(screen.textContent)
        if (operation == undefined) {
            screen.textContent = num2; return
        }
        screen.textContent = operate(num1, operation, num2)
        signflag = undefined; // bad practice but atleast it works
        return
    }
    if (e.target.id == "equals" && (screen.textContent == 0 ||
        num1 == undefined || num2 == undefined)) {
    }
    
    display(e.target.textContent);
}
const numbers = document.querySelectorAll(".number")
numbers.forEach(number => number.addEventListener('click', input))

const signs = document.querySelectorAll(".sign")
signs.forEach(sign => sign.addEventListener('click', input))

const equals = document.querySelector('#equals')
equals.addEventListener('click', input)
