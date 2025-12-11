// check number prime is not
const num = 5;

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      console.log("It's not Prime");
      return false;
    }
  }
  console.log("It's  Prime");
  return true;
}

// console.log(isPrimeNumber(num));
isPrimeNumber(num);
