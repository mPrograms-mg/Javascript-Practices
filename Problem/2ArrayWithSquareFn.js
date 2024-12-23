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
