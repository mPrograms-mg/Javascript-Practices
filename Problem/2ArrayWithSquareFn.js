// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

// [1, 2, 3], [1, 4, 9]  true
// [1, 2, 1], [1, 4, 4] false

// const arr = [1, 2, 3];
// const arr1 = [4, 1, 9];

// let arr = [2, 2, 5];
// let arr1 = [4, 4, 25];

let arr = [4, 6, 3, 10, 6];
let arr1 = [36, 9, 16, 100, 36];

console.log(ArrayOfSquareIf(arr, arr1));

function ArrayOfSquareIf(arr1, arr2) {
  //   if (arr1.length !== arr2.length) return false;

  //   arr1.sort();
  //   arr2.sort();

  //   // visit each item in arr1 exactly once
  //   for (let i = 0; i < arr1.length; i++) {
  //     // if entry at arr2 isn't the square of that entry in arr1, return false immediately
  //     if (arr1[i] * arr1[i] !== arr2[i]) return false;
  //   }

  //   // we've checked each item, return true
  //   return true;

  // Create frequency counters for both arrays
  //   const frequencyCounter1 = {};
  //   const frequencyCounter2 = {};

  //   for (let val of arr1) {
  //     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  //   }

  //   for (let val of arr2) {
  //     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  //   }

  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);

  //   for (let key in frequencyCounter1) {
  //     const squaredKey = key ** 2;

  //     if (!(squaredKey in frequencyCounter2)) {
  //       return false; // The square value does not exist in arr2
  //     }

  //     if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
  //       return false; // The frequencies do not match
  //     }
  //   }

  //   return true;

  // Sort both arrays
  const sortedArr1 = arr1.map((val) => val ** 2).sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);

  // Compare the sorted arrays
  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false; // Mismatch found
    }
  }

  return true;
}

//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same.

// my method
function same_1(arr1, arr2) {
  for (let i of arr1) {
    let index = arr2.indexOf(Math.pow(i, 2));
    if (index >= 0) {
      arr2.splice(index, 1);
    } else {
      return false;
    }
  }
  if (arr2.length === 0) {
    return true;
  }
  return false;
}

// 'naive' one
function same_2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// O(n) method
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let num of arr1) {
    frequencyCounter1[num] = ++frequencyCounter1[num] || 1;
  }
  for (let num of arr2) {
    frequencyCounter2[num] = ++frequencyCounter2[num] || 1;
  }
  frequencyCounter2;
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
function validAnagram_1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char of str1) {
    frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
  }
  frequencyCounter2;
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// only using one object to store frequency
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let char of str1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let char of str2) {
    if (lookup[char]) {
      lookup[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
