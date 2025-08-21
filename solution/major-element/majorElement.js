// There are two ways from which we can solve this one is Byoer-Moore algo which is the most optimized it has O(n) time complexity.
// Other is by sorting the array and doing sorted[Math.floor(arr.length/2)] as the major element will most likely in the middle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num == candidate ? 1 : -1;
  }
  return candidate;
};
