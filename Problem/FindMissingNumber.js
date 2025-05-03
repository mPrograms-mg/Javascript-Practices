function findMissingNumber(arr) {
  if (arr.length === 0) return null;
  let sum1 = 0;
  let sum2 = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum1 = sum1 + element;
  }

  for (let index = 1; index < arr.length; index++) {
    sum2 = sum1 + index;
  }

  let missValue = sum2 - sum1;

  return missValue;
}

// Second method
function findMissingNumberFromArr(arr) {
  let n = arr.length;
  if (arr.length === 0) return null;
  let expectedSum = (n * (n + 1)) / 2;
  let totalSum = arr.reduce((sum, num) => sum + num, 0);

  let ans = expectedSum - totalSum;

  return ans;
}

console.log(findMissingNumber([3, 0, 1]));
console.log(findMissingNumberFromArr([3, 0, 1]));
