/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const findLeftMost = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let leftMost = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      leftMost = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return leftMost;
};

const findRightMost = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let rightMost = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      rightMost = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return rightMost;
};

var searchRange = function (nums, target) {
  const left = findLeftMost(nums, target);
  const right = findRightMost(nums, target);

  if (left === -1) return [-1, -1];

  return [left, right];
  console.log(left, right);
};
