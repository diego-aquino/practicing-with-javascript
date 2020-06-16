let obj1 = {
    a: 2,
    name: "obj1",
    identify() {
        console.log(this.name);
    }
};

let obj2 = Object.create( obj1 ); // obj2 is prototype-delegated to obj1

console.log(obj2.a);
obj2.identify();

console.log(Object.isPrototypeOf.call(obj1, obj2));
console.log(Object.getPrototypeOf(obj2));

console.log(obj1.hasOwnProperty("a"));
console.log(obj2.hasOwnProperty("a"));
