/*
implement an algorithm to determine if a string has all unique characters. 
what if you cannot use additional data structures?
*/
// O(n) ?

// function everyCharUnique(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] && obj[str[i]] >= 1) {
//       obj[str[i]]++;
//       console.log("false->", obj);
//       return false;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   console.log("true->", obj);
//   return true;
// }
const everyCharUnique = (str) => {
  let memo = {};
  for (let char of str) {
    if (memo[char]) {
      return false;
    } else {
      memo[char] = 1;
    }
  }
  return true;
};
/* TESTS */
console.log(everyCharUnique("abcd"), "true");
console.log(everyCharUnique("abccd"), "false");
console.log(everyCharUnique("bhjjb"), "false");
console.log(everyCharUnique("mdjq"), "true");
