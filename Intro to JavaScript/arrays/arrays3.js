const array = [2, 2, 3, 4];

array.forEach( item => {
    console.log(item ** 2);
});

console.log(
    array.every( item => item % 2 == 0 )
);

console.log(
    array.some( item => item % 2 == 1)
);
