// Program to find Reverse of a string without using built-in method

const str = "Mahesh";

// Method -1
// findReverseStr(str);
// function findReverseStr(str) {
//   console.log("Str....", str);
//   let reverStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverStr += str[i];
//   }
//   console.log("Reverse str...", reverStr);
// }

//Method - 2
const reverseStr = (str) => {
  let newStr = str.split("").reverse().join("");
  return newStr;
};

console.log(reverseStr(str));
