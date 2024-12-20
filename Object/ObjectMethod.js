let personObj = {
  id: 101,
  name: "Mahesh Kshirsagar",
  add: "Surat",
  num: "9234452123",
  age: 23,
};

const perObj = { ...personObj };
perObj.name = "Sanjay";
console.log(personObj.name);

// fetch Object keys
let keys = Object.keys(personObj);
console.log("key...", keys);

//fetch Object values
let values = Object.values(personObj);
console.log("Values...", values);

// return the array of given Object key value pair
let objEnteries = Object.entries(personObj);
console.log("Enteries..", objEnteries);

// Object freeze use to restrict add or update & delete object
// Object.freeze(personObj)
// console.log(personObj.id);

// Object seal use to allow  update object
Object.seal(personObj);
personObj.id = 122;
console.log("Seal...", personObj);

// Assingn object to new variable
let assignObj = Object.assign({ edu: "BE" }, personObj);
console.log("Assing..", assignObj);
