let num;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    num += " " + j;
  }
  num += "\n";
}
console.log(num);
//i = row j = coloums
