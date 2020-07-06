// Create a function that calculates the factorial of a number

function factorialNumber(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorialNumber(0));
console.log(factorialNumber(2));
console.log(factorialNumber(32));
console.log(factorialNumber(6));
