// //Leat Repeating Character in Js

// function repeatingCount(str){
//  let tempArr = str.split('');
//  let letter  = [];
//  let count   = 1;
 
//  for(let i=0;i<tempArr.length;i++){
//     if(tempArr[i] === tempArr[i]){
//         count++;
//     }else{
//         let value = `${count}${tempArr[i]}`;
//         letter = [...letter, value];
//         count = 1;
//     }
//  }
//  return letter.join("");
// }

// console.log(repeatingCount("MaheshMohan"));


//Time Base event
//SetTime call only onces time 
//SetTime have function and  milisecond
//executes a function once the timer expires.

// function setTimer() {
//     console.log("Hello Mahesh You call after One Second");
// }
// console.log("Wait your fucntion is calling............");
// setTimeout(setTimer,3000);

// When we use arrow fuction then i will not use this keyword

// function setTimer(){
//     let num = 0
//     let timeer = setInterval(()=>{
//         console.log(`THis is SetInterval Function ${num}`);
//         num++;
//     },1000);
// }

// // setTimer();

// const stopTime = () =>{
//     clearInterval(timeer);
// }
// stopTime();


