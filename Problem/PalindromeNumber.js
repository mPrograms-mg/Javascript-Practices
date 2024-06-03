// Given an integer x, return true if x is a palindrome, and false otherwise.


function palindromeNum(n){
    let number = n.toString()
    let reverseNum =  number.split('').reverse().join('')
    return  reverseNum === number ? true : false
   
}

console.log("FunctionCall....",palindromeNum(1232));

