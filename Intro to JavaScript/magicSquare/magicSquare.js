function main(matrix) {
    const n = matrix.length;

    if (isSquare()) {
        var expectedSum = getExpectedSum();
        return isMagicSquare();
    }
    else { return false; }

    function isSquare() {
        if (n > 0) {
            const m = matrix[0].length;
            return n == m;
        }
        else { return false; }
    }

    function getExpectedSum() {
        let expectedSum = 0;
        const row = 0;

        for (let column = 0; column < n; column++) {
            expectedSum += matrix[row][column];
        }

        return expectedSum;
    }

    function isMagicSquare() {
        return allValidRows() && allValidColumns()
            && allValidDiagonals() && !(repeatedElements());

        function allValidRows() {
            for (let row = 0; row < n; row++) {
                let rowSum = 0;

                for (let column = 0; column < n; column++) {
                    rowSum += matrix[row][column];
                }

                if (rowSum != expectedSum) {
                    return false;
                }
            }

            return true;
        }

        function allValidColumns() {
            for (let column = 0; column < n; column++) {
                let columnSum = 0;

                for (let row = 0; row < n; row++) {
                    columnSum += matrix[row][column];
                }

                if (columnSum != expectedSum) {
                    return false;
                }
            }

            return true;
        }

        function allValidDiagonals() {
            let mainDiagonalSum = 0;
            for (let i = 0; i < n; i++) {
                mainDiagonalSum += matrix[i][i];
            }

            if (mainDiagonalSum != expectedSum) {
                return false;
            }

            let secondaryDiagonalSum = 0;
            let skipColumn = n - 2;

            for (let row = 0; row < n; row++) {
                secondaryDiagonalSum += matrix[row][skipColumn + 1];
                skipColumn--;
            }

            if (secondaryDiagonalSum != expectedSum) {
                return false;
            }

            return true;
        }

        function repeatedElements() {
            let knownElements = [];

            for (let row = 0; row < n; row++) {
                for (let column = 0; column < n; column++) {
                    const element = matrix[row][column];

                    if (knownElements.find( item => item == element )) {
                        return false;
                    }
                    else {
                        knownElements.push(element);
                    }
                }
            }
        }
    }
}

const m = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
];

console.log(main(m));
