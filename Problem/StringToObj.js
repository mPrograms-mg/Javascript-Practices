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

const value2 = "someValue";

const keys = string.split(".");
const result = {};
let current2 = result;

keys.forEach((key, index) => {
  if (index === keys.length - 1) {
    current2[key] = value2; // Set the value at the final key
  } else {
    current2[key] = {}; // Create an empty object for intermediate keys
    current2 = current2[key]; // Move to the next level
  }
});

console.log(result);

const dataString = "xyz, 30; abc, 25";
const records = dataString.split(";");

console.log(records);
const arrayOfObjects = records.map((record) => {
  const [name, age] = record.split(",");
  return { name, age: parseInt(age) };
});

console.log(arrayOfObjects);
