let user = {
    name: "Diego",
    age: 17,
    background: {
        highSchool: true,
        college: true
    }
};

console.log(user.name);
console.log(user.age);
console.log(user.background.highSchool);

console.log();

console.log(user["name"]);
console.log(user["age"]);
console.log(user["background"]["highSchool"]);
