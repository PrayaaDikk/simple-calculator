const inputDisplay = document.getElementById("input");
const numbersBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".op-btn");

const appendToInput = (value) => {
    inputDisplay.value += value;
};

const replaceLastOperator = (value) => {
    inputDisplay.value = inputDisplay.value.slice(0, -1) + value;
};

const isLastOperator = () => {
    const lastChar = inputDisplay.value.slice(-1);
    return /[+\-*/]/.test(lastChar);
};

const clearDisplay = () => {
    inputDisplay.value = "";
};

const deleteLastChar = () => {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
};

const calculate = () => {
    try {
        inputDisplay.value = eval(inputDisplay.value);
    } catch (error) {
        inputDisplay.value = "Error";
    }
};

numbersBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        appendToInput(btn.value);
    });
});

operatorsBtn.forEach((btn) => {
    const action = btn.dataset.action;
    const value = btn.value;

    if (action) {
        btn.addEventListener("click", () => {
            switch (action) {
                case "clear":
                    clearDisplay();
                    break;

                case "delete":
                    deleteLastChar();
                    break;

                case "equal":
                    calculate();
                    break;
            }
        });
    } else {
        btn.addEventListener("click", () => {
            if (isLastOperator()) {
                replaceLastOperator(value);
            } else {
                appendToInput(value);
            }
        });
    }
});
