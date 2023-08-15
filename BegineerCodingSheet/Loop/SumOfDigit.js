let digit = 123;
let sum = 0;
function sumOfDigit(digit) {
  while (digit != 0) {
    let rem = digit % 10;
    sum = sum + rem;
    digit = Math.floor(digit / 10);
  }
  console.log(sum);
}

sumOfDigit(digit);
