var singleNumber = function (nums) {
  const obj = {};

  for (let i = 0; i < nums?.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    }

    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    }
  }

  for (let j = 0; j < nums?.length; j++) {
    if (obj[nums[j]] === 1) return nums[j];
  }
};
