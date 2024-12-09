// . How to check whether a string or number is palindrome or not  ?

const str = 'arra'

//  Method - 1
// const isPalidrome = (str) => {
//     const newStr = str.split('').reverse().join('')
//     console.log("New String....", newStr);
//     return str === newStr ? true : false
// }
// console.log(`${str} is Palidrom String`, isPalidrome(str));

//Method - 2


console.log(isPalidromeStr(str));

function isPalidromeStr(strArg) {
    // const str = strArg.length
    for (let i = 0; i < strArg.length; i++) {
        console.log("Str...", strArg[i]);
        console.log("Str...", strArg[strArg.length - 1 - i]);
        if (strArg[i] !== strArg[strArg.length - 1 - i]) {
            return false
        } else {
            return true
        }
    }
}