/**
 * This problem was asked by Uber.
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 */

/**
 * O(n^2)
 * @param {Array} nums
 * @returns {Array}
 */
function solution1(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums.reduce(
      (acc, item, index) => (index === i ? acc : acc * item),
      1
    );
  }
  return result;
}

/**
 * Time Complexity: O(n)
 * @param {Array} nums
 * @returns {Array}
 */
function solution2(nums) {
  let numZero = 0;

  // Multiplied except arr[i] which is zero
  let multiplication = nums.reduce((acc, item) => {
    if (item === 0) {
      numZero++;
    }

    return item !== 0 ? acc * item : acc;
  }, 1);

  return nums.map((item) => {
    if (item === 0 && numZero === 1) {
      // Only one zero in that case only item with 0 have multiplication of items of array
      return multiplication;
    } else if (numZero > 1 || (numZero === 1 && item !== 0)) {
      // if more than 2 zero, all will be zero
      // if one zero and item itself is not zero then multiplication will be zero
      return 0;
    } else {
      return multiplication / item;
    }
  });
}

/**
 * Time Complexity: O(3n = n)
 * Follow-up: what if you can't use division?
 */
function solution3(nums) {
  let prefixMultiplier = new Array(nums.length);
  let suffixMultiplier = new Array(nums.length);
  let result = new Array(nums.length);

  prefixMultiplier[0] = nums[0];
  suffixMultiplier[nums.length - 1] = nums[nums.length - 1];
  // Prepare left to right multiplication matrix
  for (let i = 1; i < nums.length; i++) {
    prefixMultiplier[i] = prefixMultiplier[i - 1] * nums[i];
  }

  // Prepare right to left multiplication matrix
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixMultiplier[i] = suffixMultiplier[i + 1] * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] =
      (i > 0 ? prefixMultiplier[i - 1] : 1) *
      (i + 1 < nums.length ? suffixMultiplier[i + 1] : 1);
  }

  return result;
}

/**
 * Time Complexity: O(3n = n)
 * Space Complexity: (2n = 2)
 * Follow-up: what if you can't use division?
 */
function solution3(nums) {
  let prefixMultiplier = new Array(nums.length);
  let suffixMultiplier = new Array(nums.length);
  let result = new Array(nums.length);

  prefixMultiplier[0] = nums[0];
  suffixMultiplier[nums.length - 1] = nums[nums.length - 1];
  // Prepare left to right multiplication matrix
  for (let i = 1; i < nums.length; i++) {
    prefixMultiplier[i] = prefixMultiplier[i - 1] * nums[i];
  }

  // Prepare right to left multiplication matrix
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixMultiplier[i] = suffixMultiplier[i + 1] * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] =
      (i > 0 ? prefixMultiplier[i - 1] : 1) *
      (i + 1 < nums.length ? suffixMultiplier[i + 1] : 1);
  }

  return result;
}

/**
 * Time Complexity: O(3n = n)
 * Follow-up: what if you can't use division?
 */
function solution4(nums) {
  let result = new Array(nums.length).fill(1);
  let temp = 1;

  for (let i = 1; i < nums.length; i++) {
    result[i] = temp;
    temp *= nums[i];
  }

  temp = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= nums[i];
  }
  return result;
}

console.log("n^2");
console.log("[1, 2, 3, 4, 5]", solution1([1, 2, 3, 4, 5]));
console.log("[3, 2, 1]", solution1([3, 2, 1]));

console.log("With Division");
console.log("[1, 2, 3, 4, 5]", solution2([1, 2, 3, 4, 5]));
console.log("[3, 2, 1]", solution2([3, 2, 1]));
console.log("[1,2,3,0,3,4]", solution2([1, 2, 3, 0, 3, 4]));
console.log("[0,2,3,0,3,4]", solution2([0, 2, 3, 0, 3, 4]));

console.log("Without Division");
console.log("[1, 2, 3, 4, 5]", solution3([1, 2, 3, 4, 5]));
console.log("[3, 2, 1]", solution3([3, 2, 1]));
console.log("[1,2,3,0,3,4]", solution3([1, 2, 3, 0, 3, 4]));
console.log("[0,2,3,0,3,4]", solution3([0, 2, 3, 0, 3, 4]));

console.log("Without Division");
console.log("[1, 2, 3, 4, 5]", solution4([1, 2, 3, 4, 5]));
console.log("[3, 2, 1]", solution4([3, 2, 1]));
console.log("[1,2,3,0,3,4]", solution4([1, 2, 3, 0, 3, 4]));
console.log("[0,2,3,0,3,4]", solution4([0, 2, 3, 0, 3, 4]));
