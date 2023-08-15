function isPrime(num) {
  let isPrimeNum = 1;
  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i == 0) {
      isPrimeNum = 0;
      break;
    }
  }
  return isPrimeNum;
}

console.log("Prime Num", isPrime(17));
let n = 20;
let flag = 0;
for (let i = 0; i < n / 2; i++) {
  if (isPrime(i) == 1) {
    if (isPrime(n - i) == 1) {
      console.log(n);
      flag = 1;
    }
  }
}
if (flag == 0) {
  console.log(n);
  return 0;
}
