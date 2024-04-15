// Map Data Structure
//A Map is a collection of key🔑 — value pairs, similar to an object. It stores the key🔑 — value pairs in the insertion order.
//In Map we have use any type of dataType
let mapDS = new Map([
  ["name", "Chirag"],
  [true, "Boolkey"],
  [1, "Numberkey"],
]);

console.log(mapDS);
//Add Value using set method
mapDS.set("age", 23);
console.log(mapDS);

//get value from map using get method
console.log(mapDS.get(1));

//get value parent in map or not using has method
console.log(mapDS.has("name"));
console.log(mapDS.has("new"));

// delete the map keys in map using delete method
mapDS.delete(true);
console.log(mapDS);
