var compareIfElse = function(number) {
    if (number < 0) {
        console.log("Negativo");
    }
    else if (number == 0) {
        console.log("Nulo");
    }
    else {
        console.log("Positivo");
    }
};

var compareSwitch = function(name) {
    switch (name) {
    case name.toUpperCase(): // if
        console.log("Upper case");
        break; // Prevents the execution of following cases if this one is true
    case name.toLowerCase(): // else if
        console.log("Lower case");
        break; // Prevents the execution of following cases if this one is true
    default: // else
        console.log("Mix upper/lower case");
    }
};

compareIfElse(0);
compareSwitch("Diego");
