//Generate Multiplication Table

let Mult = prompt("Enter Number of Table");
// let ans;
// for (let index = 1; index <= 10; index++) {
//   console.table((ans = Mult * index));
// }

function Multiplication(Mult) {
  let ans;
  for (let index = 1; index <= 10; index++) {
    console.log((ans = Mult * index));
  }
}

Multiplication(Mult);
// console.log(ans);
