var buildTree = function(inorder, postorder) {
  let postIndex = postorder.length - 1
  const indexMap = new Map()
  function build(indexLeft, indexRight) {
    if (indexLeft > indexRight) {
      return null
    }
    const rootVal = postorder[postIndex]
    const root = new TreeNode(rootVal)
    const index = indexMap.get(rootVal)
    postIndex--
    root.right = build(index + 1, indexRight)
    root.left = build(indexLeft, index - 1)
    return root
  }

  let index = 0
  inorder.forEach((val, index) => {
    indexMap.set(val, index)
  })
  return build(0, inorder.length - 1)
};
