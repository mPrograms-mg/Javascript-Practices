let string = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    string += " *";
  }
  string += "\n";
}
console.log(string);

//i = row j = coloums
