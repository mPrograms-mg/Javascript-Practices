function FLC(string) {
  let f = string.slice(1);
  let c = string.charAt(0).toUpperCase();
  let FC = c.concat(f);
  return FC;
}

console.log(FLC("mahesh"));
