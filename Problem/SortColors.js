// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  return nums.sort((a, b) => a - b);
};

console.log(sortColors(nums));
