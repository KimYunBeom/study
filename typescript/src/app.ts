const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;
var result;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number) => {
//   return a + b;
// };
const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput = (output: string | number) => console.log(output);
const printOutput: (a: string | number) => void = (output) => console.log(output);

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

printOutput(add(5));
