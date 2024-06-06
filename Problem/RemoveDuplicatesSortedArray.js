// Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  const sortArr = nums.sort();
  const uniqElement = [...new Set(sortArr)];
  console.log(uniqElement);
};

nums = [1, 1, 2];
removeDuplicates(nums);
