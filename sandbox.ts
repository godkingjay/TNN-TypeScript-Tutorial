// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'mario';
age = 13;

// isLoggedIn = 12;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

// ninjas = ['luigi', 'mario'];
ninjas.push('luigi');

// union types
let mixed: (string | number | boolean)[] = [];

mixed.push('mario');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;

uid = '123';
uid = 123;

// objects
let ninja1: object;
// ninja1 = 123;
// ninja1 = [];
ninja1 = {
  name: 'luigi',
  age: 30,
};

let ninja2: {
  name: string,
  age: number,
  beltColor: string,
};

ninja2 = {
  name: 'mario',
  age: 20,
  beltColor: 'black',
  // skills: [],
};