// Write a function that sums the numbers of an array alternatively

function alternatingSums(array) {
    let evenSum = 0, oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            evenSum += array[i];
        } else {
            oddSum += array[i];
        }
    }

    return [evenSum, oddSum];
}

console.log(alternatingSums([-5, 6, -4, -10]));
