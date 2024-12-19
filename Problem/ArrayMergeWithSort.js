// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

const array = [0, 3, 4, 31];
const array2 = [4, 6, 30];

const mergeAndSort = (arg1, arg2) => {
  const res = arg1.concat(arg2).sort((a, b) => a - b);
  return res;
};

console.log(mergeAndSort(array, array2));

const result = [...array, ...array2].sort();
console.log("Result...", result);
