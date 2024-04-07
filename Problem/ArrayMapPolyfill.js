// Create your Map Method using Polyfill ||  Polyfill.map,

Array.prototype.map = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(cb(this[index]));
  }
  return res;
};

console.log([1, 2, 3, 4].map((ele) => ele * 2));
