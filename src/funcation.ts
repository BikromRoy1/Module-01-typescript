// normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(10, 20);

// Arrow functions
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [10, 20, 30, 40, 50, 60];

const newArray = arr.map((el: number) => el * el);

const person: {
  name: string;
  balance: number;
  addBalance(mony: number): string;
} = {
  name: 'John',
  balance: 10,
  addBalance(mony: number) {
    return `my new balance is ${this.balance + mony}`;
  },
};

// Spread operations
const friends = ['John', 'sally', 'hollow'];
const newFriends = ['toni', 'james', 'jaeger'];

friends.push(...newFriends);
console.log(friends);

// Rest operations
const geestFriend = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};
geestFriend('John', 'sally', 'hollow', 'korims');

// array and object Destructuring
const myBest = {
  fullNames: 'John',
  age: 50,
};

const [bestFriend] = friends;
const { fullNames } = myBest;
