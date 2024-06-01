var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((total, n) => total + n, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
obj1 + obj2; // 10
console.log(obj1 + obj2);
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"

console.log(String(obj1));
console.log(String(obj2));

// Calculator with Method Chaining
class Calculator {
  #value = 0;

  constructor(value) {
    this.#value = value;
  }

  add(value) {
    this.#value += value;
    return this;
  }

  subtract(value) {
    this.#value -= value;
    return this;
  }

  multiply(value) {
    this.#value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.#value /= value;
    return this;
  }

  power(value) {
    this.#value **= value;
    return this;
  }

  getResult() {
    return this.#value;
  }
}

let cal = new Calculator(10).add(5).subtract(7).getResult();

console.log(cal);


// Event Emitter
class EventEmitter {
  constructor() {
      this.events = new Map();
  }

  subscribe(eventName, callback) {
      if (!this.events.has(eventName)) {
          this.events.set(eventName, []);
      }

      const events = this.events.get(eventName);
      events.push(callback);

      return {
          unsubscribe: () => {
              const index = events.indexOf(callback);
              if (index !== -1) {
                  events.splice(index, 1);
              }
          },
      };
  }

  emit(eventName, args = []) {
      if (!this.events.has(eventName)) {
          return [];
      }

      const result = [];
      const events = this.events.get(eventName);

      events.forEach((callback) => {
          result.push(callback(...args));
      });

      return result;
  }
}


const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], no callback are subscribed yet
console.log(emitter.emit("firstEvent"));
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
emitter.emit("firstEvent"); // [5, 6],

console.log(emitter.emit("firstEvent"));