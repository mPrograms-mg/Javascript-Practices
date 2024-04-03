// method 1

// let str = "javascript" output {j:1,a:2:v:1}  { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
function strOccurrence(Str){
    let countStr = {}
    for(let str of Str){
        if(countStr[str]){
            countStr[str]++
        }else{
            countStr[str] = 1
        }  
    }

    return countStr
}


console.log(strOccurrence("Javascript"));

// method 2
let newStr = 'Mahesh'

let strOccur = [...newStr].reduce((prev,curr)=>{
    prev[curr] = prev[curr] ? prev[curr] + 1 : 1; 
   return prev
},{})


console.log(strOccur);