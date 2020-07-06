// Write a function that returns the largest number with N digits

function largestNumber(numOfDigits) {
    if (numOfDigits <= 0) return NaN;

    const largestNumberAsStr = '9'.repeat(numOfDigits);
    return parseInt(largestNumberAsStr);
}

console.log(largestNumber(0));
console.log(largestNumber(1));
console.log(largestNumber(2));
console.log(largestNumber(3));
console.log(largestNumber(7));
