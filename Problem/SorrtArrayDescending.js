//  Write a javascript function that sorts an array of numbers in descending order.

function descendingArray(arr) {
  const sortArray = arr.sort((a, b) => b - a);
  console.log(sortArray);
}

const array = [45, 75, 231, 457, 433];
descendingArray(array);
