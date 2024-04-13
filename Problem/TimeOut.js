//setTimeout() = function in Javacript that allows you to Schedule the executions of a functions after an amount of time (milliseconds)

const clearTime = setTimeout(() => {
  console.log("This is setTimeOut");
}, 2000);

clearTimeout(clearTime);

console.log("Start");
setTimeout(() => {
  console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
