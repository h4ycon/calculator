



function add (a,b) {
    console.log(a+b)
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

        console.log("works")
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
