let num1 = prompt("Enter the Number");

console.log(num1);
// if (num % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

//using ternary operator

// const result = num % 2 === 0 ? "Even" : "Odd";

// console.log(result);

//using Arrow Function
// const evenOdd = (num) => {
//   return num % 2 === 0 ? "Even Number" : "Odd Number";
// };
// console.log(evenOdd(num1));

//Normal Function
function evenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even Number =>");
  } else {
    console.log("Odd Number =>");
  }
}

evenOdd(num1);
