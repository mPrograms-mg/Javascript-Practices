let input1 = prompt("Enter Number 1");
let input2 = prompt("Enter Number 2");
let input3 = prompt("Enter Number 3");

if (input1 >= input2 && input1 >= input3) {
  console.log("Big is ", input1);
} else if (input2 >= input1 && input2 >= input3) {
  console.log("Big is ", input2);
} else {
  console.log("Big is ", input3);
}

function findLarge(input1, input2, input3) {
  if (input1 >= input2 && input1 >= input3) {
    console.log("Big is ", input1);
  } else if (input2 >= input1 && input2 >= input3) {
    console.log("Big is ", input2);
  } else {
    console.log("Big is ", input3);
  }
}

findLarge(input1, input2, input3);
