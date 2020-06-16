// 'this' in a function depends on where and how a it was called

// Explicit binding:
function explicitBinding() {
    function foo() {
        console.log(this.a);
    }

    let obj = {
        a: 2,
        foo
    };

    obj.foo();
}

// Hard binding;
function hardBinding() {
    function foo() {
        console.log(this.a);
    }

    let obj = {
        a: 5
    };

    foo.call(obj);

    //

    obj.a = 10;
    let baz = foo.bind(obj);
    baz();
}

function newBinding() {
    function foo(b) {
        this.a = b;
    }

    let obj = new foo(7);
    console.log(obj.a);
}

newBinding();
