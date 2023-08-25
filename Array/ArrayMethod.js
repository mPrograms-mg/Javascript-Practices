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


// Reverse the Array Element
let Reverse = arr.reverse()
console.log(Reverse);


// Find the index of Array element
let indexArr = [12,23,34,'Mahesh',true,false,2.1]
console.log(indexArr.indexOf("Mahesh"));

// Add or Delete specific index use slice
let spliceArr = [12,23,34,2,3,4,5,'Mahesh',true,false,2.1]
spliceArr.splice(2,3,11,14);
console.log(spliceArr);

// Return the add or remove element
let newArr = spliceArr.splice(2,2,11,15);
console.log(newArr);



// Return New Array Element specific index number
let sliceArr = [1,2,3,4,5,"Hello"]
let newSlice = sliceArr.splice(4,5,)
console.log(newSlice);
console.log(sliceArr.slice(1,3));

// Convert array position

let newSort =  [54,36];
console.log(newSort.sort());