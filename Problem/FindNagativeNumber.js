const arr = [2, 3, 4, -5, -6, -8, -2, 3, 4, 3, 4];

const nagviteNum = arr.filter((ele) => ele < 0);
const PositveNum = arr.filter((ele) => ele > 0);
console.log("Nagagtive...", nagviteNum);
console.log("PositveNum...", PositveNum);

const newNum = PositveNum.concat(nagviteNum);
console.log("Number", newNum);
