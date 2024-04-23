//Find Falsy Value in Object

const obj = { a: null, b: false, c: 1 };
const falsyObject = Object.entries(obj);
let newObj = falsyObject.filter(([key, value]) => !value);
console.log(Object.fromEntries(newObj));

let newObj2 = falsyObject.filter(([key, value]) => value);
console.log(Object.fromEntries(newObj2));
