function StReplace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      return str.replace("a", 4);
    } else if (str[i] === "e") {
      return str.replace("e", 3);
    } else if (str[i] === "i") {
      return str.replace("i", 1);
    } else if (str[i] === "o") {
      return str.replace("o", 0);
    } else if (str[i] === "s") {
      return str.replace("s", 5);
    }
  }

  return str;
}

console.log(StReplace("programming is fun"));
