var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  console.log(seats);
  console.log(students);
  const n = seats.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.abs(seats[i] - students[i]);
  }
  return ans;
};

seats = [3, 1, 5];
students = [2, 7, 4];

console.log(minMovesToSeat(seats, students));
