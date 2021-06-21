/**
 * Time Complexity: O(n^2)
 * @param {Array} nums
 * @returns
 */
function solution1(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let localMax = nums[i];
    let product = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j];
      localMax = Math.max(localMax, product);
    }
    max = Math.max(max, localMax);
  }

  return max;
}

/**
 * Time Complexity: O(n)
 * @param {Array} arr
 * @returns
 */
function solution(arr) {
  let max = arr[0];
  let min = arr[0];
  let maxProduct = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      let swap = max;
      max = min;
      min = swap;
    }
    max = Math.max(arr[i], max * arr[i]);
    min = Math.min(arr[i], min * arr[i]);
    maxProduct = Math.max(maxProduct, max);
  }

  return maxProduct;
}

console.log("[2,3,-2,4]", solution([2, 3, -2, 4]));
console.log("[-2,0,-1]", solution([-2, 0, -1]));
