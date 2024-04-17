// Is Object Empty

var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
    z;
  } else {
    let arr = Object.keys(obj);
    return arr.length === 0;
  }
};

const obj = { x: 5, y: 42 };

console.log(isEmpty(obj));
