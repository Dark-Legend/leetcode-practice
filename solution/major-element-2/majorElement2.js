// Approach with o(n) Time and Space Complexity;
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (arr) {
  const obj = {};
  const n = Math.floor(arr.length / 3);
  const result = [];
  for (nums of arr) {
    if (!obj[nums]) {
      obj[nums] = 0;
    }
    obj[nums]++;
  }
  for (val in obj) {
    if (obj[val] > n) {
      result.push(Number(val));
    }
  }
  return result;
};

// Approach with o(n) Time & o(1) Space Complexity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (arr) {
  let count1 = 0;
  let count2 = 0;
  let candidate1 = 0;
  let candidate2 = 1;
  const result = [];

  for (let num of arr) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  const n = Math.floor(arr.length / 3);

  if (arr.filter((val) => val === candidate1)?.length > n)
    result.push(candidate1);
  if (arr.filter((val) => val === candidate2)?.length > n)
    result.push(candidate2);

  return result;
};
