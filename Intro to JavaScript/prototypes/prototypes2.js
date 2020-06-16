let obj1 = {
    identify() {
        console.log(this.name);
    }
};

let obj2 = {
    name: "obj2"
};

Object.setPrototypeOf(obj2, obj1);

console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf(obj1));

console.log(obj1.isPrototypeOf(obj2));

obj2.identify();
