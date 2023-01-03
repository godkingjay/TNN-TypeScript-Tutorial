"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says {greeting}`);
};
// example 2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
// example 3
let logDetails;
logDetails = (person) => {
    console.log(`${person.name} is ${person.age} years old.`);
};
