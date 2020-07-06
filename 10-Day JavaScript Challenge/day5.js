// Create a function that checks if a string is a palindrome (case insensitive)

function caseInsensitivePalindrome(str) {
    for (let left = 0; left < str.length / 2; left++) {
        const right = str.length - 1 - left;

        if (str[left].toLowerCase() != str[right].toLowerCase()) {
            return false;
        }
    }

    return true;
}

console.log(caseInsensitivePalindrome('aaba'));
