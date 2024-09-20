// Define types for better clarity
var currentInput = ""; // Stores the current input
// let previousInput:string=""
var resultDisplayed = false; // Tracks if the result is displayed
// Function to handle number button clicks
function NumberClick(num) {
    if (resultDisplayed == true) {
        currentInput = "";
        // previousInput="";
        resultDisplayed = false;
    }
    currentInput += num;
    updateDisplay();
}
// Function to handle operator button clicks
function operator(op) {
    if (resultDisplayed == false) {
        currentInput += "".concat(op);
        updateDisplay();
    }
}
// Function to clear the display (AC button)
function all_clear() {
    currentInput = "";
    //     previousInput="";
    updateDisplay();
}
// Function to delete the last entered value (DEL button)
function del() {
    currentInput = currentInput.trim();
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
// Function to calculate the result (= button)
function result() {
    try {
        // Evaluate the mathematical expression entered by the user
        currentInput = eval(currentInput.replace("%", "/100"));
        resultDisplayed = false;
        updateDisplay();
    }
    catch (error) {
        currentInput = "Error";
        updateDisplay();
        currentInput = "";
    }
}
// Function to update the display
function updateDisplay() {
    var display = document.getElementById("display");
    if (display) {
        display.value = currentInput || "0";
    }
}
