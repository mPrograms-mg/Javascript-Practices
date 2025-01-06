// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.

const array = [12, [22], [[34, 56], [54, [44], 77], [11]], 34, [4], [45, 63]];

const flatArray = array.flat(Infinity);
flatArray.sort((a, b) => a - b);

console.log(flatArray);
