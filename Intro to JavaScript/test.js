const NAME = "Diego";

let num1 = Number("1.0");
let num2 = String(1); // Or <object>.toString()
let price = 189.52;

console.log(`Hello, ${NAME}!`);
console.log(`num1 (${typeof(num1)}) -> ${num1}`);
console.log(`num2 (${typeof(num2)}) -> ${num2}`);

console.log(`\nprice -> ${price.toFixed(2)}`);
