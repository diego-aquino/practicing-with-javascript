function range(...args) {
    let start, end, step;

    if (args.length == 1) {
        start = 0;
        end = args[0];
        step = 1;
    }
    else if (args.length == 2) {
        start = args[0];
        end = args[1];
        step = 1;
    }
    else if (args.length == 3) {
        start = args[0];
        end = args[1];
        step = args[2];
    }
    else {
        return;
    }

    function reachedLimit(i) {
        if (step > 0) {
            return i >= end;
        }
        else if (step < 0) {
            return i <= end;
        }
        else {
            return false;
        }
    }

    let array = [];

    for (let i = start; !(reachedLimit(i)); i += step) {
        array.push(i);
    }

    return array;
}
