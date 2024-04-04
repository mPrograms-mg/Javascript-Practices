// Iterate on the given number from 1 to n
// For every number, if it is divisible by both 3 and 5, add FizzBuzz to the result list.
// Else, Check if the number is divisible by 3, add Fizz.
// Else, Check if the number is divisible by 5, add Buzz.
// Else, add the number by converting it to string.

// function fizzBuzz(n) { 
// 	// Declare an array to store the results 
// 	let result = []; 

// 	// Loop from 1 to n (inclusive) 
// 	for (let i = 1; i <= n; ++i) { 
	
// 		// Check if i is divisible by both 3 and 5 
// 		if (i % 3 === 0 && i % 5 === 0) { 
		
// 			// Add "FizzBuzz" to the result array 
// 			result.push("FizzBuzz"); 
// 		} 
		
// 		// Check if i is divisible by 3 
// 		else if (i % 3 === 0) { 
		
// 			// Add "Fizz" to the result array 
// 			result.push("Fizz"); 
// 		} 
		
// 		// Check if i is divisible by 5 
// 		else if (i % 5 === 0) { 
		
// 			// Add "Buzz" to the result array 
// 			result.push("Buzz"); 
// 		} 
// 		else { 
		
// 			// Add the current number as a string to the 
// 			// result array 
// 			result.push(i.toString()); 
// 		} 
// 	} 

// 	// Return the result array 
// 	return result; 
// } 

// // Driver code 
// let n = 20; 

// // Call the fizzBuzz function to get the result 
// let result = fizzBuzz(n); 

// // Print the result 
// console.log(result.join(' ')); 


function fizzBuzz(start, end){
    for(let num=start; num <= end; num++){
        if(num % 5 === 0 && num % 3 === 0){
          console.log("FizzBuzz")
        }   
        else if(num % 3 === 0){
          console.log("Fizz")
        }
        else if(num % 5 === 0){
          console.log("Buzz")
        }
        else {
          console.log(num)
        }
    }
}

fizzBuzz(1,100);