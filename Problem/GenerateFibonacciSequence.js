var fibGenerator = function* () {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        let tmp = a;
        a = b;
        b = b + tmp;
    }
};



 const gen = fibGenerator();
 console.log(gen.next().value);
 console.log(gen.next().value);