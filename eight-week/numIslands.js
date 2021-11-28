/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length

  const dx = [-1, 0, 0, 1]
  const dy = [0, -1, 1, 0]
  const parent = new Array(m * n + 1).map((value, index) => index)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') {
        continue
      }
      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k]
        const ny = j + dy[k]
        if (nx >= m || ny >= n || nx < 0 || ny < 0) {
          continue
        }
        if (grid[nx][ny] === '1') {
          union(parent, nums(n, i, j), nums(n, nx, ny))
        }
      }
    }
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '1' && find(parent, nums(n, i, j)) == nums(n, i, j)) {
        ans++
      }
    }
  }
  return ans
}

function nums(n, i, j) {
  return i * n + j
}

function find(parent, x) {
  if (parent[x] === x) {
    return x
  }
  parent[x] = find(parent, parent[x])
  return parent[x]
}

function union(parent, index1, index2) {
  parent[find(parent, index1)] = parent[find(parent, index2)]
}