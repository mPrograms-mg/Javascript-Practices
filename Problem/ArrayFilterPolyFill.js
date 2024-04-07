// Create your Filtr  Method using Polyfill ||  Polyfill.map,

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) {
      res.push(this[index]);
    }
  }
  return res;
};

console.log([1, 2, 3, 4].myFilter((ele) => ele > 2));
console.log([1, 2, 3, 4].myFilter((ele) => ele % 2 === 0));
