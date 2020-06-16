// You are given an integer. Return the sum of its digits.

function addDigits(num)  {
    //  write code here.
    const numAsString = num.toString();

    let total = 0;
    for (let i = 0; i < numAsString.length; i++) {
        total += Number(numAsString[i]);
    }

    return total;
}

console.log(addDigits(29));
console.log(addDigits(90));
console.log(addDigits(1231635132132));
