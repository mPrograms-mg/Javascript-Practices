let string = "";

for (let i = 1; i <= 6; i++) {
  for (let j = i; j <= 6; j++) {
    string += " * ";
  }
  for (let k = 6; k >= i; --k) {
    string += " ";
  }
  string += "\n";
}
console.log(string);
