var largestRectangleArea = function (arr) {
  const stack = [-1];

  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    while (
      stack[stack.length - 1] !== -1 &&
      arr[i] <= arr[stack[stack.length - 1]]
    ) {
      const height = arr[stack.pop()];
      const width = i - stack[stack.length - 1] - 1;
      max = Math.max(max, height * width);
    }
    stack.push(i);
  }

  while (stack[stack.length - 1] !== -1) {
    const height = arr[stack.pop()];
    const width = arr.length - stack[stack.length - 1] - 1;
    max = Math.max(max, height * width);
  }
  return max;
};
