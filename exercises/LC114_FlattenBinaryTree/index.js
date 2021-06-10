// LC 114
// Flatten Binary Tree

/**
 * Definition for a binary tree node.

 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * Pre Order Traversal
 * L M R
 * @param {TreeNode} root
 * @param {Array} path
 * @returns {Array} Pre Order Traversal Elements
 */
function preOrderTraversal(root, path = []) {
  if (root) {
    path.push(root.val);

    if (root.left) {
      preOrderTraversal(root.left, path);
    }

    if (root.right) {
      preOrderTraversal(root.right, path);
    }
  }

  return path;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const preOrder = preOrderTraversal(root);
  let pointer = root;

  preOrder.forEach((val, index) => {
    if (index === preOrder.length - 1) {
      return;
    }
    pointer.val = val;
    pointer.left = null;
    if (index !== preOrder.length - 1) {
      pointer.right = new TreeNode(preOrder[index + 1]);
    }
    pointer = pointer.right;
  });

  return root;
};
