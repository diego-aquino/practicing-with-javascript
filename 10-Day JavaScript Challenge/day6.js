// Write a function that returns a string enclosed in brackets

function encloseInBrackets(str) {
    function solution1() {
        return `(${str})`;
    }

    function solution2() {
        return '(' + str + ')';
    }

    function solution3() {
        let result = '(';
        result = result.concat(str);
        result = result.concat(')');

        return result;
    }

    return solution1();
}

console.log(encloseInBrackets('abc'));
