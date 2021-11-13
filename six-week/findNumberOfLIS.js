var findNumberOfLIS = function (nums) {
  const n = nums.length
  let maxLen = 0
  let ans = 0
  const dp = new Array(n).fill(0)
  const count = new Array(n).fill(0)
  for (let i = 0; i < n; ++i) {
    dp[i] = 1
    count[i] = 1
    for (let j = 0; j < i; ++j) {
      // 增长
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          count[i] = count[j]
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j]
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
      ans = count[i]
    } else if (dp[i] === maxLen) {
      ans += count[i]
    }
  }
  return ans
}