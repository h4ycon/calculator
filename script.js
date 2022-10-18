/* VARIABLES */
let operators = document.getElementsByClassName("operators");
let buttons = document.getElementsByClassName("btn");
let buttonsArray = [].slice.call(buttons);
let operatorsArray = [].slice.call(operators);

let displayScreen = document.getElementById("display-screen");
let displayText = document.getElementById("display-text");
let operatorBtn = document.getElementById("operate");

let AC = document.getElementById("btn-AC");
let C = document.getElementById("btn-C");


let tmp1 = "";
let tmp2 = "";
let operator = "";


/*Iterates through the buttons and add updateDisplay function */
buttonsArray.forEach(function(element){
    element.addEventListener("click", updateDisplay)
});


/* Adds operate function to = button */
operatorBtn.addEventListener("click", operate)


/*Add's onclick to AC and C button to clear screen and memory */
AC.addEventListener("click", clearScreen);
C.addEventListener("click", clearMemory);


/* Functions below */
function updateDisplay(e){

    //Adds the clicked button to the display field.
    displayText.innerHTML += e.composedPath()[0].innerHTML;

    //Checks if the entered button is an operator and adds the operator to a variable.
    if(displayText.innerHTML.slice(-1) == ("+") || displayText.innerHTML.slice(-1) ==("-") 
    ||displayText.innerHTML.slice(-1) == ("*") || displayText.innerHTML.slice(-1) ==("/")){
        operator = displayText.innerHTML.slice(-1)
    }


    //Too fix here
    if(operator == ""){
        tmp1 += e.composedPath()[0].innerHTML;
    }else {
        tmp2 = e.composedPath()[0].innerHTML;
    }

    if(    displayText.innerHTML.slice(-1) == "="){
        operate(tmp1,tmp2, operator)
    }
    
}

//Clears the display screen
function clearScreen(){
    displayText.innerHTML = ""
}


function clearMemory(){

}

//Arithmatic operations below
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

function operate (tmp1,tmp2,operator) {
    if (operator=="+"){
        displayText.innerHTML += add(tmp1,tmp2);
        console.log("a")
    }
    if (operator=="-"){
        return subtract(tmp1,tmp2);
    }
    if (operator=="multiply"){
        return multiply(tmp1,tmp2);
    }
    if (operator=="+"){
        return divide(tmp1,tmp2);
    }
}

