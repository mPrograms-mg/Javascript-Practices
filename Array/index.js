// console.log("Hello Array");

let a = [1,2,,3,4,5] // Number Array

let b = ['a','b','c'] // String Array

let c = [true,false] // boolean Array

let MixArray = [1,2.5,"Mahesh",true]; // Mix Array

console.log(MixArray);

//Create New Array with new Array method

const newArray = new Array("a","b",2,false);
newArray[4] = true;
console.log(newArray);
console.log(newArray[4]);


const secondArr = []
console.log(secondArr[2]);

let myArray = new Array(4);
console.log(myArray); // [,,,]

const str = 'hello';
const strArray = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

const nums = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

const filledArray = new Array(5).fill(0); // [0, 0, 0, 0, 0]



const originalArray = [1, 2, 3];
const newArrays = [...originalArray, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newArrays);
console.log(newArrays[6]); // 
console.log(Object.keys(newArrays)); // ['0', '1', '2', '3','4']












// Array Accessing
//start index with 0

/*
* given Array [11,22,33,44,55]
* index/pos -> [0,1,2,3,4] // last element index = arr.length-2;
*/

