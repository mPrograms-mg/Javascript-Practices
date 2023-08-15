//Factorial 3  = 1 * 2 * 3

// let fact = 1;
// for (let index = 1; index <= Num; index++) {
//   fact = fact * index;
// }
// console.log(fact);

function Factorial(num) {
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  console.log("factorial=>", fact);
}

Factorial(6);
