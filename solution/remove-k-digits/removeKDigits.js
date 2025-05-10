var removeKdigits = function (nums, k) {
  const stack = [];

  for (let num of nums) {
    while (k > 0 && stack.length && num < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }

  let result = stack.join("").replace(/^0+/, "");

  return result === "" ? "0" : result;
};
