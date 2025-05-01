const checkSequence = (arr) => {
  const setArr = new Set();

  for (let nums of arr) {
    setArr.add(nums);
  }

  let maxLength = 0;

  for (let num of setArr) {
    if (!setArr.has(num - 1)) {
      let currentNum = num;
      let maxLen = 1;

      while (setArr.has(currentNum + 1)) {
        currentNum += 1;
        maxLen += 1;
      }

      maxLength = Math.max(maxLength, maxLen);
    }
  }

  return maxLength;
};
