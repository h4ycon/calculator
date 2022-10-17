/* VARIABLES */
let buttons = document.getElementsByClassName("btn");
let buttonsArray = [].slice.call(buttons);

let displayScreen = document.getElementById("display-screen");
let displayText = document.getElementById("display-text");

let AC = document.getElementById("btn-AC");
let C = document.getElementById("btn-C");


/*Iterates through the buttons and add updateDisplay function */
buttonsArray.forEach(function(element){
    element.addEventListener("click", updateDisplay)
});


/*Add's onclick to AC and C button to clear screen and memory */
AC.addEventListener("click", clearScreen);
C.addEventListener("click", clearMemory);


/* Functions below */
function updateDisplay(e){
    let displayValue = displayText.innerHTML 
    displayValue += e.composedPath()[0].innerHTML;

}

function clearScreen(){
    displayText.innerHTML = ""
}


function clearMemory(){

}


function add (a,b) {
    return a+b;
}


function subtract (a,b) {
    return a-b;
}


function multiply (a,b) {
    return a*b;
}


function divide (a,b) {
    return a/b;
}

function operate (a,b,c) {

    if (a=="+"){

        return add(b,c);
    }
    if (a=="-"){
        return subtract(b,c);
    }
    if (a=="multiply"){
        return multiply(b,c);
    }
    if (a=="+"){
        return divide(b,c);
    }

}

operate("+",2,3);
