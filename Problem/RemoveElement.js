const nums = [3, 2, 2, 3];
const val = 3;

const removeElement = function (nums, val) {
  //   const ans = nums.filter((value) => value !== val);
  //   const res = ans.sort((a, b) => a - b);
  //   return { ans: res.length, arr: res };
  //   let newArr = [];
  //   nums.forEach((element) => {
  //     if (element !== val) {
  //       newArr.push(element);
  //     }
  //   });

  //   return { ans: newArr.length, arr: newArr };

  //   let p1 = -1;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] != val) {
  //       p1++;
  //       nums[p1] = nums[i];
  //     }
  //   }
  //   return p1 + 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    }
  }
  return nums;
};

console.log(removeElement(nums, val));
