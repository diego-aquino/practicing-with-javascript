const array = [1, 2, 3, 4];

const mapped = array.map( item => item ** 2 );
const filtered = array.filter( item => item % 2 == 0 );
const total = array.reduce( (total, item) => total + item );

console.log(mapped);
console.log(filtered);
console.log(total);
