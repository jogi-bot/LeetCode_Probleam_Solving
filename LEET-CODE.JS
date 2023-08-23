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







