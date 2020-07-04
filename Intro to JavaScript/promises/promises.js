let p1 = new Promise( (resolve, reject) => {
    resolve(15);
} );

let p2 = new Promise( (resolve, reject) => {
    p1.then( value  => {
        resolve(value + 10);
    });

} );

p1.then( value  => {
    console.log(value);
});

p2.then(
    value => {
        console.log(`Resolved: ${value}`);
    },
    value => {
        console.log(`Rejected: ${value}`);
    }
);
