// Replace all occurrencies of an element in an array with the given substitute,
// and return a new array

function arrayReplace(array, elemToReplace, substitutionElem) {
    const replacedArray = array.map( item => {
        return (item == elemToReplace) ? substitutionElem : item;
    } );

    return replacedArray;
}

console.log(arrayReplace([0, 5, 6, 0, 1], 0, 'a'));
