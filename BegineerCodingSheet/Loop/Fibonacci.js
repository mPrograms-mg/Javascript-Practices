let n = 5;
// 0 + 1 = 2 + 1= 3 + 1 = 4     +1 = 5

let n1 = 0;
let n2 = 1;
let fibNum = n1 + n2;

for (let index = 1; index < 10; index++) {
  console.log(n1);
  n1 = n2;
  n2 = fibNum;
  fibNum = n1 + n2;
}
