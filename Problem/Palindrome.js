// . How to check whether a string or number is palindrome or not  ?

const str = "Mahesh";
console.log(str.length);

//  Method - 1
// const isPalidrome = (str) => {
//     const newStr = str.split('').reverse().join('')
//     console.log("New String....", newStr);
//     return str === newStr ? true : false
// }
// console.log(`${str} is Palidrom String`, isPalidrome(str));

//Method - 2

console.log(isPalidromeStr(str));

function isPalidromeStr(strArg) {
  for (let i = 0; i < Math.sqrt(strArg.length); i++) {
    if (strArg[i] !== strArg[strArg.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
