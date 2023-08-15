var num = 125;
var rev = 0;

function PalidromeNum(num) {
  let temp = num;
  let rem;
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(rev);

  if (temp === rev) {
    console.log("It is  Palidrome Number");
  } else {
    console.log("This is Not Palidrome Number");
  }
}

PalidromeNum(num);
