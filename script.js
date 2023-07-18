function operate(a, operation, b) {
    if (operation == "+") return Number(a) + b //so a doesnt get concatenated when its a string
    if (operation == "-") return a - b
    if (operation == "*") return a * b
    if (operation == "/") return a / b
    return b // if operation is undefined, just return the same value 
}            // as is on the screen when equals pressed
var num1, num2, num3, signflag, operation, ans;
const screen = document.querySelector(".screen")
function display(number) {
    screen.textContent += `${number}`
}
const input = function(e) {
    if (e.target.className.includes('sign') && signflag == 0) {
        num2 = Number(screen.textContent)
        ans = operate(num1, operation, num2)
        screen.textContent = Number(Number(ans).toFixed(9)) //sometimes toFixed doesnt work as ans is a string so convert it to number first
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
    if (e.target.id == ".") dot.removeEventListener('click', input) // so multiple dots can't be typed once
    if (screen.textContent == 0 && e.target.id != "=" && e.target.id != "." 
        && !screen.textContent.includes('.')) /* for the edge case when display is "0." */ {
        screen.textContent = e.target.textContent
        return
    }
    if (signflag == 1 && e.target.className.includes('number')) {
        signflag = 0;
        screen.textContent = e.target.textContent
        return
    }
    if (e.target.id == "=") {
        num2 = Number(screen.textContent)
        ans = operate(num1, operation, num2)
        screen.textContent = Number(ans).toFixed(9)
        signflag = undefined // bad practice but atleast it works
        operation = undefined
        return
    }
    display(e.target.textContent); 
}
const buttons = document.querySelectorAll(".button")
buttons.forEach(button => button.addEventListener('click', input))
const dot = document.getElementById(".")
//Keyboard section
document.addEventListener('keydown', e => {
    let button = document.getElementById(e.key);
    if (button == undefined) return;
    button.click();
    console.log(e.key)
})