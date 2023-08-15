let str = prompt("Enter Character for ASCII Value");

let result = str.charCodeAt();

let ret = str.codePointAt();

document.getElementById("num").innerHTML = result;
console.log(result);
