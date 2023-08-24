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

  if (reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31)-1) {
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
  return result 
}
console.log(findDuplicate([1, 2, 3, 4, 5,5]))


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
        return ( true );
      } else {
          throw new Error ("Not Equal")
      }
    },

    notToBe: function (otherValue) {
      if (val !== otherValue) {
        return ( true );
      } else {
        throw new Error ("Equal") 
       
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

const  createHelloWorld = function (...args){
  return function() { 
    return "Hello World"
  }
}
console.log(createHelloWorld()())

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
  return argsArr.filter(call => call !== undefined).length
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
  const value = await Promise.all([promise1, promise2])
    const sum =  value[0] + value[1]
	 return sum


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
krunal()

//good time complexity 
const addTwoPromises = async function (promise1, promise2) {

  return promise1.then((val1 => promise2.then( val2 =>  val1 + val2)))
   

 


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
krunal()

//good complexity these also


const addTwoPromises = async function (promise1, promise2) {
  const [res1, res2] = await Promise.all([promise1, promise2])
    

	 return res1 + res2


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
krunal()


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

