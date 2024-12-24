class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `this ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  // Inheritance for parent class
  //   name: string;
  //   age: number;
  //   address: string;
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
    // this.name = name;
    // this.age = age;
    // this.address = address;
  }
  //   makeSleep(hours: number): string {
  //     return `this ${this.name} will sleep for ${hours}`;
  //   }
}

const student1 = new Student('Komi', 30, 'united states');
const result6 = student1.makeSleep(5);

console.log(result6);

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numberOfClass: number): string {
    return `This ${this.name} will take ${numberOfClass} class`;
  }
}

const Teacher1 = new Teacher('sunny leone', 55, 'India', 'Teaching');
