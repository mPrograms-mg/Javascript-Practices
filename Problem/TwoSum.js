// Given an array of integers nums and an integer target, check if there are two numbers in the array such that they add up to target.


 function twoSum(nums, target) {  
    let ans = nums[0] + nums[1];
    if(ans === target){
      return true
    }
    return false
  };


// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([2,7,11,15],18));
// console.log(twoSum([1,2,3,5,6,11,15,16,17,18],20));


// method 2

function twoSum2(nums,target){
    const numSet = new Set();

    for (let num of nums) {
        // console.log(num);
        const complement = target - num;
        // if (numSet.has(complement)) {
        //     return true;
        // }
        // numSet.add(num);
        console.log(numSet.has(complement));
        console.log(complement);
    }
    
    // console.log(complement);
    // let ans = {numSet:numSet, ans:false}
    // console.log(ans);
    // console.log(false);
}

twoSum2([1,2,3,5,6,11,15,16,17,18],20)

