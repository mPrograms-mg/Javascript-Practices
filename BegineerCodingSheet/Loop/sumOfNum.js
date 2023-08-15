//Sum of N Number 1 + 2 + 3 + 4 + 5
let num = 5;
// let sum = 0;

// for (let index = 0; index <= num; index++) {
//   sum += index;
// }
// console.log(sum);

function sumOfN(num) {
  let sum = 0;
  for (let index = 0; index <= num; index++) {
    sum += index;
  }
  console.log("Total = ", sum);
}
sumOfN(10);
