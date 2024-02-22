

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */



let totalCount = 0;
function getCount(objects) {
      for (let obj in objects) {
      if (objects[obj].x === objects[obj].y) {
        totalCount++;
      }
  }
  return totalCount;
}

let arrayNew = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 }
  ]
console.log("Count Obj....",getCount(arrayNew));
