const arr = [2, 4, 5, 6, 3];

const ans = arr.reduce((acc, curr) => {
  return acc * curr;
}, arr[0]);

// console.log(ans);

const MaxArr = arr.reduce((prev, curr) => {
  return prev < curr ? curr : prev;
}, arr[0]);

console.log(MaxArr);
