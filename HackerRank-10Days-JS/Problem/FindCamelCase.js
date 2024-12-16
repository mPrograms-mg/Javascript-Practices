// s = 'oneTwoThreee'/
// There are  words in the string: 'one', 'Two', 'Three'.

function stringCamelCaseCount(string) {
  const words = string.match(/[A-Z]?[a-z]+/g);
  console.log(words.length); // Output: ['one', 'Two', 'Threee']
}

const str = "onesaveChangesInTheEditorTwoThree";
stringCamelCaseCount(str);
