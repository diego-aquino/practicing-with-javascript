function reverse(array) {
    let reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

let exampleArray = [1, 3, 5, 4];

for (let i = 0; i < 5; i++) {
    exampleArray.push(5);
}

console.log(reverse(exampleArray));
