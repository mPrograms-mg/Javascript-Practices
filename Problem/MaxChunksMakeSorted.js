// Max Chunks To Make Sorted

const arr = [1, 2, 3, 4, 5];
let i = 0;
let output = [];
let chop = 2;
let temp = [...arr];
while (i < temp.length) {
  output.push(temp.slice(i, i + chop));
  i = i + chop;
}

console.log(output);

var maxChunksToSorted = function (arr) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max < i + 1) {
      count++;
    }
  }
  return count;
};

const arr3 = [1, 0, 2, 3, 4];
console.log(maxChunksToSorted(arr3));
