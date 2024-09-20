var count = 0;
function CountClick() {
    count++;
    updateScreen();
}
function ResetClick() {
    count = 0;
    updateScreen();
}
function updateScreen() {
    var screen = document.getElementById("screen");
    screen.value = count.toString();
}
