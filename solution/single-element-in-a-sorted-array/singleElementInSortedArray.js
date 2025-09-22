/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2 === 1) {
      mid--;
    }

    console.log(`left=${left}, right=${right}, mid=${mid}`);

    if (nums[mid] === nums[mid + 1]) {
      console.log(`${nums[mid]} is paired with ${nums[mid + 1]}, go right`);
      left = mid + 2;
    } else {
      console.log(`${nums[mid]} != ${nums[mid + 1]}, go left`);
      right = mid;
    }
  }
  return nums[left];
};
