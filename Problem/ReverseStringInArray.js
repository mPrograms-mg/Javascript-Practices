// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]



// function reverStr(str){
//     return str.reverse()
// }

// s = ["h","e","l","l","o"]

// console.log("Reverse String Array.....",reverStr(s));



//Second Method


// function reverStr(str){
//     let strRever = ""
//     for (let index = str.length - 1; index >= 0; index--) {
//          strRever +=str[index]  
//     }
//     return strRever
// }

// s = ["h","e","l","l","o"]

// console.log("Reverse String Array.....",reverStr(s));


//Using Recursion

function reverseString(str){
    if (str === "") // This is the terminal case that will end the recursion
    return "";
  
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

s = "Mahesh"
console.log("Reverse String Array.....",reverseString(s));

