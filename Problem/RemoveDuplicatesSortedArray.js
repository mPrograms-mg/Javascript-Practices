// Remove Duplicates from Sorted Array

// Method 1
// var removeDuplicates = function (nums) {
//   const sortArr = nums.sort();
//   const uniqElement = [...new Set(sortArr)];
//   console.log(uniqElement);
// };

// nums = [1, 1, 2];
// removeDuplicates(nums);

var removeDuplicates = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    for (let j = index + 1; j < nums.length; j++) {
      if (nums[index] === nums[j]) {
        nums.splice(index, 1);
      }
    }
  }

  return nums;
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);

console.log(removeDuplicates(nums));
