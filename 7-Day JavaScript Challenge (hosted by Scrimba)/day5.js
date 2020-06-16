// Check if all digits of the given integer are even

function evenDigitsOnly(number) {
    for (let digit of number.toString()) {
        if (digit % 2 == 1) {
            return false;
        }
    }

    return true;
}

evenDigitsOnly("1253");

