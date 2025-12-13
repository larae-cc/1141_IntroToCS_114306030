const operatorSelect = document.getElementById("operator");
const calcBtn = document.getElementById("calcBtn");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero!");
        return null;
    }
    return a / b;
}

/* (2) 選了運算子後，按鈕文字變成 Add/Subtract/Multiply/Divide */
function updateButtonText() {
    const op = operatorSelect.value;

    if (op === "+") calcBtn.innerText = "Add";
    else if (op === "-") calcBtn.innerText = "Subtract";
    else if (op === "*") calcBtn.innerText = "Multiply";
    else if (op === "/") calcBtn.innerText = "Divide";
}

operatorSelect.addEventListener("change", updateButtonText);
updateButtonText(); // 頁面一載入先同步一次

function calculate() {
    const num1Str = document.getElementById("num1").value.trim();
    const num2Str = document.getElementById("num2").value.trim();
    const operator = operatorSelect.value;

    if (num1Str === "" || num2Str === "") {
        alert("Please enter both numbers.");
        return;
    }

    const num1 = Number(num1Str);
    const num2 = Number(num2Str);

    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            if (result === null) return;
            break;
    }

    document.getElementById("result").innerText = result.toFixed(2);
}
