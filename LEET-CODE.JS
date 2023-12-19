// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

var reverse = function (x) {
  const reverseNum =
    parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);

  if (reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1) {
    return 0;
  }

  return reverseNum;
};
console.log(reverse(-123));

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

function countAndSay(n) {
  if (n == 1) {
    return "1";
  }

  let preValue = countAndSay(n - 1);

  let count = 1;
  let result = "";
  for (let i = 0; i < preValue.length; i++) {
    if (preValue[i] === preValue[i + 1]) {
      count++;
    } else {
      result += count + preValue[i];
      count = 1;
    }
  }
  return result;
}
console.log(countAndSay(9));

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

function findDuplicate(arr1) {
  let result = [];
  let seen = new Set();
  for (let i = 0; i < arr1.length; i++) {
    if (seen.has(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    } else {
      seen.add(arr1[i]);
    }
  }
  return result;
}
console.log(findDuplicate([1, 2, 3, 4, 5, 5]));

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.
/**
 * @param {string} val
 * @return {Object}
 */

var expect = function (val) {
  return {
    toBe: function (otherValue) {
      if (val === otherValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function (otherValue) {
      if (val !== otherValue) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

try {
  console.log(expect(5).toBe(null));
} catch (error) {
  console.error(error.message);
}

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

const createHelloWorld = function (...args) {
  return function () {
    return "Hello World";
  };
};
console.log(createHelloWorld()());

// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: argsArr = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

function argumentsLength(...argsArr) {
  let count = 0;

  for (let i = 0; i < argsArr.length; i++) {
    if (argsArr[i] !== undefined) {
      count++;
    }
  }

  return count;
}

console.log(argumentsLength([5]));

//BEST COMPLEXITY OF ABOVE CODE USIG THESE CODE DO THESE TYPE

function argumentsLength(...argsArr) {
  return argsArr.filter((call) => call !== undefined).length;
}

console.log(argumentsLength([5]));

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

var addTwoPromises = async function (promise1, promise2) {
  const value = await Promise.all([promise1, promise2]);
  const sum = value[0] + value[1];
  return sum;
};

async function krunal() {
  promise1 = new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
  promise2 = new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
  const sum = await addTwoPromises(promise1, promise2);
  console.log(sum);
}
krunal();

//good time complexity
const addTwoPromises = async function (promise1, promise2) {
  return promise1.then((val1) => promise2.then((val2) => val1 + val2));
};

async function krunal() {
  promise1 = new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
  promise2 = new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
  const sum = await addTwoPromises(promise1, promise2);
  console.log(sum);
}
krunal();

//good complexity these also

const addTwoPromises = async function (promise1, promise2) {
  const [res1, res2] = await Promise.all([promise1, promise2]);

  return res1 + res2;
};

async function krunal() {
  promise1 = new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
  promise2 = new Promise((res, rej) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  });
  const sum = await addTwoPromises(promise1, promise2);
  console.log(sum);
}
krunal();

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

// Example 1:

// Input: fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
// Output: [{"time": 20, "returned": 10}]
// Explanation:
// const cancel = cancellable((x) => x * 5, [2], 20); // fn(2) called at t=20ms
// setTimeout(cancel, 50);

// The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened after the execution of fn(2) at 20ms.
// Example 2:

// Input: fn = (x) => x**2, args = [2], t = 100, cancelT = 50
// Output: []
// Explanation:
// const cancel = cancellable((x) => x**2, [2], 100); // fn(2) not called
// setTimeout(cancel, 50);

// The cancellation was scheduled to occur after a delay of cancelT (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
// Example 3:

// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelT = 100
// Output: [{"time": 30, "returned": 8}]
// Explanation:
// const cancel = cancellable((x1, x2) => x1 * x2, [2,4], 30); // fn(2,4) called at t=30ms
// setTimeout(cancel, 100);

// The cancellation was scheduled to occur after a delay of cancelT (100ms), which happened after the execution of fn(2,4) at 30ms.

const cancellable = function (fn, args, t) {
  hasCancelled = false;

  const hasNot = () => {
    hasCancelled = true;
  };

  const executeFn = () => {
    if (!hasCancelled) {
      const result = fn(...args);
      console.log([{ time: t, returned: result }]);
    }
  };

  setTimeout(executeFn, t);

  return hasNot;
};

const cancel1 = cancellable((x) => x * 5, [2], 20);

setTimeout(cancel1, 50);

//another type of uper code

const cancellable = function (fn, args, t) {
  hasCancelled = false;

  setTimeout(() => {
    if (!hasCancelled) {
      const result = fn(...args);
      console.log([{ time: t, returned: result }]);
    }
  }, t);

  return () => {
    hasCancelled = true;
  };
};

const cancel1 = cancellable((x) => x * 5, [2], 20);

setTimeout(cancel1, 50);

//another type of uper code

const cancellable = function (fn, args, t) {
  hasCancelled = false;

  const hasNot = () => {
    hasCancelled = true;
  };

  const executeFn = () => {
    if (!hasCancelled) {
      const result = fn(...args);
      console.log([{ time: t, returned: result }]);
    }
  };

  setTimeout(executeFn, t);

  return hasNot;
};

const cancel1 = cancellable((x) => x * 5, [2], 20);

setTimeout(cancel1, 50);

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.

// Example 1:

// Input: fn = (x) => x * 2, args = [4], t = 20, cancelT = 110
// Output:
// [
//    {"time": 0, "returned": 8},
//    {"time": 20, "returned": 8},
//    {"time": 40, "returned": 8},
//    {"time": 60, "returned": 8},
//    {"time": 80, "returned": 8},
//    {"time": 100, "returned": 8}
// ]
// Explanation:
// const cancel = cancellable(x => x * 2, [4], 20);
// setTimeout(cancel, 110);

// Every 20ms, fn(4) is called. Until t=110ms, then it is cancelled.
// 1st fn call is at 0ms. fn(4) returns 8.
// 2nd fn call is at 20ms. fn(4) returns 8.
// 3rd fn call is at 40ms. fn(4) returns 8.
// 4th fn call is at 60ms. fn(4) returns 8.
// 5th fn call is at 80ms. fn(4) returns 8.
// 6th fn call is at 100ms. fn(4) returns 8.
// Cancelled at 110ms
// Example 2:

// Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 25, cancelT = 140
// Output:
// [
//    {"time": 0, "returned": 10},
//    {"time": 25, "returned": 10},
//    {"time": 50, "returned": 10},
//    {"time": 75, "returned": 10},
//    {"time": 100, "returned": 10},
//    {"time": 125, "returned": 10}
// ]
// Explanation:
// const cancel = cancellable((x1, x2) => (x1 * x2), [2, 5], 25);
// setTimeout(cancel, 140);

// Every 25ms, fn(2, 5) is called. Until t=140ms, then it is cancelled.
// 1st fn call is at 0ms
// 2nd fn call is at 25ms
// 3rd fn call is at 50ms
// 4th fn call is at 75ms
// 5th fn call is at 100ms
// 6th fn call is at 125ms
// Cancelled at 140ms
// Example 3:

// Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50, cancelT = 180
// Output:
// [
//    {"time": 0, "returned": 9},
//    {"time": 50, "returned": 9},
//    {"time": 100, "returned": 9},
//    {"time": 150, "returned": 9}
// ]
// Explanation:
// const cancel = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50);
// setTimeout(cancel, 180);

// Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled.
// 1st fn call is at 0ms
// 2nd fn call is at 50ms
// 3rd fn call is at 100ms
// 4th fn call is at 150ms
// Cancelled at 180ms

var cancellable = function (fn, args, t, cancelT) {
  let currentTime = 0;
  let intervalId;
  const results = [];

  const executeFn = () => {
    const result = fn(...args);
    results.push({ time: currentTime, returned: result });
    currentTime += t;
    if (currentTime > cancelT) {
      clearInterval(intervalId);
      console.log(results);
      console.log("Cancelled.");
    }
  };
  executeFn();

  intervalId = setInterval(executeFn, t);

  return () => {
    clearInterval(intervalId);
    console.log("Cancelled.");
  };
};

const cancelT = 190;
const cancel = cancellable((x) => x * 2, [4], 35);
setTimeout(cancel, cancelT);

//another code these type

const cancellable = function (fn, args, t, cancelT) {
  let currentTime = 0;
  let intervalId;
  const results = [];

  const executeFn = () => {
    const result = fn(...args);
    results.push({ time: currentTime, returned: result });
    currentTime += t;
  };
  executeFn();

  intervalId = setInterval(executeFn, t);

  return () => {
    clearInterval(intervalId);
    console.log("Cancelled.");
    console.log(results);
  };
};

const cancelT = 190;
const cancel = cancellable((x) => x * 2, [4], 35);
setTimeout(cancel, cancelT);

//another code these type

const cancellable = function (fn, args, t, cancelT) {
  let currentTime = 0;
  let intervalId;
  const results = [];

  const executeFn = () => {
    const result = fn(...args);
    results.push({ time: currentTime, returned: result });
    currentTime += t;
  };
  executeFn();

  intervalId = setInterval(executeFn, t);

  return () => {
    clearInterval(intervalId);
    console.log(results);
  };
};

const cancelT = 190;
const cancel = cancellable((x) => x * 2, [4], 35);
setTimeout(cancel, cancelT);

// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

// Example 1:

// Input:
// fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// try {
//    const res = await limited(...inputs)
//    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output

// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
// Example 2:

// Input:
// fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// inputs = [5]
// t = 150
// Output: {"resolved":25,"time":100}
// Explanation:
// The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
// Example 3:

// Input:
// fn = async (a, b) => {
//   await new Promise(res => setTimeout(res, 120));
//   return a + b;
// }
// inputs = [5,10]
// t = 150
// Output: {"resolved":15,"time":120}
// Explanation:
// ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
// Example 4:

// Input:
// fn = async () => {
//   throw "Error";
// }
// inputs = []
// t = 1000
// Output: {"rejected":"Error","time":0}
// Explanation:
// The function immediately throws an error.

const timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise(async (res, rej) => {
      const Time = setTimeout(() => {
        clearTimeout(Time);
        rej("Time Limit Exceeded");
      }, t);

      
      try {
        const result = await fn(...args);
        clearTimeout(Time);
        res(result);
      } catch (err) {
        clearTimeout(Time);
        rej(err);
      }
    });
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const limited = timeLimit(fn, 50);
const inputs = [5];

limited(...inputs)
  .then((result) => {
    console.log({ resolved: result });
  })
  .catch((err) => {
    console.log({ rejected: err });
  });
t = 51;


// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

 

// Example 1:

// Input:
// ["TimeLimitedCache", "set", "get", "count", "get"]
// [[], [1, 42, 100], [1], [], [1]]
// [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.
// Example 2:

// Input:
// ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// [0, 0, 40, 50, 120, 200, 250]
// Output: [null, false, true, 50, 50, -1, 0]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
// At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
// At t=50, get(1) is called which returned 50.
// At t=120, get(1) is called which returned 50.
// At t=140, key=1 expires.
// At t=200, get(1) is called but the cache is empty so -1 is returned.
// At t=250, count() returns 0 because the cache is empty.

//my code 
var TimeLimitedCache = function () {
  this.catch = {};
  
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.catch[key] && this.catch[key].expirationTime > Date.now()) {
    this.catch[key].value = value;

    this.catch[key].expirationTime = Date.now() + duration;
    
    return true;
  } else {
    this.catch[key] = {
      value: value,
      expirationTime: Date.now() + duration,
    };
    return false;
  }
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.catch[key] && this.catch[key].expirationTime > Date.now()) {
    return this.catch[key].value;
  } else {
    return -1;
  }
};

TimeLimitedCache.prototype.count = function () {
  let currentTime = Date.now();
  let count = 0;

  for (key in this.catch) {
    if (this.catch[key].expirationTime > currentTime) {
      count++;
    }
  }
  return count;
};

// Your TimeLimitedCache object will be instantiated and called as such:
var obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 1000));
console.log(obj.get(1));
console.log(obj.count());


// Input:
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]
// Explanation:
// let start = Date.now();
// function log(...inputs) {
//   console.log([Date.now() - start, inputs ])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

