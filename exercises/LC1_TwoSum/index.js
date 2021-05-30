// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

/**
 * Time Complexity:  O(n^2)
 * Space Complexity: Constant
 * @param {*} arr
 * @param {*} target
 * @returns
 */
function twoSum(arr, target) {
  // Iterate over all elements
  let found = false;
  let indexes = {
    start: -1,
    end: -1,
  };

  // Compare each element in array
  for (let i = 0; i < arr.length; i++) {
    // Check with next Elements
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        indexes.start = i;
        indexes.end = j;
        found = true;
        break;
      }
    }

    if (found) {
      break;
    }
  }

  return [indexes.start, indexes.end];
}

module.exports = twoSum;
