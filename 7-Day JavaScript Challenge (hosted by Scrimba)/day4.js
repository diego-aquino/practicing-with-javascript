// Sum all the prime numbers up to and including the provided number

function sumAllPrimes(num) {
    function getPrimesUpTo(num) {
        let primes = [];
        for (let n = 2; n <= num; n++) {
            primes.push(n);
        }

        let i = 0;
        while (i < primes.length) {
            const current = primes[i];

            let j = i + 1;
            while (j < primes.length) {
                if (primes[j] % current == 0) {
                    primes.splice(j, 1);
                } else {
                    j++;
                }
            }

            i++;
        }

        return primes;
    }

    const primes = getPrimesUpTo(num);

    return (primes.length > 0) ?
        primes.reduce( (total, current) => total + current ) : 0;
}

console.log(sumAllPrimes(10));
