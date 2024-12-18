//

// [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

const nums = [-4, -1, 0, 3, 10];
console.log(SquaresSort(nums));

function SquaresSort(nums) {
  const ans = nums.map((ele) => ele * ele).sort((a, b) => a - b);
  return ans;
}
