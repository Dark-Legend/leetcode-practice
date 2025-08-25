/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (arr, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();

  map.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    const remain = sum - k; // if it comes to 0 then the sum is equals to k

    if (map.get(remain)) {
      count += map.get(remain);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};
