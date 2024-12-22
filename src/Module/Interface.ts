type user = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtentUser extends IUser {
  role: string;
}

const newUser: IExtentUser = {
  name: 'user',
  age: 36,
  role: '9546',
};

// const userWithTypeAlias: user = {
//   name: 'user',
//   age: 36,
// };

// const userWithTypeInterfaces: IUser = {
//   name: 'json',
//   age: 36,
// };
