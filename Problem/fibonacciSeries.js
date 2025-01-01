// // 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// function FiboFun(num) {
//   let n1 = 0,
//     n2 = 1;
//   let FiboNum = n1 + n2;
//   for (let i = 1; i <= num; i++) {
//     console.log("Fibonacci.............", n1);
//     n1 = n2;
//     n2 = FiboNum;
//     FiboNum = n1 + n2;
//   }
// }

// FiboFun(10);

// const terms = 15;

// if (terms <= 0) return [];
// if (terms === 1) return [0];
// if (terms === 2) return [0, 1];

// const sequence = [0, 1];
// for (let i = 2; i < terms; i++) {
//   sequence.push(sequence[i - 1] + sequence[i - 2]);
// }

// console.log(sequence);

const fibo = 5;

function fibona(fibo) {
  let res = [0, 1];
  if (fibo <= 0) {
    return res;
  }
  if (fibo === 1) {
    return res[0];
  }
  if (fibo === 2) {
    return [0, 1];
  }

  for (let i = 2; i < fibo; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }

  return res;
}

console.log(fibona(fibo));
