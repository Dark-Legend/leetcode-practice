/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (str) {
  const freqChar = { a: 0, b: 0, c: 0 };
  let count = 0;
  let startIndex = 0;

  for (let endIndex = 0; endIndex < str.length; endIndex++) {
    freqChar[str[endIndex]]++;
    while (freqChar["a"] > 0 && freqChar["b"] > 0 && freqChar["c"] > 0) {
      count += str.length - endIndex;
      freqChar[str[startIndex]]--;
      startIndex++;
    }
  }
  return count;
};
