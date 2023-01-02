// let greet = () => {
//   console.log('Hello, world!');
// }

// greet = 'hello';

let greet: Function;

greet = () => {
  console.log('Hello, world!');
}

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, '30');

const minus = (a: number, b: number): number => {
  return(a + b);
}

let result = minus(10, 7);
// result = '10';

console.log(result);