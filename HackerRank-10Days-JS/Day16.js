
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let modifyArr = nums.map(ele=>{
        if(ele % 2 === 0 ){
           return ele * 2;
        }else {
          return  ele * 3;
        }
    })
    return modifyArr
}


modifyArray([1,2,3,4,5])

console.log("Array..",modifyArray([1,2,3,4,5]));


let numbers = [1, 2, 3, 4, 5];

let modifiedNumbers = numbers.map(num => {
    if (num % 2 === 0) {
        return num * 2; // Multiply even numbers by 2
    } else {
        return num * 3; // Multiply odd numbers by 3
    }
});

console.log(modifiedNumbers);