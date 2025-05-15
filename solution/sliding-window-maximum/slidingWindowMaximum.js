var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    queue.push(i);

    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
};
