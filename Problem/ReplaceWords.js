// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"

var replaceWords = function (dict, sent) {
  let s = sent.split(" ");

  //sort the dict words according to its length
  dict.sort((a, b) => a.length - b.length);

  //iterates over the words
  for (let i = 0; i < s.length; i++) {
    //iterate over the root words
    for (let j = 0; j < dict.length; j++) {
      //if the word starts with the root word
      if (s[i].startsWith(dict[j])) {
        //replace it with the root word
        s[i] = dict[j];
        break;
      }
    }
  }
  return s.join(" ");
};

dictionary = ["cat", "bat", "rat"];
sentence = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary, sentence));
