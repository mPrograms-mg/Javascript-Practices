// Given an integer x, return true if x is a palindrome, and false otherwise.


function palindromeNum(n){
    let number = n.toString()
    let reverseNum =  number.split('').reverse().join('')
    return  reverseNum === number ? true : false
   
}

console.log("FunctionCall....",palindromeNum(1232));


// Method 2

// function PalidromeNum(num) {
//     let rev = 0
//     let temp = num
//     let rem;
//     while (num > 0) {
//       rem = num % 10;
//       rev = rev * 10 + rem;
//       num = Math.floor(num / 10);
//     }
//     return  rev === temp ? console.log(`True...${temp} is Palindrome`) : console.log(`false...${temp} is not palindrome`)
//   }
  
//   PalidromeNum(3241);