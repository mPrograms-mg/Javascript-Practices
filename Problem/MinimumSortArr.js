// Minimum Increment to Make Array Unique

// You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.

// Return the minimum number of moves to make every value in nums unique.

// The test cases are generated so that the answer fits in a 32-bit integer.

function findMax(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
  }
  return max;
}

var minIncrementForUnique = function (nums) {
  //Ascending Order
  let sort = nums.sort((a, b) => a - b);

  //Initialize total Moves
  let moves = 0;

  //We don't need more than one iteration
  for (let i = 0; i < nums.length; i++) {
    //Check Dublicate, if current is less than or equal to previous value
    //Reason it can become less, example: [1,1,1] => first +1 => [1,2,1] so, index 2 is less than index 1
    if (nums[i] <= nums[i - 1]) {
      let gap = nums[i - 1] - nums[i] + 1;
      nums[i] += gap;
      moves += gap;
    }
  }

  //Return total moves
  return moves;
};

nums = [1, 2, 2];
console.log(minIncrementForUnique(nums));
