// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const arr1 = [34, 5, 6, 76, 2, 4, 6, 9, 87, 5];

// const evenArray = arr1.filter((ele) => ele % 2 === 0);
// console.log(evenArray);

const evenArray = [];

// for (let index = 0; index < arr1.length; index++) {
//   if (arr1[index] % 2 === 0) {
//     evenArray.push(arr1[index]);
//   }
// }
// console.log(evenArray);

for (let val of arr1) {
  if (val % 2 === 0) {
    evenArray.push(val);
  }
}

console.log(evenArray);
