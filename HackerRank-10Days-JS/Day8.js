/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
// function getSecondLargest(nums) {
//     // Complete the function
//     let secondHighest;
//     if(nums.length>=0 & nums.length <= 100){
//         let sort  = nums.sort((a,b)=>a-b)
//         let uniq = [...new Set(sort)]
//         secondHighest = uniq[uniq.length-2]    
//     return secondHighest
//     }
// }

// console.log(getSecondLargest([2,4,5,5,6,10,9]));



function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = 0;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  // Example usage:
  const array = [5, 2, 10, 8, 3];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);