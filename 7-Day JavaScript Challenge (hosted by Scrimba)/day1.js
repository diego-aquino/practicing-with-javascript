// Given a rectangular matrix of characters, add a border of asterisks(*) to it

function addBorder(array) {
    //  write code here.
    let result = [];

    const top = "*".repeat(array[0].length + 2);

    result.push(top);
    for (let line of array) {
        result.push(`*${line}*`);
    }
    result.push(top);

    return result;
}

const strings = ["abc", "ded"];
const result = addBorder(strings);

console.log(result);
