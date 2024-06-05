// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

words = ["bella", "label", "roller"];

commonChars(words);

function commonChars(words) {
  const array = [];
  for (const letter of words[0]) {
    console.log(letter);
    words.every((word) => word.includes(letter));
    console.log(words.every((word) => word.includes(letter)));
    if (words.every((word) => word.includes(letter))) {
      array.push(letter);
      words = words.map((word) => word.replace(letter, ""));
    }
  }

  console.log("Array...", array);
}
