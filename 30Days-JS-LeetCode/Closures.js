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
