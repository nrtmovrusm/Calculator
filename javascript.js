function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b === 0) {
        return 'ERROR: Division by zero';
    } else {
        return a/b;
    }
}

let number1="";
let number2="";
let operator="";
let clearDisplay = "";

function operate(number1, operator, number2) {
    switch (operator) {
        case "add":
            return add(number1, number2);
        case "subtract":
            return subtract(number1, number2);
        case "multiply":
            return multiply(number1, number2);
        case "divide":
            return divide(number1, number2);
    }
}

const display = document.querySelector("input");

const btnNumbers = document.querySelectorAll(".button");

btnNumbers.forEach(button => {
    button.addEventListener("click", (e) => {

        if (number1 !== "" && clearDisplay=="") {
            display.value = "";
            clearDisplay = "0";
        }

        if (e.target.textContent === ".") {
            if (!display.value.includes(".")) {
                display.value += e.target.textContent;
            } else {
                display.value = display.value;
            }
        } else if (e.target.textContent === "C") {
            display.value = "0";
            number1="";
            number2="";
            operator="";
            clearDisplay="";
        } else if (display.value === "0") {
            display.value = "";
            display.value += e.target.textContent;
        } else if (e.target.textContent === "+/-") {
            display.value = String(-1 * Number(display.value));
        } else if (e.target.textContent === "%") {
            display.value = String((Number(display.value) / 100));
        } else {
            display.value += e.target.textContent; // returns string
        }  
    });
});

const operatorBtns = document.querySelectorAll(".operator");

operatorBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        if (number1 == "") {
            number1 = Number(display.value);
            operator = button.id;
        } else if (clearDisplay == "") {
            operator = button.id;
            return;
        } else {
            number2 = Number(display.value);
            display.value = operate(number1, operator, number2);
            number1 = Number(display.value);
            operator = button.id;
            number2 = "";
            clearDisplay= "";
        }
    })
})

const equalsBtn = document.querySelector(".equals");

equalsBtn.addEventListener("click", (e) => {
    if (number1==""||operator=="") {
        return;
    } else {
        number2 = Number(display.value);
        display.value = operate(number1, operator, number2);
        number1 = "";
        number2 = "";
        operator = "";
        clearDisplay = "";
    }
})