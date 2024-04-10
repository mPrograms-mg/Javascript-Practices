// Functions Compositions

function add(a, b) {
  return a + b;
}

function multiple(val) {
  return val * 2;
}

function square(val) {
  return val * val;
}

function addSquare(a, b) {
  return square(add(a, b));
}

let result = addSquare(2, 3);
console.log(result);

function composition(f1, f2) {
  return function (a, b) {
    return f2(f1(a, b));
  };
}

let result2 = composition(add, multiple);
console.log(result2(10, 3));

//using arrow functions
const compositionFun = (f1, f2, f3) => (a, b) => f3(f2(f1(a, b)));
let result3 = compositionFun(add, multiple, square);
console.log(result3(10, 30));

// Multiple Functions as agrument

function compositionAllFun(...funtions) {
  return function (...values) {
    return funtions.reduce((val, fn) => (fn(val), values));
  };
}
let result4 = compositionFun(add, multiple, square);
console.log(result4(2, 5));

// using arroe function
const compositionFunArrow =
  (...functions) =>
  (...values) =>
    functions.reduce((val, fn) => (fn(val), values));
let result5 = compositionFun(add, multiple, square);
console.log(result5(8, 2));

const add5 = (x) => x + 5;
const multiplyBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

const composeNew = (...functions) => {
  return (input) => {
    return functions.reduceRight((acc, fn) => {
      return fn(acc);
    }, input);
  };
};

const composedFunction = composeNew(subtract10, multiplyBy3, add5);
const result6 = composedFunction(7);

console.log(result6);

//example
const double = (x) => x * 2;
const square2 = (x) => x * x;

var output1 = double(2);
var output2 = square2(output1);
console.log(output2);

var output_final = square2(double(2));
console.log(output_final);
