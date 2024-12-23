type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = 'name' | 'age' | 'address'; // manually defined

type TypeUsingKeyOf = keyof PersonType;

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const Property = getProperty({ name: 'Mr. X', age: 123 }, 'age');
