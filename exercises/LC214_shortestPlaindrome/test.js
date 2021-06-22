// LC 214
// You are given a string s. You can convert s to a palindrome by adding characters in front of it.
// Return the shortest palindrome you can find by performing this transformation.

/**
 * In case any place insertion is allowed
 * @param {*} s
 * @param {*} start
 * @param {*} end
 * @returns {string} palindrome string
 */
function appendMissingCharacterAnyPlace(s, start, end) {
  if (start === end || start > end) {
    return s;
  }
  if (s[start] !== s[end]) {
    s = s.substring(0, start) + s[end] + s.substring(start);
    start++;
  } else {
    start++;
    end--;
  }

  return appendMissingCharacterAnyPlace(s, start, end);
}

/**
 * Go over taken center and find can it be center of palindrome if yes what will be the prefix
 * @param {*} s
 * @param {*} start
 * @param {*} end
 * @returns {Object}
 */
function appendMissingCharacter(s, start, end) {
  let prefix = "";
  while (start >= 0 && end < s.length) {
    if (s[start] === s[end]) {
      start--;
      end++;
    } else {
      break;
    }
  }

  if (start < 0) {
    prefix = reverse(s.substring(end, s.length));
  } else {
    return { center: false };
  }

  return { center: true, prefix };
}

/**
 * Time Complexity: O(3n^2) = O(n^2)
 * Space Complexity: O(n)
 * @param {*} s
 * @returns {string} longest palindrome
 */
function unOptimizedShortestPalindrome(s = "") {
  let shortestPrefixPalindrome = s;
  for (let i = Math.ceil(s.length / 2); i >= 0; i--) {
    // Center is single center
    let temp = appendMissingCharacter(s, i - 1, i + 1);
    if (temp.center && temp.prefix.length < shortestPrefixPalindrome.length) {
      shortestPrefixPalindrome = temp.prefix;
    }

    // 2 center one on right
    temp = appendMissingCharacter(s, i, i + 1);
    if (temp.center && temp.prefix.length < shortestPrefixPalindrome.length) {
      shortestPrefixPalindrome = temp.prefix;
    }

    // 2 center one on left
    temp = appendMissingCharacter(s, i - 1, i);
    if (temp.center && temp.prefix.length < shortestPrefixPalindrome.length) {
      shortestPrefixPalindrome = temp.prefix;
    }
  }

  return shortestPrefixPalindrome + s;
}

// Util
function reverse(s) {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }

  return reversed;
}

/**
 * @param {String} s
 * @returns {Array} KMP
 */
function buildKMP(s) {
  let combined = s;
  let kmp = Array(combined.length).fill(0);

  for (let i = 1; i < combined.length; i++) {
    let j = kmp[i - 1];
    while (j > 0 && combined.charAt(i) !== combined.charAt(j)) {
      j = kmp[j - 1];
    }
    if (combined.charAt(i) === combined.charAt(j)) {
      kmp[i] = j + 1;
    }
  }

  return kmp;
}

/**
 *
 * @param {String} s
 * @returns {String} shortest palindrome
 */
function shortestPalindrome(s = "") {
  let reversed = reverse(s);
  const kmp = buildKMP(s + "#" + reversed);

  return reverse(s.substring(kmp[kmp.length - 1])) + s;
}

const testCases = [
  {
    test: "ababbbabbaba",
    ans: "ababbabbbababbbabbaba",
  },
  {
    test: "bba",
    ans: "abba",
  },
];

/**
 *
 * @param {string} s
 * @return {string}
 */
var shortestPalindromeByAddingCharacter = function (s) {
  var chars = s.split(""),
    reversed = chars.slice().reverse();
  if (isPalindrome(s)) return s;
  for (var i = 0, n = chars.length - 1; i < n; i++) {
    var joined = reversed
      .slice(0, i + 1)
      .concat(chars)
      .join("");
    if (isPalindrome(joined)) {
      return joined;
    }
  }
};

var isPalindrome = function (str) {
  var chars = str.split("");
  for (var i = 0, n = Math.floor(chars.length / 2); i < n; i++) {
    if (chars[i] !== chars[chars.length - i - 1]) {
      return false;
    }
  }
  return true;
};

function testAlgorithms(functionToBeUsed) {
  testCases.forEach((item, index) => {
    test(`${functionToBeUsed.name}: ${item.test} returns ${item.ans}`, () => {
      expect(functionToBeUsed(item.test)).toEqual(item.ans);
    });
  });
}

testAlgorithms(shortestPalindrome);
testAlgorithms(shortestPalindromeByAddingCharacter);
testAlgorithms(unOptimizedShortestPalindrome);

module.exports = shortestPalindrome;
