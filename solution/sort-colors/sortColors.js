/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let max = Math.max(...nums);
  let arry = new Array(max + 1).fill(0);

  for (let num of nums) {
    arry[num]++;
  }

  const sortedArr = [];

  for (let i = 0; i < arry.length; i++) {
    while (arry[i] > 0) {
      sortedArr.push(i);
      arry[i]--;
    }
  }

  for (let i = 0; i < sortedArr.length; i++) {
    nums[i] = sortedArr[i];
  }

  return nums;
};
