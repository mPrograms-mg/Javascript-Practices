// Asynchronous Task : Allow multiple Operations to be Performed concurrently without waiting.
// Does't block the excutions flow and allows ther promgrams to continue
// EX (I/O Operations, network request, fetching data, Handle with Callbacks, Promises, Async/Await)

// Promise with Resolve state
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Excuted....");
//   }, 2000);
// });

// myPromise.then((value) => {
//   console.log("Promise Resolved After");
//   console.log(`This is Promise Value ${value}`);
// });

// Why do you need a promise
// Promises are used to handle asynchronous operations.
// They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

// What are the three states of promise
// Promises have three states:
// Pending: This is an initial state of the Promise before an operation begins
// Fulfilled: This state indicates that the specified operation was completed.
// Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown

// const promise = new Promise((resolve, reject) => {
//   let isTrue = false;
//   if (isTrue) {
//     resolve("I'm a Promise!");
//   } else {
//     reject("Error in Promise");
//   }
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

const newPromise = new Promise((resolve, reject) => {
  let fileLoad = true;
  if (fileLoad) {
    resolve("File Was Loaded");
  } else {
    reject("File Was not Loaded");
  }
});

newPromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
