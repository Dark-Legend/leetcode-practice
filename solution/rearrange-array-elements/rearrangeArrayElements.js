/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Optimized Approach
var rearrangeArray = function (arr) {
  const result = new Int32Array(arr.length);
  let pos = 0;
  let neg = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result[neg] = arr[i];
      neg += 2;
    } else {
      result[pos] = arr[i];
      pos += 2;
    }
  }

  return result;
};

// Bruteforce Approach
var rearrangeArray = function (arr) {
  const negative = [];
  const positive = [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }

  for (let i = 0; i < positive.length; i++) {
    newArr.push(positive[i], negative[i]);
  }
  return newArr;
};
