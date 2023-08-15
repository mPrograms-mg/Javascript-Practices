let str = parseInt(prompt("Number 1:"));
let last = parseInt(prompt("Number 2:"));
function PrimeNtoN(str, last) {
  let prime;
  for (let i = str; i <= last; i++) {
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
}

PrimeNtoN(str, last);
