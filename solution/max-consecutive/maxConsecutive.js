/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let startPoint = 0;
  let max = 0;
  let count = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      count++;
    }

    while (count > k) {
      if (nums[startPoint] === 0) {
        count--;
      }
      startPoint++;
    }
    max = Math.max(max, end - startPoint + 1);
  }

  return max;
};
