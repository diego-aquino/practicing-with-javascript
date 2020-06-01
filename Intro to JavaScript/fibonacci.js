function fib(n) {
    let [curr, next] = [1, 1];

    for (let i = 0; i < (n - 1); i++) {
        [curr, next] = [next, curr + next];
    }

    return curr;
}

for (let i = 1; i < 21; i++) {
    console.log(`fib(${i}): ${fib(i)}`);
}
