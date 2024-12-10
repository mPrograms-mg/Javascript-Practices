const array = [1, 2, , 4, 6, , , , 10, , 34, , 56, , 99, 101];

for (let i = 0; i < array.length; i++) {
  if (!array[i]) {
    array[i] = array[i - 1] + 1;
  }
}

console.log(array);
