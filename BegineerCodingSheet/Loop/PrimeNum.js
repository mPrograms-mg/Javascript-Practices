// let Num = 4;
// let cout = 0;
// for (let i = 1; i <= 5; i++) {
//   if (Num % i === 0) {
//     cout++;
//   }
// }
// if (cout === 2) {
//   console.log("This is PrimeNumber");
// } else {
//   console.log("This is a not PrimeNumber");
// }

let Num = 20;
var prime;
for (let i = 1; i <= Num; i++) {
  for (let j = 2; j < i - 1; j++) {
    if (i % j == 0) {
      prime++;
    }
  }
  if (prime == 0) {
    console.table(i);
  } else {
    prime = 0;
  }
}
