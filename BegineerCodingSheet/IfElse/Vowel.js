let str = prompt("Enter Character");

console.log(str);
//Vowel
// a e i o u

if (
  str === "a" ||
  str === "A" ||
  str === "e" ||
  str === "E" ||
  str === "i" ||
  str === "I" ||
  str === "o" ||
  str === "O" ||
  str === "u" ||
  str === "U"
) {
  console.log("This  is Vowel");
} else {
  console.log("This is Not Vowel");
}

//using function
checkVowel(str);
function checkVowel(str) {
  if (
    str === "a" ||
    str === "A" ||
    str === "e" ||
    str === "E" ||
    str === "i" ||
    str === "I" ||
    str === "o" ||
    str === "O" ||
    str === "u" ||
    str === "U"
  ) {
    console.log("This  is Vowel");
  } else {
    console.log("This is Not Vowel");
  }
}
