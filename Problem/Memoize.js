// Memoization is a functional programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

const memosizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from Cache");
      return cache[value];
    } else {
      console.log("CalCulating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};

const addition = memosizAddition();
console.time();
console.log(addition(20));
console.timeEnd();

console.time();
console.log(addition(20));
console.timeEnd();
// console.log(addition(20));
