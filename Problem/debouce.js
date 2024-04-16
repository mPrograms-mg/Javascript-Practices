var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

const log = debounce(console.log, 1000);
log("Hello");
log("Hello");
log("Hello");
