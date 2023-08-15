let n1, n2, max;
function LCM(n1, n2) {
  max = n1 > n2 ? n1 : n2;
  while (true) {
    if (max % n1 == 0 && max % n2 == 0) {
      console.log(n1, n2, max);
      break;
    }
    max++;
  }
}
console.log(LCM(72, 120));
