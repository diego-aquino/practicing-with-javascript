// Write a function that returns a capitalized string

function properNounCorrection(str) {
    return str[0].toUpperCase() + str.substr(1).toLowerCase();
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
