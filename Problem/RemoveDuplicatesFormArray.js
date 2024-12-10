// Write a program to remove duplicates from an array ?

const array = [2, 4, 4, 1, 1, 6, 7, 8, 9, 0, 45, 67, 8, 9, 12, 34, 1, 2, 3, 4, 5, 3, 2, 2, 7, 8, 9, 10, 43]

// Method 1
// const removeDuplicate = (arg) => {
//     const sortArr = arg.sort((a, b) => a - b);
//     return [...new Set(sortArr)]
// }

// console.log("Remove Duplicate From Array...", removeDuplicate(array));



//Method 2
// function removeDuplicate(array) {
//     return array.filter((item, index) => array.indexOf(item) === index).sort((a, b) => a - b)

// }
// console.log(removeDuplicate(array));


// Method 3

function removeDuplicates(arr) {
    return arr.reduce((arr, curr) => {
        console.log(arr.includes(curr));
        if (!arr.includes(curr)) {
            arr.push(curr);
        }
        return arr;
    }, []);
}

const uniqueNumbers = removeDuplicates(array);
console.log(uniqueNumbers);