// The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).
// Example 2:

// Input:
// t = 20
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 100, inputs: [2]}
// ]
// Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
// Explanation:
// The 1st call is delayed until 70ms. The inputs were (1).
// The 2nd call is delayed until 120ms. The inputs were (2).
// Example 3:

// Input:
// t = 150
// calls = [
//   {"t": 50, inputs: [1, 2]},
//   {"t": 300, inputs: [3, 4]},
//   {"t": 300, inputs: [5, 6]}
// ]
// Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
// Explanation:
// The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
// The 2nd call is cancelled by the 3rd call
// The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).

const debounce = function (fn, t) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 100);
log("Hello");
log("Hello");
log("Hello");

// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

 

// Example 1:

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation: 
// promiseAll(functions).then(console.log); // [5]

// The single function was resolved at 200ms with a value of 5.
// Example 2:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]
// Output: {"t": 100, "rejected": "Error"}
// Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
// Example 3:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]
// Output: {"t": 150, "resolved": [4, 10, 16]}
// Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.
 

// Constraints:

// functions is an array of functions that returns promises
// 1 <= functions.length <= 10

var promiseAll = async function (functions) {
  return new Promise((res, rej) => {
    let numberOfLength = functions.length;
    let counter = 0;
    let result = new Array(numberOfLength);
    functions.forEach(async (fn, index) => {
      try {
        const response = await fn();
        result[index] = response;
        counter += 1;
        if (counter === numberOfLength) {
          res(result);
        }
      } catch (error) {
        rej(error);
      }
    });
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);

promise.then(console.log);


// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

 

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
 

// Constraints:

//  2 <= JSON.stringify(obj).length <= 105

var isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEmpty({ x: 5, y: 42 }));

// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

 

// Example 1:

// Input: 
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }
// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }
// Explanation:
// Output is from array.groupBy(fn).
// The selector function gets the "id" out of each item in the array.
// There are two objects with an "id" of 1. Both of those objects are put in the first array.
// There is one object with an "id" of 2. That object is put in the second array.
// Example 2:

