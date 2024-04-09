//Object is collection of key value pairs

const Obj = {
  name: "Mahesh Kshirsagar Object",
  age: 22,
  city: "Surat",
  Pin: 395012,
  Marriaged: false,
};

console.log(Obj);
console.log(Obj.name);
console.log(Obj.Pin);
console.log(Obj.city);

// create Object using new method
const Objs = new Object();
Objs.name = "Mahesh";
Objs.age = 23;
Objs.add = "Surat";
console.log(Objs);

// create Object using fuctions
function ObjCreation(id, num, value) {
  this.id = id;
  this.number = num;
  this.value = value;
}

const newObj = new ObjCreation(1, 123, "Mahesh");
console.log(newObj);

// access object value
console.log(newObj.id);
console.log(newObj["number"]);

// assign new value to object
newObj["number"] = 4342;
newObj.add = "Surat";

// delete object key
delete newObj.add;
console.log(newObj);

//Object Literals

let obj = {
  name: "Mahesh Obj",
  age: 18,
  greet() {
    return "Good Morning, Mahesh";
  },
  age(num) {
    return `Mahesh is a ${num} year old`;
  },
  package(salary, totalMonth) {
    return `Mahesh Earning ${salary * totalMonth} per Annum`;
  },
};
console.log(obj);
console.log(obj.greet());
console.log(obj.age(23));
console.log(obj.package(25000, 12));
