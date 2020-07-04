// Creates a new promise and call resolve() with the given parameters
const a = Promise.resolve(10);

a
    .then( value => {
        console.log(value);

        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(value * 2);
            }, 10000);
        } );
    })
    .then( value => {
        console.log(value);
    });
