// arrow functions
const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
const results = createArray<string, string>('Hello world!', 'I love you!');
const results2 = createArray<boolean, boolean>(false, true);

// spread operator

const myInfo = {
  name: 'Bikrom',
  age: 18,
  salary: 100,
};
// const newData = { ...myInfo, crash };
const createMe = <T>(myInfo: T) => {
  const crash = 'Tammana Bhaita';

  const newData = { ...myInfo, crash };

  return newData;
};

const results5 = createMe(myInfo);

