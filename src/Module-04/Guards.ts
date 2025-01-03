// // key of Guards
// type Alphanumeric = string | number;
// function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
//   if (typeof param1 === 'number' && typeof param2 === 'number') {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }
// const result10 = add('1', '2');
// const result20 = add(1, 2);

// // In Guards
// type NormalUserType = {
//   name: string;
// };
// type AdminUserType = {
//   name: string;
//   role: 'admin';
// };
// function getUser(user: NormalUserType | AdminUserType): string {
//   if ('role' in user) {
//     return `I am an admin and my role is ${user.role}`;
//   } else {
//     return `I am a normal user`;
//   }
// }
// const normalUser: NormalUserType = { name: 'sunny' };
// const adminUser1: AdminUserType = { name: 'sunny', role: 'admin' };

// console.log(getUser(normalUser));
// console.log(getUser(adminUser1));

// // instanceof Guards
// class Animal {
//   name: string;
//   species: string;

//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
//   makeSound() {
//     console.log(`I am making sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log('I am Barking');
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMew() {
//     console.log('I am Mewing');
//   }
// }

// function isDog(animal: Animal): animal is Dog {
//   return animal instanceof Dog;
// }

// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBark();
//   } else if (isCat(animal)) {
//     animal.makeMew();
//   } else {
//     animal.makeSound();
//   }
// }

// const animal1 = new Dog('Gagman', 'Dog'); // instanceof Dogs
// const animal2 = new Cat('korean', 'Cat'); // instanceof Cats

// getAnimal(animal2);
