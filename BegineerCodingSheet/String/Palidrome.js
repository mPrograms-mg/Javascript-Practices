// function palidrome(str) {
//   let ps = str.split("").reverse().join("");
//   return ps.toLowerCase() === str.toLowerCase();
// }

// console.log(palidrome("asdx"));

function palidrome(str) {
  let newStr = str.toLowerCase();
  let letf = 0;
  let right = newStr.length - 1;
  while (letf < right) {
    if (newStr[letf] !== newStr[right]) return false;
    letf++;
    right--;
  }
}
console.log(palidrome("asdx"));
