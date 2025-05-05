//implement curring in

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

console.log(sum(1)(2)(3));

// Curry with function return

function multi(a, b, c) {
  return a * b * c;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

const curriedSum = curry(multi);

console.log(curriedSum(2)(2)(3));
