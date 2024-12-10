const input = [
  { name: "John", id: 31, role: "Admin" },
  { name: "Jack", id: 27, role: "User" },
  { name: "Carol", id: 28, role: "Group" },
  { name: "Zayn", id: 31, role: "Admin" },
  { name: "Mathew", id: 28, role: "Admin" },
  { name: "Abraham", id: 35, role: "User" },
  { name: "Daniel", id: 27, role: "User" },
  { name: "Zara", id: 31, role: "Group" },
];
//Method 1
// const result = input.reduce((result, group, index) => {
//   if (!result[group.role]) {
//     result[group.role] = [];
//   }
//   result[group.role].push(group.id);
//   return result;
// }, {});

// console.log("Tranfer Array of Object.....", result);

//Method 2
// function groupById(arr, field) {
//   console.log(arr);
//   let responce = {};
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i][field];
//     if (!responce[key]) {
//       let result = arr.filter((item) => {
//         return item[field] == key;
//       });
//       responce[key] = result;
//     }
//   }
//   console.log(responce);
// }

// groupById(input, "role");

//Methodc 3

const resp = input
  .filter((item) => item.role === "Admin")
  .map((data) => data.id);

console.log(resp);
