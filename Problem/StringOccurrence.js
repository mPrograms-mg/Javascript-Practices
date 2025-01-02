// 16. Given a string, write a javascript function to count the occurrences of each character in the string.

console.log("Hello...");
const strings = "Mahesh";
const str = "h";
let count = 0;
for (let i = 0; i < strings.length; i++) {
  if (strings.charAt(i) === str) {
    count += 1;
  }
}

console.log(count);

let myString =
  "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane gave Mike 1 of her orange so she is now left with only 1 Orange.";
let mySubString = "ORANGE";

let myStringLC = myString.toLowerCase();
let mySubStringLC = mySubString.toLowerCase();

console.log(myStringLC.split(mySubStringLC));
let counts = myStringLC.split(mySubStringLC).length - 1;

function countCharacterOccurence(str) {
  let count = {};
  [...str].forEach((ele) => {
    count[ele] = (count[ele] || 0) + 1;
  });

  const max = Math.max(...Object.values(count));

  return { count, max };
}

countCharacterOccurence(strings);

console.log(countCharacterOccurence(strings));
