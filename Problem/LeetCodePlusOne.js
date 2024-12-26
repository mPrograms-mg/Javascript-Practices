// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

let digits = [9];
let ans = Number(digits.join(""));
let res = (ans + 1).toString().split("");
let result = res.map(Number);
console.log(result);

let sum = BigInt(digits.join("")) + BigInt(1);
//  Array.from(sum.toString()).map(Number);
console.log(Array.from(sum.toString()).map(Number));
