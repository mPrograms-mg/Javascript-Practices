// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

var relativeSortArray = function (arr1, arr2) {
  const map = new Map();
  const len = arr2.length;
  arr2.forEach((a, i) => {
    map.set(a, i);
  });
  return arr1.sort((a, b) => {
    a = map.has(a) ? map.get(a) : len + a;
    b = map.has(b) ? map.get(b) : len + b;
    return a - b;
  });
};

arr1 = [28, 6, 22, 8, 44, 17];
arr2 = [22, 28, 8, 6];

relativeSortArray(arr1, arr2);

console.log(relativeSortArray(arr1, arr2));
