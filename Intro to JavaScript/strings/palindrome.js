function palindrome(string) {
    let limit = string.length;

    if (string.length % 2 == 1) {
        limit--;
    }

    limit /= 2;

    for (let i = 0; i < limit; i++) {
        let left = i;
        let right = string.length - i - 1;

        if (string[left] != string[right]) {
            return false;
        }
    }

    return true;
}

var tests = [
    ["abc", false],
    ["fguiyu", false],
    ["diego", false],
    ["aba", true],
    ["baccab", true],
    ["abggba", true],
    ["abccaa", false],
    ["agsga", true]
];

for (let i = 0; i < tests.length; i++) {
    if (palindrome(tests[i][0]) != tests[i][1]) {
        console.log(`${tests[i][0]} -> ${tests[i][1]}`);
    }
}

