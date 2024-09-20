let count: number = 0;
        
function CountClick(): void {
    count++;
    updateScreen();
}

function ResetClick(): void {
    count = 0;
    updateScreen();
}

function updateScreen(): void {
    const screen = document.getElementById("screen") as HTMLInputElement;
    screen.value = count.toString();
}



