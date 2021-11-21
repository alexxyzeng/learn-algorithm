/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  const n = nums.length
  const dp = new Array(n)
  dp[0] = 0
  for (let i = 1; i < n; i++) {
      let ans = Number.MAX_SAFE_INTEGER
      for (let j = 0; j < i; j++) {
          if (nums[j] >= i - j) ans = Math.min(ans, dp[j] + 1);
      }
      dp[i] = ans
  }
  return dp[n - 1]
};