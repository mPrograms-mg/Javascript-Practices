const array = [1, 2, , 4, 5, , 7, , 10, 12, 99, ,];

const FindMissingNumber = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (!arr[index]) {
      arr[index] = arr[index - 1] + 1;
    }
  }
  return arr;
};

console.log(FindMissingNumber(array));
