// let counter = 0;
// let counterDisplay = document.getElementById("counter");
// function Count(){
//     counter += 1; 
//     counterDisplay.innerHTML = counter;
// }

//Calc
let screen = document.getElementById("screen");
let isCalculationPerformed = false;

function displayScreen(opt) {
    if (opt === '+' || opt === '-' || opt === '*' || opt === '/' || opt === '%') {
        screen.value = screen.value.replace(/[+\-*%\/]$/, '');
        screen.value += opt;
    } else {
        screen.value += opt;
    }
    if (isCalculationPerformed) {
        clearScreen();
        isCalculationPerformed = false;
        displayScreen(opt);
        isCalculationPerformed = false;
    }
}

function clearScreen() {
    screen.value = "";
}

function calcResult() {
    // Display the input value before calculation
    let listItem1 = document.createElement("h2");
    let text1 = document.createTextNode(`${screen.value}`);
    listItem1.appendChild(text1);
    let list1 = document.getElementById("content1");
    list1.appendChild(listItem1);
    // Update the screen value with the result
    let result = eval(screen.value);
    screen.value = result;
    // Display the result value
    let listItem = document.createElement("h2");
    let text = document.createTextNode(`${screen.value}`);
    listItem.appendChild(text);
    let list = document.getElementById("content");
    list.appendChild(listItem);
    isCalculationPerformed = true;
}
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}