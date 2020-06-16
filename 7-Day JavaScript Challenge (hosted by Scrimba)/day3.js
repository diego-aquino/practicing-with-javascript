// Write a function that return the first duplicate element in a given array

function firstDuplicate(nums) {
    //  write code here.
    let computedNumbers = {};

    for (let num of nums) {
        if (computedNumbers.hasOwnProperty(num.toString())) {
            return num;
        } else {
            computedNumbers[num.toString()] = 1;
        }
    }

    return -1;
}

console.log(firstDuplicate([2, 1, 6, 5, 3, 0]));
