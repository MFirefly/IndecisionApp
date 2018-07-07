// ES5
const square = function (x) {
    return x * x;
};

function square2(x) {
    return x * x;
}

// ES6 - Arrow functions always anonymous
const squareArrow = (x) => {
    return x * x;
};

// ES6 - If returns single expression, use expression syntax
const squareArrow2 = (x) => x * x;

console.log(square(8));
console.log(square2(4));
console.log(squareArrow(7));
console.log(squareArrow2(4));

// Challenge
const getFirstName = (fullName) =>  {
    return fullName.split(' ')[0];
};
const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log("First name: ", getFirstName('Maja Filakovic'));
console.log("First name short: ", getFirstNameShort('Maja Filakovic'));