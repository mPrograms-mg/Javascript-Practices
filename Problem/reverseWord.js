// Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

const string = "Mahesh";

// for (const element of string) {
//   console.log(element);
// }
let reverStr = "";
for (let index = string.length; index >= 0; index--) {
  const element = string[index];
  reverStr += element;
}
console.log(reverStr);
