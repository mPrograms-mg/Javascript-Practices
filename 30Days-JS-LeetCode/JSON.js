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

// Group By
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

Array.prototype.groupBy = function (fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item);

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(item);

    return grouped;
  }, {});
};

const fn = function (item) {
  return String(item > 2);
};
console.log([1, 2, 3].groupBy(fn));

// Sort By

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

arr = [5, 4, 1, 2, 3];
const fn2 = function (x) {
  return x;
};

console.log(sortBy(arr, fn2));

//Join Two Arrays by ID
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

var join = function (arr1, arr2) {
  const result = {};

  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {
    if (result[arr2[j].id]) {
      for (const key in arr2[j]) {
        console.log("Key...", key);
        result[arr2[j].id][key] = arr2[j][key];
      }
    } else {
      result[arr2[j].id] = arr2[j];
    }
  }

  return Object.values(result);
};

let arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];

console.log(join(arr1, arr2));

// Flatten Deeply Nested Array using Recursion Technique
const flat = function (arr, n) {
  if (n === 0) {
    return arr.slice();
  }

  const flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nestedArray = flat(arr[i], n - 1);
      flatArray.push(...nestedArray);
    } else {
      flatArray.push(arr[i]);
    }
  }

  return flatArray;
};

arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 2;

console.log(flat(arr, n));

//Compact Object
var compactObject = function (obj) {
  if (obj === null) {
    return obj;
  }

  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  const compactObj = {};

  for (const key in obj) {
    console.log(obj[key]);
    let value = compactObject(obj[key]);
    if (value) {
      compactObj[key] = value;
    }
  }

  return compactObj;
};

// const Obj = [null, 0, false, 1];

const obj2 = { a: null, b: [false, 1] };

compactObject(obj2);
