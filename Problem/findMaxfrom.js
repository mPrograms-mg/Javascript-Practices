function findMaxfromArray(arr) {
  if (arr.lenghth === 0) return null;
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) {
      max = element;
    }
  }

  return max;
}

console.log(findMaxfromArray([1, 2, 3, 4, 5]));
