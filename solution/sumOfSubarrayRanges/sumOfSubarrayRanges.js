var subArrayRanges = function (nums) {
  const n = nums.length;
  function getSum(isMin) {
    let total = 0;
    const stack = [];
    for (let i = 0; i <= n; i++) {
      const cur = i < n ? nums[i] : isMin ? -Infinity : Infinity;
      while (
        stack.length &&
        (isMin
          ? nums[stack[stack.length - 1]] > cur
          : nums[stack[stack.length - 1]] < cur)
      ) {
        const mid = stack.pop();
        const left = stack.length === 0 ? -1 : stack[stack.length - 1];
        const right = i;
        const count = (mid - left) * (right - mid);
        total += nums[mid] * count;
      }
      stack.push(i);
    }
    return total;
  }
  const maxSum = getSum(false);
  const minSum = getSum(true);
  return maxSum - minSum;
};
