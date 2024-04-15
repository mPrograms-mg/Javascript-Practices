//
// var addTwoPromises = async function (promise1, promise2) {
//   const [value1, value2] = await Promise.all([promise1, promise2]);
//   return value1 + value2;
// };

var addTwoPromises = async function (promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(console.log); // 4
// console.log(addTwoPromises);

var cancellable = function (fn, args, t) {
  const cancleFn = () => {
    clearTimeout(timer);
  };

  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  return cancleFn;
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);

var cancellable = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => {
    fn(...args);
  }, t);

  let cancleFn = () => clearInterval(timer);
  return cancleFn;
};

const result2 = [];

const fn2 = (x) => x * 2;
const args2 = [4];
const t2 = 35;
const cancelTimeMs2 = 190;

const start2 = performance.now();

const log2 = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel2 = cancellable(log, args, t);

setTimeout(cancel2, cancelTimeMs2);

setTimeout(() => {
  console.log(result2);
}, cancelTimeMs2 + t2 + 15);

// Promise Time Limit
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

//Cache With Time limit
class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const alreadyExits = this.cache.get(key);

    if (alreadyExits) {
      clearTimeout(alreadyExits.timeOutId);
    }

    const timeOutId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timeOutId });

    return Boolean(alreadyExits);
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  count() {
    return this.cache.size;
  }
}
