// 14. Write a JavaScript program to find the largest element in a nested array.

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const newArr = nestedArray.flat(Infinity);
console.log(newArr);

const maxValue = Math.max(...newArr);

console.log(maxValue);
