let obj = {
    a:1,
    b:2,
    c:3
}
let obj2 = obj
obj2.d = 4

console.log(obj);
console.log(obj2)

// Value override
let obj3 = {
    ...obj,d:5
}
console.log(obj3)


let obj4 = {
    ...obj,...obj3
}
console.log(obj4);