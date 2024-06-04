// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.Letters are case sensitive, for example, "Aa" is not considered a palindrome.
// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

let s = "abcbab";
let palStrLen = 0;
for (let index = 0; index < s.length; index++) {
  let subStr = "";
  for (let j = index; j < s.length; j++) {
    subStr += s[j];
    if (subStr.length > palStrLen && checkPalindrome(subStr)) {
      palStrLen = subStr.length;
    }
  }
}

console.log("Length...", palStrLen);
function checkPalindrome(s) {
  let rev = "";
  let str = s.toLowerCase();
  rev = str.split("").reverse().join("");
  return rev === str;
}
