function FiboFun(num) {
  let n1 = 0,
    n2 = 1;
  let FiboNum = n1 + n2;
  for (let i = 1; i <= num; i++) {
    console.log("Fibonacci.............", n1);
    n1 = n2;
    n2 = FiboNum;
    FiboNum = n1 + n2;
  }
}

FiboFun(10);
