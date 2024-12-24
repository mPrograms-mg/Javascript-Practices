function areAnagrams(string1, string2) {
  // Remove spaces and convert to lowercase for case insensitivity
  string1 = string1.replace(/\s+/g, "").toLowerCase();
  string2 = string2.replace(/\s+/g, "").toLowerCase();

  // Check if lengths are the same
  if (string1.length !== string2.length) {
    return false;
  }

  // Compare sorted versions of the strings
  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
}

// Example usage
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true

const str3 = "hello";
const str4 = "lleho";
console.log(areAnagrams(str3, str4)); // Output: false
