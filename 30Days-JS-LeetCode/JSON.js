// Is Object Empty

var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
    z;
  } else {
    let arr = Object.keys(obj);
    return arr.length === 0;
  }
};

const obj = { x: 5, y: 42 };

console.log(isEmpty(obj));

// Given an array arr and a chunk size size, return a chunked array.
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element

var chunk = function (arr, size) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
};

let arr = [1, 2, 3, 4, 5],
  size = 3;

console.log(chunk(arr, size));

// Array Prototype Last
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};

const Arr = [1, 2, 3];
console.log(Arr.last());

const Arr2 = [];
console.log(Arr2.last());
