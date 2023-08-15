let string = "";

for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    string += " ";
  }
  for (let j = 1; j <= i * 2; j++) {
    if (j == 1 || j == 2 * i - 1 || i == 5) {
      string += " ";
    } else {
      string += " *";
    }
  }
  string += "\n";
}
console.log(string);
