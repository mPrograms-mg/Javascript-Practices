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


/*
 * Create the function factorial here
 */

function factorial(n){
    if(n>=0){
        let fact = 1;
        for(let i=n; i>=1; i--){
            fact = fact * i;
        }
        return fact;
    }
}


factorial(10)