let num1 = 5,
  num2 = 3;
let ans;
// function PowNum(num1, num2) {
//   ans = Math.pow(num1, num2);
//   return ans;
// }

function PowNum(num1, num2) {
  let result = 1;
  for (let index = 0; index < num2; index++) {
    result = result * num1;
  }
  return result;
}
console.log(PowNum(num1, num2));
