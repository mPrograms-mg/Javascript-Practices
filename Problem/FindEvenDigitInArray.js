// Given an array nums of integers, return how many of them contain an even number of digits.
// Input: nums = [12, 345, 2, 6, 7896];
// Output: 2;

nums = [12, 345, 2, 6, 7896];
function findEventDigit(number) {
  let evenDigit = 0;
  for (let index = 0; index < number.length; index++) {
    const digitCount = Math.abs(number[index]).toString().length;
    if (digitCount % 2 === 0) {
      evenDigit++;
    }
  }
  return evenDigit;
}

console.log(findEventDigit(nums));
