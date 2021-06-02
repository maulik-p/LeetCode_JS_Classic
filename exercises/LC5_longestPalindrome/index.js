//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

// Expand current index
function expand(s, start, end) {
  while (start > -1 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }

  return s.substring(start + 1, end);
}

/**
 * Approach: Expand
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {*} s
 * @returns {string} longest palindrome
 */
function longestPalindrome(s = "") {
  let maxPalindrome = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    // Check for case with single center like aabaa
    let temp = expand(s, i, i);
    if (temp.length > maxPalindrome.length) {
      maxPalindrome = temp;
    }

    // Check for case with two center like aabbaa
    temp = expand(s, i, i + 1);
    if (temp.length > maxPalindrome.length) {
      maxPalindrome = temp;
    }
  }

  return maxPalindrome;
}

module.exports = longestPalindrome;
