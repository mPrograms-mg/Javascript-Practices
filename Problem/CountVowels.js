// Count Vowels   a,e,i,o,u, - A,E,I,O,U

function countVowels(str) {
  let vowelsStr = ["a", "e", "i", "o", "u"];
  let counterVowels = 0;
  let vowels = str.toLowerCase().split("");

  for (const key of vowels) {
    if (vowelsStr.includes(key)) {
      counterVowels++;
    }
  }

  return { vowels, counterVowels };
}

console.log(countVowels(""));
