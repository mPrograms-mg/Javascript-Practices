let a = [1,2 ,[4,3],[5,6,7],[10,8,9]]
// let newArr = a.flat()
// let minNum = newArr.sort((a,b)=> a - b)
// console.log(newArr)
// let lastIndex = minNum[minNum.length - 1]
// let firstIndex = minNum[0]
// console.log(minNum)
// console.log(firstIndex)
// console.log(lastIndex)

let Arr = [].concat(...a)
console.log(Arr)
let SOrt = Arr.sort((a,b)=> a - b)
console.log(SOrt)


let minValue = SOrt[0]; 
for(let i  = 0; i < SOrt.length; i++){
  if(minValue < SOrt[i] ){
    minValue = SOrt[i]
  }
}

console.log(minValue);