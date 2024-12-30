// Write a JavaScript function to check if a given number is prime.

function isPrimeNumber(number) {
  const reverNum = parseInt(number.toString().split("").reverse().join(""));
  return number === reverNum ? "It Prime number" : "It Not Prime Number";
}
const primeNum = 131;
console.log(isPrimeNumber(primeNum));
