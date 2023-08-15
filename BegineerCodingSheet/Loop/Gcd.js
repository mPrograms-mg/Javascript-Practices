let n1 = 98,
  n2 = 56;

function gfd(a, b) {
  let ans, gcd;
  ans = Math.min(a, b);
  for (let i = ans; i > 0; --i) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
      return gcd;
    }
  }
}

console.log(gfd(n1, n2));
