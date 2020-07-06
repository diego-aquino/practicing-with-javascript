// Write a function that returns all longest strings of an array

function allLongestStrings(array) {
    const longestStringLength = array.reduce( (maxLength, string) => {
        return (string.length > maxLength) ? string.length : maxLength;
    }, 0);

    const allLongestStringsArray = array.filter(
        string => (string.length == longestStringLength)
    );

    return allLongestStringsArray;
}

console.log(
    allLongestStrings(['sa', 'aaa', 'dda'])
);
