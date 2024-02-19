// In this challenge, we practice using throw and catch statements to work with custom error messages.


/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a=> (-100) && a <=100){
            if(a === 0){
                throw ({message:"Zero Error"})
            }else if(a <= 0) {
                  throw ({message:"Negative Error"}) 
            }else { 
                return "YES"
            }
    }
}



console.log(isPositive(3));