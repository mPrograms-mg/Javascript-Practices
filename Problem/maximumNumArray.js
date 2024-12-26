//  Write a JavaScript program to find the maximum number in an array.

const array = [23, 54, 67, 12, 8, 9, 0, 34, 2222, 123454];
// const ans = array.sort((a, b) => a - b);
// console.log(ans[array.length - 1]);

let number = 0;

for (let index = 0; index < array.length; index++) {
  if (array[index] > number) {
    number = array[index];
  }
}

// console.log(number);

// console.log(Math.max(...array));

const maxNumber = array.reduce((cur, max) => {
  return cur > max ? cur : max;
}, array[0]);
console.log(maxNumber); // Output: 8
