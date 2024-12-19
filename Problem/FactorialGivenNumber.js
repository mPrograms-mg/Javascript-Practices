// Find the factorial of given number ?

// Method - 1
function findFactorial(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return n * findFactorial(n - 1);
}

// console.log(findFactorial(5));

//Method - 2
function factorial(n) {
  let fact = 1;
  if (n > 0) {
    for (let index = 1; index <= n; index++) {
      fact = fact * index;
    }
  } else {
    return n;
  }
}

console.log(findFactorial(7));
