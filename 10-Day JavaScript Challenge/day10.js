// Write a function that returns the max multiple of a number (divisor) that
// does not exceed the given bound

function maxMultiple(divisor, bound) {
    function solution1() {
        const remainder = bound % divisor;
        return bound - remainder;
    }

    function solution2() {
        const maxIntegerMultiplier = Math.floor(bound / divisor);
        return divisor * maxIntegerMultiplier;
    }

    return solution1();
}


console.log(maxMultiple(33, 100));
