let age: any = 25;

age = true;
age = 'hello';
age = {
  name: 'John',
};

let mixed: any[] = [];

mixed.push(4);
mixed.push('mario');
mixed.push(false);

let ninja: {
  name: any,
  age: any;
};

ninja = {
  name: 'John',
  age: 25,
};

ninja = {
  name: 25,
  age: 'John',
};