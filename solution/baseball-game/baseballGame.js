var calPoints = function (nums) {
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "C") {
      stack.pop();
    } else if (nums[i] === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (nums[i] === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(parseInt(nums[i]));
    }
  }

  return stack?.reduce((acc, curr) => (acc += curr), 0);
};
