// 10. Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

const arrObj = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

// let uniqueArr = [];

// arrObj.forEach((ele) => {
//   if (!uniqueArr.some((val) => JSON.stringify(val) === JSON.stringify(ele))) {
//     uniqueArr.push(ele);
//   }
// });

// console.log(uniqueArr);

// var unique = Array.from(new Set(arrObj.map(JSON.stringify))).map(JSON.parse);

var unique = [...new Set(arrObj.map(JSON.stringify))].map(JSON.parse);

// console.log(unique);
// const uniqueArray = arrObj.filter(
//   (value, index, array) => array.indexOf(value) === index
// );

// console.log(uniqueArray);

const uniqueObjects = arrObj.reduce((acc, current) => {
  if (!acc.some((obj) => JSON.stringify(obj) === JSON.stringify(current))) {
    acc.push(current);
  }
  return acc;
}, []);

// console.log(uniqueObjects);

const uniq = [];

for (const key in arrObj) {
  const item = arrObj[key];
  if (!uniq.some((obj) => obj.name === item.name)) {
    uniq.push(item);
  }
}

console.log(uniq);

// const unique = arrObj.filter(
//   (item, index, array) =>
//     array.findIndex((obj) => obj.name === item.name) === index
// );
