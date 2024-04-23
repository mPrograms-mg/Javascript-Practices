// A recursive function is a function that calls itself somewhere within the body of the function.

function recursionDemo() {
  console.log("This is Recursion Function");
  recursionDemo();
}

// recursionDemo();

function recursionFn(n) {
  for (let index = 0; index < n; index++) {
    if (index === 2) {
      recursionFn(); // recusion function
    }
  }
  console.log("This is Recursion Function");
}

recursionFn(3);
