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



// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */

var plusOne = function (digits) {
  let result = [];
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    carry = Math.floor(sum / 10);
  
    if (i === digits.length - 1){
      // console.log(digits.length);
      result.push(sum % 10);
    } else {
      result.push(sum % 10);
    }
  }

  if (carry > 0) {
    result.push(carry);
  }

  return result.reverse();
};

console.log(plusOne([9,9,9]));


// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.




