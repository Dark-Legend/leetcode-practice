var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      console.log(stack);
      map.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
    console.log(stack);
  }

  return nums1.map((num) => map.get(num) || -1);
};

console.log(nextGreaterElement([1, 3, 2], [1, 5, 3, 6, 8]));
