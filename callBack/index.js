// Type one
// function callbackFn() {
//   console.log("This is callback...");
// }

// function add(a, b, mahesh) {
//   const res = a + b;
//   console.log("res", res);
//   mahesh();
// }

// add(4, 450, callbackFn);

function add(a, b, mahesh) {
  const res = a + b;
  console.log("res", res);
  mahesh();
}

add(3, 5, () => {
  console.log("This is Callback...");
});
