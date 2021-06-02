// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

/**
 * Brute Force
 * Time Complexity:  O(n^2) (n - string length)
 * Space Complexity: n + constant = n
 * @param {*} s
 * @returns {number} max length
 */
// function lengthOfLongestSubstring(s) {
//   let longestString = "";
//   // [0] for empty string
//   let maxLengths = [0];
//   for (let start = 0; start < s.length; start++) {
//     longestString = s[start];
//     maxLengths[start] = 1;
//     for (let i = start + 1; i < s.length; i++) {
//       if (!longestString.includes(s[i])) {
//         longestString = s.substr(start, i - start + 1);
//         maxLengths[start] = longestString.length;
//       } else {
//         break;
//       }
//     }
//   }

//   return Math.max(...maxLengths);
// }

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: n + constant
 * @param {*} s
 * @returns {number} max length
 */
function lengthOfLongestSubstring(s) {
  const visited = {};
  let startWindow = 0;
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (visited[s[i]] === undefined || visited[s[i]] < startWindow) {
      visited[s[i]] = i;
      if (i - startWindow + 1 > maxLength) {
        maxLength = i - startWindow + 1;
      }
    } else {
      // It's repeating, reset start window
      startWindow = visited[s[i]] + 1;
      visited[s[i]] = i;
    }
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
