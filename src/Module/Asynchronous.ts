// // mocking

// // {JSON} Placeholder

// interface iTodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const getTodo = async (): Promise<iTodo> => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   return await response.json();
// };

// const getTodoData = async (): Promise<void> => {
//   const result = await getTodo();
//   console.log(result);
// };

// getTodoData();

// const makePromise = () => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = 'Data is fetched';

//     if (data) {
//       resolve(data);
//     } else {
//       reject('Data is not fetched');
//     }
//   });
// };

// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };
