String.reverse = function() {
    let reversed = "";

    for (let i = this.length - 1; i >= 0; i--) {
        reversed = reversed.concat(this[i]);
    }

    return reversed;
};

var string = "goo";
var array = [1, 2, 3];

var result = String.reverse.call(string);

console.log(result);
