//Find Falsy Value in Array

const array = [0, 1, 2, "String", false, null, "", undefined, NaN];

const falsyValue = array.filter((val) => !val);

console.log(falsyValue);

//Find not Falsy Value in Array

const NotfalsyValue = array.filter((val) => val);

console.log(NotfalsyValue);
