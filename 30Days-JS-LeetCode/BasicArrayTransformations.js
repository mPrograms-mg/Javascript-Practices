// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

//Map Method
var map = function (arr, fn) {
  let res = [];
  for (let index = 0; index < arr.length; index++) {
    res.push(fn(arr[index], index));
  }
  return res;
};

(arr = [1, 2, 3]),
  (fn = function plusone(n) {
    return n + 1;
  });

const newArray = map(arr, fn);
console.log(newArray);

// Method 2
let numArr = [1, 2, 3, 4, 5];
let mapFun = numArr.map(mapFunction);

function mapFunction(n) {
  return n + 1;
}
console.log("Given array", numArr);
console.log("Custome Map fun", mapFun);

// Filter build method
var filter = function (arr, fn) {
  let res = [];
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index], index)) {
      res.push(arr[index]);
    }
  }
  return res;
};

(arr = [0, 10, 20, 30]),
  (fn = function greaterThan10(n) {
    return n > 10;
  });
console.log(filter(arr, fn));

// Reduces Methods

var reduce = function (nums, fn, init) {
  let total = init;
  for (let i = 0; i < nums.length; i++) {
    total = fn(total, nums[i]);
  }

  return total;
};

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr;
};
init = 0;

console.log(reduce(nums, fn, init));
