// explicit types
var character;
var age;
var isLoggedIn;
// age = 'mario';
age = 13;
// isLoggedIn = 12;
isLoggedIn = true;
// arrays
var ninjas = [];
// ninjas = ['luigi', 'mario'];
ninjas.push('luigi');
// union types
var mixed = [];
mixed.push('mario');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// objects
var ninja1;
// ninja1 = 123;
// ninja1 = [];
ninja1 = {
    name: 'luigi',
    age: 30
};
var ninja2;
ninja2 = {
    name: 'mario',
    age: 20,
    beltColor: 'black'
};
