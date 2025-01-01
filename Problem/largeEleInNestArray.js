// 14. Write a JavaScript program to find the largest element in a nested array.

const nestedArray = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
];
const newArr = nestedArray.flat(Infinity);
console.log(newArr);

const maxValue = Math.max(...newArr);

console.log(maxValue);

function findLargestElement(arr) {
  return arr.reduce((max, item) => {
    if (Array.isArray(item)) {
      return Math.max(max, findLargestElement(item)); // Recurse for nested arrays
    }
    return Math.max(max, item); // Compare numbers
  }, -Infinity);
}

console.log(findLargestElement(nestedArray));
