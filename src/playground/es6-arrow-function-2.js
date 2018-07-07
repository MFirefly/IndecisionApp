// Arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// arrow
const addArrow = (a, b) => {
    // console.log(arguments); // no longer available in arrow functions!
    return a + b;
};
console.log(addArrow(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Maja',
    cities: ['Dakovo', 'Zagreb', 'Dublin'],
    printPlacesLived() { // If we want to use 'this' we must use ES5 functions, like this
        // this.cities.forEach((city) => { // this not accessible within anonymous function! But, with arrow func in forEach we don't rebind this so it's fine
        //     console.log(this.name + ' has lived in ' + city);
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge
const multiplier = {
    numbers: [2, 3, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());