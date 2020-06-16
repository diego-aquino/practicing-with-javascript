let person = {
    name: "Diego",
    ageInYears: 17,

    get ageInMonths() {
        return this.ageInYears * 12;
    },

    set ageInMonths(newAge) {
        this.ageInYears = newAge / 12;
    }
};

console.log(person);
console.log(person.name);

console.log(person.ageInYears);
console.log(person.ageInMonths);

person.ageInMonths = 180;

console.log(person.ageInYears);
console.log(person.ageInMonths);
