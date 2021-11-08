var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights)
  let right = weights.reduce((prev, next) => {
    return prev + next
  })
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    let need = 1
    let current = 0
    for (const weight of weights) {
      if (current + weight > mid) {
        need++
        current = 0
      }
      current += weight
    }
    if (need <= days) {
      right = mid
    } else {
      left = mid  + 1
    }
  }
  return left
}