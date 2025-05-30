/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let size = cardPoints.length;
  let [left, right] = [k - 1, size - 1];

  let currentPick = cardPoints.slice(0, k).reduce((x, y) => x + y, 0);
  let maxPoint = currentPick;

  for (let i = 0; i < k; i++) {
    currentPick += cardPoints[right] - cardPoints[left];

    maxPoint = Math.max(maxPoint, currentPick);

    [left, right] = [left - 1, right - 1];
  }

  return maxPoint;
};
