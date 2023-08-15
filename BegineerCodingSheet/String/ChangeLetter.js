function shift_Letter(str) {
  let s = str.split(" ");
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case " ":
        break;
      case "z":
        s[i] = "a";
      case "Z":
        s[i] = "A";
      default:
        s[i] = String.fromCharCode(s[i].charCodeAt(0) + 2);
    }
  }
  return s.join("");
}

console.log(shift_Letter("abc"));
