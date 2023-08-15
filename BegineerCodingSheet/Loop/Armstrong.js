let num = 340;
let len = num.toString().length;
console.log("Length", len);
let temp = num;
let arm = 0;

while (temp != 0) {
  let mul = 1;
  let rem = temp % 10;
  for (let i = 1; i <= len; i++) {
    mul = mul * rem;
  }
  arm = arm + mul;
  temp = Math.floor(temp / 10);
}
console.log("=", arm);
if (num === arm) {
  console.log("It is Armstrong Number");
} else {
  console.log("This is Not Armstrong Number");
}
