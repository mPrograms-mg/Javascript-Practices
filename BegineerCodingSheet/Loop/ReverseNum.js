let num,
  rev = 0;

// num = num  % 10
// rev = rev + num * 10;
// num = num / 10;

function reverseNum(num) {
  while (num != 0) {
    let rem;
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

console.log(reverseNum(123));
