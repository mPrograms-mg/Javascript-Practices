// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
// Return the score of s.

let str  = 'hello'
let total = 0

for (let index = 0; index < str.length-1; index++) { 
    const nextValue = index + 1
    total += Math.abs(str.charCodeAt(index) - str.charCodeAt(nextValue))
   
}

console.log("String Value....",total);  
