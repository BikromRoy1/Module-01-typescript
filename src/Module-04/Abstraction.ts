// interface
// interface IVchicle {
//   name: string;
//   model: string;
// }

// const vchicle: IVchicle = {
//     name: "car",
//     model:"2008"
// }

// interface IVchicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }

// class Vehicle implements IVchicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}

//   startEngine(): void {
//     console.log('i am starting ENGINE');
//   }

//   stopEngine(): void {
//     console.log('i am stopping ENGINE');
//   }

//   move(): void {
//     console.log('i am moving');
//   }

//   test() {
//     console.log('i am testing');
//   }
// }

// const vchicle = new Vehicle('car', 'BMW', 8500);

//Abstraction class methods

abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log('i am moving');
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log('i am starting ENGINE');
  }
  stopEngine(): void {
    console.log('i am stopping ENGINE');
  }
}

// const car1 = new Vehicle('car', 'BMW', 8500);
