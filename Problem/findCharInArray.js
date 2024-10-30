// Find char in  Array
const prompt = require("prompt-sync")();
const chat = prompt("How many more times? ");

const a = [2, 3, 12, 5, 222, 23, 4, 35, 6, 32];
// const char = prompts("Enter Value");

const newArray = a.filter((value) => {
  return value.toString().includes(chat);
});

console.log("Char Array...", newArray);
