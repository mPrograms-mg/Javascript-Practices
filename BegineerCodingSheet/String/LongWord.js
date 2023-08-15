// function LongWord(str) {
//   let str2 = str.split(" ");
//   let longWord = 0;
//   for (let i = 0; i < str2.length; i++) {
//     if (str2[i].length > longWord) {
//       longWord = str2[i].length;
//     }
//   }
//   console.log(longWord);
// }

//Method 2
function LongWord(str) {
  let str2 = str.split(" ");
  let longWord = str2.reduce(function (logest, currWord) {
    if (currWord.length > logest.length) {
      return currWord;
    } else {
      return logest;
    }
  });
  return longWord && longWord.length;
}

console.log(LongWord("My name is Mahesh Mohan Kshirsagar"));
