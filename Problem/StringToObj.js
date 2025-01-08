// Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}

const string = "a.b.c";
const value = 3;

const char = string.split(".");
console.log(char);

let obj = {};
let current = obj;

for (let index = 0; index < char.length; index++) {
  current[char[index]] = {};
  current = current[char[index]];
}

current[char[char.length - 1]] = value;
console.log(JSON.stringify(obj));
