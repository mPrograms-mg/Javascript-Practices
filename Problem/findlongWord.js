// Program to find longest word in a given sentence!!

const longWord =
  "I am Mahesh Mohan Kshirsagar, I am Software Engineer having 2 year experiance";

findlongWord(longWord);

function findlongWord(word) {
  const longWord = word.split(" ");
  let wordLong = 0;
  for (const element of longWord) {
    if (element.length > wordLong) {
      wordLong = element.length;
    }
  }
  console.log("longest word in a sentence", wordLong);
}
