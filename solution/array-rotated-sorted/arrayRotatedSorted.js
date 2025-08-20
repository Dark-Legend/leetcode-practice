/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (arr) {
  let isRotated = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      isRotated++;
    }

    if (isRotated > 1) {
      return false;
    }
  }
  return true;
};
