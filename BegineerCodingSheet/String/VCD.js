function VCD(str) {
  let vowels = 0,
    consonant = 0,
    specialChar = 0,
    digit = 0;

  for (let i = 0; i <= str.length; i++) {
    let ch = str[i];
    console.log("........", ch);
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
        // To handle upper case letters
        ch = ch.toLowerCase();

        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
          vowels++;
        else consonant++;
      } else if (ch >= "0" && ch <= "9") digit++;
      else specialChar++;
    }
  }
  console.log("vowels", vowels);
  console.log(consonant);
  console.log(digit);
  console.log(specialChar);
}

let str = "MaheshK123";
VCD(str);
