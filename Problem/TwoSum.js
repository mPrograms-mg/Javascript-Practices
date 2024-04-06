// Given an array of integers nums and an integer target, check if there are two numbers in the array such that they add up to target.

function twoSum(nums, target) {
  let ans = nums[0] + nums[1];
  if (ans === target) {
    return true;
  }
  return false;
}

// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([2,7,11,15],18));
// console.log(twoSum([1,2,3,5,6,11,15,16,17,18],20));

// method 2

function twoSum2(nums, target) {
  const numSet = new Set();

  for (let num of nums) {
    // console.log(num);
    const complement = target - num;
    // if (numSet.has(complement)) {
    //     return true;
    // }
    // numSet.add(num);
    // console.log(numSet.has(complement));
    // console.log(complement);
  }

  // console.log(complement);
  // let ans = {numSet:numSet, ans:false}
  // console.log(ans);
  // console.log(false);
}

// twoSum2([1, 2, 3, 5, 6, 11, 15, 16, 17, 18], 20);

//method2 retun target value sum index

// function twoSum3(nums, target) {
//   let indexs = [];
//   for (let index = 0; index < nums.length; index++) {
//     for (let j = index+1; j < nums.length; j++) {
//       if (nums[index] + nums[j] === target) {
//         indexs.push(index)
//         indexs.push(j)
//       }
//     }
//   }
//   return indexs;
// }

// console.log(twoSum3([2,7,11,15],9));

function twoSum4(nums, target) {
  let indexs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = i + 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          indexs.push(i);
          indexs.push(j);
          indexs.push(k);
        }
      }
    }
  }
  return indexs;
}

function threeSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          // result.push([nums[i], nums[j], nums[k]]);
          result.push(i);
          result.push(j);
          result.push(k);
        }
      }
    }
  }
  return result;
}

console.log(threeSum([10, 8, 2, 5, 6], 20));
