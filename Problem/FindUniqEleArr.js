// Find Unique Element array

// first Method
let arr = [1,2,3,4,3,2,5,4,6,7,8,0]
// let unique  = Array.from(new Set(arr))
let unique = [...new Set(arr)]
console.log("Unique...",unique);


// second method
let arr2 = [3,4,5,6,12,21,4,6,5];
let uniqueArr = arr2.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});
console.log(uniqueArr); 

let newArr = [1, 2, 3, 4, 2];
let uniqueArr2 = newArr.reduce((acc, value) => {
   
    if (!acc.includes(value)) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(uniqueArr2);

let newUniArr = [];
newArr.forEach((ele)=>{
    if(!newUniArr.includes(ele)){
        newUniArr.push(ele)
    }
    return newUniArr;
})

