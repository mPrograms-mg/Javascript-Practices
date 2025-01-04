// Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

const string = "Mahesh Mohan Kshirsagar";

// let reverStr = "";
// for (let index = string.length; index >= 0; index--) {
//   const element = string[index];
//   reverStr += element;
// }
// console.log(reverStr);

const reverArr = string.split(" ");
reverArr.reverse().join("");
console.log(reverArr);
