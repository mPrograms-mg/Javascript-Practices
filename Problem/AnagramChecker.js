// An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.

let str = "Mahesh";
let str2 = "ahhseM";

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let Obj = {};
  for (let char of str1) {
    Obj[char] ? (Obj[char] += 1) : (Obj[char] = 1);
  }

  for (let char of str2) {
    if (!Obj[char]) {
      return false;
    }

    if (Obj[char]) {
      Obj[char] -= 1;
    }
  }
  return true;
}

console.log(validAnagram(str, str2));
