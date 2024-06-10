// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

var heightChecker = function (heights) {
  let expectedArr = heights.slice().sort((a, b) => a - b);
  let count = 0;
  for (let index = 0; index < heights.length; index++) {
    console.log("Index hhh....", heights[index]);
    console.log("Index....", expectedArr[index]);
    if (heights[index] !== expectedArr[index]) {
      count++;
    }
  }

  console.log("Count....", count);
};

heights = [1, 1, 4, 2, 1, 3];
heightChecker(heights);
