var climbStairs = function(n) {
  let map = new Map()
  map.set(0, 1)
  map.set(1, 1)
  function getCurrentSteps(level) {
      if (map.has(level)) {
          return map.get(level)
      }
      const currentStep = getCurrentSteps(level - 1) + getCurrentSteps(level - 2)
      map.set(level, currentStep)
      return currentStep
  }
  for (let i = 1; i <= n; i++) {
      getCurrentSteps(i)
  }
  return map.get(n)
};