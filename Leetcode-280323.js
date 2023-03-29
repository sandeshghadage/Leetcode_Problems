// // 13 Roman to integer

// var romanToInt = function (s) {
//   let obj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let ans = 0;
//   let cur = 0;
//   let prev = 0;
//   for (let j = s.length - 1; j >= 0; j -= 1) {
//     cur = obj[s[j]];
//     cur < prev ? (ans -= cur) : (ans += cur);
//     prev = cur;
//   }
//   return ans;
// };

//--------------------------------------------------------------------------

// // 14 Longest Common Prefix

// var longestCommonPrefix = function(strs) {
//     if (!strs || !strs.length) {
//        return '';
//      }
//      if (strs.length === 1) {
//        return strs[0];
//      }
//      strs.sort();
//      let prefix = '';
//      for (let i = 0; i < strs[0].length; i++) {
//        if (strs[0][i] !== strs[strs.length - 1][i]) {
//          break;
//        }
//        prefix += strs[0][i];
//      }
//      return prefix;

//    };

//-----------------------------------------------------------------------------

// // 20. Valid Parentheses

// var isValid = function(s) {
//     const stack = [];

//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }

//     return stack.length === 0;
// };

// -------------------------------------------------------------------------

// // 28. Find the Index of the First Occurrence in a String

// var strStr = function(haystack, needle) {
//     if(haystack.includes(needle)){
//         const x = haystack.indexOf(needle);
//         return x;
//     } else {
//         return -1;
//     }

// };

// --------------------------------------------------------------------------------

// // 58. Length of Last Word

// var lengthOfLastWord = function(s) {
//     const arr = s.trim().split(" ");
//     let x = arr.pop();
//     return (x.length);
// };

//----------------------------------------------------------------------------------
