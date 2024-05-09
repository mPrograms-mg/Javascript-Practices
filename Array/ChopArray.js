// Chop array into chunks of given length

const chop = (arr, size = arr.length) => {
    //temp array
    const temp = [...arr];
  
    //output
    const output = [];
    let i = 0;
    
    //iterate the array
    while (i < temp.length) {
        //slice the sub-array of given size
        //and push them in output array
        output.push(temp.slice(i, i + size));
        i = i + size;
    }
  
    return output;
}


console.log(chop([1,2,3,4,5,6,7,8,9,10], 3));