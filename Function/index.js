function myFun(){
    console.log("Hello This my Function");
}
myFun();


function withReturn(){
    return "This Function with Return"
}
console.log(withReturn());

const arrFun = (val) =>{
    return "This is Arrow Function  " + val;
}

console.log(arrFun());
console.log(arrFun("Mahesh"));

// ultimate parameter of function

function ultimatePara(){
    let sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;

}

let result = ultimatePara(1,2,3,4,5);
console.log(result);