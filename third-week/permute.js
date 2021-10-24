var permuteUnique = function (nums) {
  const result = []
  const vis = new Array(nums.length).fill(false);
  function backstrack(index, perm) {
    if (index === nums.length) {
      result.push(perm.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue
      }
      perm.push(nums[i])
      vis[i] = true
      backstrack(index + 1, perm)
      vis[i] = false
      perm.pop()
    }
  }
  nums.sort((x, y) => x - y)
  backstrack(0, [])
  return result
}