// Array Method
let arr = [1,2,3,4,5];


// Add element at last index
arr.push("Mahesh");
console.log(arr);

// Remove element at last index
arr.pop();
console.log(arr); 

// Also return value first element
let popElement = arr.pop()
console.log(popElement);

//Add element in starting index
arr.unshift(true,2.55,"Mahesh")
console.log(arr);

// remove element in starting index
arr.shift();
console.log(arr);

// Also return value first element
let element = arr.shift()
console.log(element);

// Concat the Array Element

let a = [1,2,3,4,5];
let b = ["Mahesh","Kshirsagar",22.5,true,2.1101,false]
let c = a.concat(b);
console.table(c);

// convent array method in string or add any symbol to the element use join

// let joinArr = c.join("-");
let joinArr = c.join(", ");
console.log(joinArr);
