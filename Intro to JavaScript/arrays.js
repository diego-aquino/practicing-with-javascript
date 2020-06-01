function printElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function example1() {
    var values = [1, 4, "abc", undefined, false, 32];
    printElements(values);
}

function example2() {
    function title(string) {
        return string[0].toUpperCase() + string.substr(1);
    }

    var names = ["diego", "cruz", "aquino"];

    for (let i = 0; i < names.length; i++) {
        names[i] = title(names[i]);
    }
    printElements(names);
}

example2();
