// 5. Find the max count of consecutive 1’s in an array ?
function findMaxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let num in arr) {
    if (arr[num] === 1) {
      currentCount++;
      console.log(`${num}==`, currentCount);
      maxCount = Math.max(maxCount, currentCount);
      // console.log(maxCount);
      console.log(`${num}==`, maxCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Example usage:
const arr = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(arr)); // Output: 3
