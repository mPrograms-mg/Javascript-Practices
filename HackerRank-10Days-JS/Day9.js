// Reverse String

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function reverseString(s) {
  if (str) {
    let str = s.split("").reverse();
    return str.join("");
  }
}

reverseString("123");

console.log(reverseString("123"));


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
     try {
         s = [...s].reverse().join('');
    } catch (e) {
         console.log('s.split is not a function');
    }

    console.log(s);
}



function main() {
    const s = eval(readLine());
    
    reverseString(s);
}