// Input: 
// array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9]
// ]
// fn = function (list) { 
//   return String(list[0]); 
// }
// Output: 
// { 
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
// }
// Explanation:
// The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
// All the arrays have 1 as their first element so they are grouped together.
// {
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }
// Example 3:

// Input: 
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// fn = function (n) { 
//   return String(n > 5);
// }
// Output:
// {
//   "true": [6, 7, 8, 9, 10],
//   "false": [1, 2, 3, 4, 5]
// }
// Explanation:
// The selector function splits the array by whether each number is greater than 5.

Array.prototype.groupBy = function (fn) {
  var m = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);

    if (!(key in m)) {
      m[key] = [];
    }
    m[key].push(this[i]);
  }
  return m;
};

const result = [1, 2, 3].groupBy(String);
console.log(result);

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 

// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// "getCallCount" - total call count: 1

function memoize(fn) {
  let cache = {};
  
  return function (...args) {
    const key = JSON.stringify(args);
   
    if (key in cache) {
      return cache[key];
    } else {
      cache[key] = fn(...args);
      return cache[key];
    }
  };
}
const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);
memoizedSum(2, 2);


// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 

// Example 1:

// Input:
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ],
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output:
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
// Example 2:

// Input:
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ],
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output:
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.
// Example 3:

// Input:
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]
// Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.
 

