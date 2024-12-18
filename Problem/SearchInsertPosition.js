const nums = [1, 3, 5, 6];
target = 5;

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length; // Out of bounds

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(searchInsert(nums, target));
