/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
  const n = edges.length
  const parent = new Array(n+ 1).fill(0).map((value, index) => index)

  function findIndex(parent, index) {
    if (parent[index] !== index) {
      parent[index] = findIndex(parent, parent[index])
    }
    return parent[index]
  }

  function union(parent, index1, index2) {
    parent[findIndex(parent, index1)] = parent[findIndex(parent, index2)]
  }

  for (let i = 0; i < n; i++) {
    const edge = edges[i]
    const node1 = edge[0]
    const node2 = edge[1]
    if (findIndex(parent, node1) !== findIndex(parent, node2)) {
      union(parent, node1, node2)
    } else {
      return edge
    }
  }
  return [0]
};