function operate(a, operation, b) {
    if (operation == "add") return a + b
    if (operation == "subtract") return a - b
    if (operation == "multiply") return a * b
    if (operation == "divide") return a / b
    return b // if operation is undefined, just return the same value 
}            // as is on the screen when equals pressed
var num1, num2, num3, signflag, operation, ans;
const screen = document.querySelector(".screen")
function display(number) {
    screen.textContent += `${number}`
    if (screen.textContent.includes('.')) {
        dot.removeEventListener('click', input) // so multiple dots cant be typed once
    }
}
const input = function(e) {
    if (e.target.className.includes('sign') && signflag == 0) {
        num2 = Number(screen.textContent)
        ans = operate(num1, operation, num2)
        screen.textContent = Number(Number(ans).toFixed(9)) //sometimes tofixed doesnt work as ans is a string so convert it to number first
        num1 = screen.textContent // then convert the result to number again to remove unnecessary zeroes (.000)
        signflag = 1;
        operation = e.target.id
        dot.addEventListener('click', input)
    }
    else if (e.target.className.includes('sign')) {  
        num3 = Number(screen.textContent)
        if (!isNaN(num3)) {num1 = num3}  // this ignores the screen if operation is pressed multiple times
        signflag = 1;                    // so that num1 isn't assigned an operator!
        screen.textContent = e.target.textContent
        operation = e.target.id;            dot.addEventListener('click', input)
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
        ans = operate(num1, operation, num2)
        screen.textContent = Number(Number(ans).toFixed(9))
        signflag = undefined // bad practice but atleast it works
        operation = undefined
        return
    } 
    display(e.target.textContent);
}
const buttons = document.querySelectorAll(".button")
buttons.forEach(number => number.addEventListener('click', input))
const signs = document.querySelectorAll(".sign")
const dot = document.getElementById(".")