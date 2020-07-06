// Write a function that returns the first digit in a string
// (digits may be anywhere in the string)

function firstDigit(str) {
    for (let i = 0; i < str.length; i++) {
        if (!Number.isNaN(+str[i])) {
            return str[i];
        }
    }
}

console.log(firstDigit('sdsa3dsad020a2'));
