/*
Given two strings, wrtie a method to decide if one is a permutation of the other
*/

// const checkPermute = function (stringOne, stringTwo) {
//   // if different lengths, return false
//   if (stringOne.length !== stringTwo.length) {
//     return false;
//     // else sort and compare
//     // (doesnt matter how it's sorted, as long as it's sorted the same way)
//   } else {
//     console.log(stringOne.split(""));
//     var sortedStringOne = stringOne.split("").sort().join("");
//     var sortedStringTwo = stringTwo.split("").sort().join("");

//     return sortedStringOne === sortedStringTwo;
//   }
// };

// spliting is copying? so O(n) ?
const checkPermute = function (strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;
  let sortedOne = strOne.split("").sort().join("");
  let sortedTwo = strTwo.split("").sort().join("");
  return sortedOne === sortedTwo;
};

// Tests
console.log(checkPermute("aba", "aab"), true);
console.log(checkPermute("aba", "aaba"), false);
console.log(checkPermute("aba", "aa"), false);
