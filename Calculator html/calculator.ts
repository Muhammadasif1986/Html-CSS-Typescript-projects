// Define types for better clarity
let currentInput: string = "";  // Stores the current input
// let previousInput:string=""
let resultDisplayed: boolean = false;  // Tracks if the result is displayed


// Function to handle number button clicks
function NumberClick(num: string): void {
    if (resultDisplayed == true) {
        currentInput = "";
        // previousInput="";
        resultDisplayed = false;
    }
    currentInput += num;
    updateDisplay();
}

// Function to handle operator button clicks
function operator(op: string): void {
    if (resultDisplayed == false) {
        currentInput += `${op}`
        updateDisplay();
    }
}

// Function to clear the display (AC button)
function all_clear(): void {
    currentInput = "";
//     previousInput="";
    updateDisplay();
}

// Function to delete the last entered value (DEL button)
function del(): void {
    currentInput = currentInput.trim();
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Function to calculate the result (= button)
function result(): void {
    try {
        // Evaluate the mathematical expression entered by the user
        currentInput = eval(currentInput.replace("%", "/100"));
        resultDisplayed = false;
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
        currentInput = "";
    }
}

// Function to update the display
function updateDisplay(): void {
    const display: HTMLInputElement | null = document.getElementById("display") as HTMLInputElement;
    if (display) {
        display.value = currentInput || "0";
    }
}
