const display = document.getElementById("display");
let currentInput = "";
let fullExpression = "";

function updateDisplay() {
    display.value = fullExpression || currentInput;
}

function clearDisplay() {
    currentInput = "";
    fullExpression = "";
    updateDisplay();
}

function calculate(expression) {
    try {
        const result = eval(expression);
        return result;
    } catch (error) {
        return "Error";
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        const value = button.textContent;

        if (/[0-9]/.test(value) || value === ".") {
            currentInput += value;
            fullExpression += value;
            updateDisplay();
        } else if (value === "=") {
            fullExpression = calculate(fullExpression);
            currentInput = fullExpression;
            updateDisplay();
        } else if (value === "AC") {
            clearDisplay();
        } else if (value === "DE") {
            currentInput = currentInput.slice(0, -1);
            fullExpression = fullExpression.slice(0, -1);
            updateDisplay();
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                fullExpression += value;
                updateDisplay();
            }
        }
    });
});
