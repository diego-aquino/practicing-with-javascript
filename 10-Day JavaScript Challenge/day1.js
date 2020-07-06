// Write a function that returns the sum of any amount of numbers passed as arguments

function add(...numbers) {
    if (numbers.length > 0) {
        return numbers.reduce( (total, current) => total + current );
    }
}

console.log(add(1));
console.log(add(1, 2, 3));
console.log(add(4, 8));
console.log(add(4, 0, 1, 23, 3, 8));
