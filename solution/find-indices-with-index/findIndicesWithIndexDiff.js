var findIndices = function (arr, index, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + index; j < arr.length; j++) {
      if (Math.abs(i - j) >= index && Math.abs(arr[i] - arr[j]) >= value) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
