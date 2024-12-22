// // Generic in Interface
// interface Crashinterface<T, U = null> {
//   name: string;
//   husband: T;
//   wife?: U;
// }

// const crash1: Crashinterface<boolean, string> = {
//   name: 'Collide Violently',
//   husband: true,
//   wife: 'sunny',
// };

// const crash2: Crashinterface<string> = {
//   name: 'Collide Violently',
//   husband: 'joeos',
// };

// interface husbandinterface {
//   name: string;
//   salary: number;
// }

// const crash3: Crashinterface<husbandinterface> = {
//   name: 'Tamannaah Bhatia',
//   husband: {
//     name: 'Bikrom',
//     salary: 100,
//   },
// };

// type GenericTuple<X, Y> = [X, Y];

// const relationShip: GenericTuple<string, string> = ['Bikrom', 'Tampan'];

// interface relationShipSalaryInterface {
//   name: string;
//   salary: number;
// }

// const relationShipSalary: GenericTuple<relationShipSalaryInterface, string> = [
//   {
//     name: 'Bikrom',
//     salary: 50000000000000000,
//   },
//   'Tampan',
// ];

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
// const rollNumbers2: GenericArray<string> = ['1', '2', '3', '4', '5'];
