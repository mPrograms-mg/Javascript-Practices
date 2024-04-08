// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Input: args = []
// Output: "Hello World"
// Explanation:

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
f(); // "Hello World"
console.log(f());

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function (val) {
  return {
    toBe: function (val1) {
      if (val === val1) return true;
      throw new Error("Not Equal");
    },
    notToBe: function (val1) {
      if (val !== val1) return true;
      throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5));
// console.log(expect(5).toBe(null));
// console.log(expect(5).notToBe(null));

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
  let currentValue = init;

  return {
    increment: function () {
      return (currentValue += 1);
    },

    decrement: function () {
      return (currentValue -= 1);
    },

    reset: function () {
      return (currentValue = init);
    },
  };
};

const counter2 = createCounter(5);
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());