// Constraints:

// arr1 and arr2 are valid JSON arrays
// Each object in arr1 and arr2 has a unique integer id key
// 2 <= JSON.stringify(arr1).length <= 106
// 2 <= JSON.stringify(arr2).length <= 106


var join = function (arr1, arr2) {
    const idMap = {};
   

  // Iterate over arr1 and arr2, merge objects based on id
    [...arr1, ...arr2].forEach((obj) => {
        const id = obj.id
      
        if (!idMap[id]) {
             idMap[id] = {...obj}
        } else {
              
            idMap[id] = { ...idMap[id] ,  ...obj }
        }

        // const result = Object.values(idMap)
        // console.log(result);
    })

    const result = Object.values(idMap);
    
    console.log(idMap);
       
     return result.sort((item1, item2) => {
          item1.id - item2.id
     })
   
  
};

const arr1 = [
  { id: 3, x: 1 },
  { id: 2, x: 9 },
];

const arr2 = [
  { id: 1, x: 5 },
  { id: 2, x: 10 },
];

console.log(join(arr1, arr2));


//another method to do these step:-2 


 var join = function (arr1, arr2) {
  const idMap = {};

  // Iterate over arr1 and arr2, merge objects based on id
  [...arr1, ...arr2].forEach((obj) => {
    const id = obj.id;

    if (!idMap[id]) {
      idMap[id] = { ...obj };
    } else {
      Object.assign(idMap[id], obj);
    }

    // const result = Object.values(idMap)
    // console.log(result);
  });

  const result = Object.values(idMap);

  console.log(idMap);

  return result.sort((item1, item2) => {
    item1.id - item2.id;
  });
};

const arr1 = [
  { id: 3, x: 1 },
  { id: 2, x: 9 },
];

const arr2 = [
  { id: 1, x: 5 },
  { id: 2, x: 10 },
];

console.log(join(arr1, arr2));
