let recursionCount = 0;

function factorial(num) {
    recursionCount++;

    if (num == 0 || num == 1) {
        return 1;
    }
    else if (num > 1) {
        return num * factorial(num - 1);
    }
}

console.log(factorial(10000));
console.log(recursionCount);
