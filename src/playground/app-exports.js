//import './utils.js';
// import subtract, { square, add } from './utils.js'; // subtract is default export! For defaults name is not important, it can be anything
//
// console.log('App.js is running!!!!');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 81));

import isSenior, { isAdult, canDrink } from "./person.js";

console.log(isAdult(12));
console.log(canDrink(25));
console.log(isSenior(45));