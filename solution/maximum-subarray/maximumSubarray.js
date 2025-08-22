// Through two appoach we can solve this
// 1. Brute force o(n2) with two loops calculate each values and check.
// 2. Kadane's Algorithm but need to tweak as classic kadane's dont' consider the negative.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (arr) {
  if (arr.length === 1) return arr[0];
  let max = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    max = Math.max(max, currentSum);
  }

  return max;
};
