// Ternary Operator
const age: number = 22;

// if (age >= 18) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }
const isAdult = age >= 18 ? 'Yes' : 'No';
// console.log(isAdult);

//Nullish Coeslancing Operator
// null and undefined
const isAuthenticatedUser = undefined;
const UserName = isAuthenticatedUser ?? 'Guest';

console.log(UserName);
