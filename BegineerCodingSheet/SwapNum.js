let num = 45;

let num2 = 100;

document.getElementById("num").innerHTML = num;

document.getElementById("num1").innerHTML = num2;

// with third varible
// function swap(num, num2) {
//   let swap;
//   swap = num;
//   num = num2;
//   num2 = swap;

//   console.log("Swap Value Num", num);
//   console.log("Swap Value Num2", num2);
// }
// swap(num, num2);

//without third variable

function swap2(num, num2) {
  num = num + num2;
  num2 = num - num2;
  num = num - num2;

  console.log("Swap Value Num", num);
  console.log("Swap Value Num2", num2);
}

swap2(num, num2);
