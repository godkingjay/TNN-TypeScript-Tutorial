"use strict";
// let greet = () => {
//   console.log('Hello, world!');
// }
// greet = 'hello';
let greet;
greet = () => {
    console.log('Hello, world!');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '30');
const minus = (a, b) => {
    return (a + b);
};
let result = minus(10, 7);
// result = '10';
console.log(result);
