// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) {
      res.push(this[index]);
    }
  }
  return res;
};

console.log([1, 2, 3, 4].myFilter((ele) => ele > 2));
console.log([1, 2, 3, 4].myFilter((ele) => ele % 2 === 0));

// Filter build method

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) {
      res.push(this[index]);
    }
  }
  return res;
};

console.log([1, 2, 3, 4].myFilter((ele) => ele > 2));
console.log([1, 2, 3, 4].myFilter((ele) => ele % 2 === 0));