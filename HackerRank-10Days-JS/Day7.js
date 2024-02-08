// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getLetter(s) {
  let letter;
  let str = s.split("");
  // Write your code here
  if (s.length >= 0 && s.length <= 100) {
    switch (s.charAt(0)) {
      case "a" || "e" || "i" || "o" || "u":
        letter = "A";
        break;
      case "b" || "c" || "d" || "f" || "g":
        letter = "B";
        break;
      case "h" || "j" || "k" || "l" || "m":
        letter = "C";
        break;
      default:
        letter = "D";
        break;
    }
    return letter;
  }
  return letter;
}

console.log(getLetter("asd"));
