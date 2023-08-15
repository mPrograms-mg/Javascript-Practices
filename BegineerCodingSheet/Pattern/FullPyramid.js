let string = "";

for (let i = 1; i <= 6; i++) {
  for (let j = 6; j >= i; --j) {
    string += " ";
  }
  for (let k = 1; k <= i; k++) {
    string += " *";
  }
  string += "\n";
}
console.log(string);
