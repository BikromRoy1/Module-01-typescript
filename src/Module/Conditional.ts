// // a type dependent on another type
// type a1 = null;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : null;

// // nested Conditional  types
// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;

// type shaikh = {
//   wife1: string;
//   wife2: string;
// };

// type checkWife<T, K> = K extends keyof shaikh ? true : false;

// type checkWife1 = checkWife<shaikh, 'wife1'>;

// // check korbe shaikh type wife1  ase kina ? true : false
