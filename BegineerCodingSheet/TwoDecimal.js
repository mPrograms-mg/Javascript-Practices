let firstInput = document.querySelector("#firstInput");
let secondInput = document.querySelector("#secondInput");
let btnMultiply = document.querySelector("button");
let output = document.querySelector("h1");

btnMultiply.addEventListener("click", () => {
  //   let result = Number(firstInput.value) * Number(secondInput.value);
  //   result = result.toFixed(2);
  let result = firstInput.value * secondInput.value;
  output.innerText = result.toFixed(2);
});
