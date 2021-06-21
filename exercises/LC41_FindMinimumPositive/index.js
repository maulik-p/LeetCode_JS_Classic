/**
 * Time Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let max = -Infinity;
  const hashedNumbers = {};
  // Traverse to map numbers and find out max element
  nums.forEach((item) => {
    if (item > max) {
      max = item;
    }

    hashedNumbers[item] = true;
  });

  // In case all were negative
  if (max <= 0) {
    return 1;
  }

  let firstMissingPositive = null;
  for (let i = 1; i < max; i++) {
    if (!hashedNumbers[i]) {
      firstMissingPositive = i;
      break;
    }
  }

  if (!firstMissingPositive) {
    firstMissingPositive = max + 1;
  }

  return firstMissingPositive;
};

/**
 * Time Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive2 = function (nums) {
  for (let i = 0; i < nums.length; ) {
    while (nums[i] !== i && nums[i] >= 0 && nums[i] <= nums.length) {
      let temp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = temp;
    }
    i++;
  }

  let firstMissingPositive;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== i) {
      firstMissingPositive = i;
      break;
    }
  }

  if (!firstMissingPositive) {
    firstMissingPositive = nums.length;
  }

  return firstMissingPositive;
};

[[1, 2, 0], [3, 4, -1, 1], [-5]].forEach((test) => {
  console.log(`Test: [${test}]`, firstMissingPositive2(test));
});
