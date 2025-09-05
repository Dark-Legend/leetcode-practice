/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// APPROACH 1st.

var merge = function (num1, m, num2, n) {
  if (n === 0) return num1;
  for (let i = num2.length - 1; i >= 0; i--) {
    num1[m + i] = num2[i];
  }

  for (let i = 1; i < num1.length; i++) {
    const key = num1[i];
    let first = i - 1;

    while (first >= 0 && key < num1[first]) {
      num1[first + 1] = num1[first];
      first--;
    }
    num1[first + 1] = key;
  }
  return num1;
};

// APPROACH 2nd

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (num1, m, num2, n) {
  if (n === 0) return num1;
  let end = num1.length - 1;

  while (n > 0 && m > 0) {
    if (num2[n - 1] >= num1[m - 1]) {
      num1[end] = num2[n - 1];
      n--;
    } else {
      num1[end] = num1[m - 1];
      m--;
    }
    end--;
  }

  while (n > 0) {
    num1[end] = num2[n - 1];
    n--;
    end--;
  }
};
