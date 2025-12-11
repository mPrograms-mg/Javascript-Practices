// check number prime is not
// const num = 5;

// function isPrimeNumber(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       console.log("It's not Prime");
//       return false;
//     }
//   }
//   console.log("It's  Prime");
//   return true;
// }
// isPrimeNumber(num);

// n prime number
// const n = 100;
// const primeNumArr = [];

// function nPrimeNumber(n) {
//   for (let num = 1; num <= n; num++) {
//     if (num <= 1) {
//       continue;
//     }
//     let isPrime = true;

//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       // console.log(num);
//       primeNumArr.push(num);
//     }
//   }

//   console.log(primeNumArr);
// }

// nPrimeNumber(n);

// first 100 prime number
function firstNPrimes(n) {
  const primes = [];
  let num = 2;

  while (primes.length < n) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(num);
    num++;
  }

  return primes;
}

console.log(firstNPrimes(100));

// console.log(Math.sqrt(100));
