/**
 * @param {number[]} nums
 * @return {number}
 */

var reversePairs = function (nums) {
  let count = 0;

  mergeSort(nums);
  return count;

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left, right) {
    let i = 0;
    let j = 0;

    // Count reverse pairs
    while (i < left.length && j < right.length) {
      if (left[i] > 2 * right[j]) {
        count += left.length - i;
        j++;
      } else {
        i++;
      }
    }

    // Merge step
    const result = [];
    i = 0;
    j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    while (i < left.length) result.push(left[i++]);
    while (j < right.length) result.push(right[j++]);

    return result;
  }
};
