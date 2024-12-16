// Final Array State After K Multiplication Operations

const nums = [2, 1, 3, 5, 6];
const k = 5;
const multiplier = 2;

function MultiplicationFileArr(numsArr, k, multiplier) {
  for (let index = 0; index < k; index++) {
    const minIndex = numsArr.indexOf(Math.min(...numsArr));
    numsArr[minIndex] *= multiplier;
  }

  console.log(numsArr);
}

MultiplicationFileArr(nums, k, multiplier);
