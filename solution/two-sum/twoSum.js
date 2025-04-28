var twoSum = function (nums, target) {
  if (
    !Array.isArray(nums) ||
    !nums?.length ||
    nums === undefined ||
    target === undefined
  )
    return;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
