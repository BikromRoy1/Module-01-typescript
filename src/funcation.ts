// normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(10, 20);

// Arrow functions
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [10, 20, 30, 40, 50, 60];

const newArray = arr.map((el: number) => el * el);
