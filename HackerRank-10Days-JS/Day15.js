
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]). */




function sides(literals, ...expressions) {
    console.log(expressions);
    let area = expressions[0];
    let perimeter= expressions[1];
    let s1 = (perimeter + Math.sqrt(perimeter * perimeter - (16 * area)))/4;
    let s2 = (perimeter - Math.sqrt(perimeter * perimeter - (16 * area)))/4;
    
    //   const [s1, s2] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 *   (s1 + s2)}.`;
    let newArray = [s1,s2];
    
    let sortValue = newArray.sort((a,b)=> a - b);
    
    return sortValue;
}

console.log(sides("Mahesh",10,14));