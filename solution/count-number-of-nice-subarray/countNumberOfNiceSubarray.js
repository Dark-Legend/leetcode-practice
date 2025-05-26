var numberOfSubarrays = function (nums, k) {
  const count = Array(nums.length)?.fill(0);
  count[0] = 1;
  let even = 0;
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    even += nums[i] & 1;

    if (even - k >= 0) {
      answer += count[even - k];
    }

    count[even]++;
  }
  return answer;
};
