let arr = [1,2,3];
let arr2 = arr;
let arr3 = arr2
arr2.push(4)
arr3.push(5)
console.log(arr);
console.log(arr2);
console.log(arr3);


// without Modify original Array
let arr4 = [...arr3,6]
arr4.push(7)
console.log(arr4);
let arr5 = arr4.slice(0,3)
console.log(arr5);

// map, fliter,concat,reduce,every,
//some retun boolean
let arr6 = arr4.some(item => item % 2 === 0 );
console.log(arr6);