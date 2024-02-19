// In this challenge, we practice creating objects. Check out the attached tutorial for more details.

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    if(a >= 1 && b <= 100){
            let length = a;
            let width = b;
            let perimeter = 2*(a+b);
            let area = a * b;
            
            return {
                length,width,perimeter,area
            }
    }
}

console.log(Rectangle(3,5));