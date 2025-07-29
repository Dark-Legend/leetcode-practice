/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const arr2 = [];
  const arr1 = [...nums];
  let length = k % nums.length;

  for (let i = nums.length - length; i < nums.length; i++) {
    arr2.push(nums[i]);
  }
  arr1.length = nums.length - length;
  const rotated = [...arr2, ...arr1];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotated[i];
  }
};
