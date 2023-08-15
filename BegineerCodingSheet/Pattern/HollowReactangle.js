let str = "";
let n = 3,
  m = 5;

for (i = 1; i <= n; i++) {
  for (j = 1; j <= m; j++) {
    if (i == 1 || i == n || j == 1 || j == m) {
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}

console.log(str);
