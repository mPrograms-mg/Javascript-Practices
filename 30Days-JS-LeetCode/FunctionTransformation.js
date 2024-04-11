// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

function funTransformations(functions) {
  return function (x) {
    for (let index = functions.length - 1; index >= 0; index--) {
      x = functions[index](x);
    }
    return x;
  };
}

functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let x = 4;
console.log(funTransformations(functions, 4));

// Return Length of Arguments Passed
let argLenght = function (...args) {
  return args.length;
};

console.log("Argument Length..", argLenght(5));

console.log("Argument Length..", argLenght({}, null, "3"));

//memoize Programs
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let value = JSON.stringify(args);
    if (value in cache) {
      return cache[value];
    } else {
      let result = fn.apply(this, args);
      cache[value] = result;
      return result;
    }
  };
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.time();
console.log(memoizedSum(2, 2));
console.timeEnd();

console.time();
console.log(memoizedSum(2, 2));
console.timeEnd();
