const str = "Ma!@#hes%^h";

const replaced = str.replace(/[^a-z0-9 -]/gi, "");

console.log(replaced);
