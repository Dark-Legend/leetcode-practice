const topKFrequentElements = (nums, k) => {
  const freqK = new Map();

  nums.forEach((n) => {
    if (freqK.has(n)) freqK.set(n, freqK.get(n) + 1);
    else freqK.set(n, 1);
  });

  const count = [...freqK].sort((a, b) => b[1] - a[1]);
  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(count[i][0]);
  }

  return answer;
};
