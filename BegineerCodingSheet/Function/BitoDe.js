function BtoD(num) {
  let dec = 0;
  let wei = 1;
  while (num != 0) {
    let rem = num % 10;
    dec = dec + rem * wei;
    num = parseInt(num / 10);
    wei = wei * 2;
  }

  return dec;
}

console.log("B TO D.............", BtoD(100));
