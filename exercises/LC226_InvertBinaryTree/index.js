// LC 226
// Invert Binary Tree

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * In Order Traversal
 * M L R
 * @param {TreeNode} root
 * @param {Array} path
 * @returns {Array} In Order Traversal Elements
 */
function inOrderTraversal(root, path = []) {
  if (root) {
    if (root.left) {
      inOrderTraversal(root.left, path);
    }
    path.push(root.val);
    if (root.right) {
      inOrderTraversal(root.right, path);
    }
  }

  return path;
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
 * Post Order Traversal
 * L R M
 * @param {TreeNode} root
 * @param {Array} path
 * @returns {Array} Post Order Traversal Elements
 */
function postOrderTraversal(root, path = []) {
  if (root) {
    if (root.left) {
      postOrderTraversal(root.left, path);
    }
    if (root.right) {
      postOrderTraversal(root.right, path);
    }
    path.push(root.val);
  }

  return path;
}

/**
 * Invert Tree
 * @param {TreeNode} root
 */
function invertTree(root) {
  if (root === null) {
    return root;
  }
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  if (root.left) {
    invertTree(root.left);
  }
  if (root.right) {
    invertTree(root.right);
  }
  return root;
}

/**
 * Tree Traversal
 * @param {*} root
 * @returns
 */
function test(root) {
  console.log("In Tree Before", inOrderTraversal(root));
  console.log("Pre Tree Before", preOrderTraversal(root));
  console.log("Post Tree Before", postOrderTraversal(root));
  inverseTree(root);
  console.log("In Tree After", inOrderTraversal(root));
  console.log("Pre Tree After", preOrderTraversal(root));
  console.log("Post Tree After", postOrderTraversal(root));
  return root;
}

const binaryTreeRoot = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);
test(binaryTreeRoot);

/**
 *                4
 *              /   \
 *            2      7
 *           / \    /  \
 *          1   3   6   9
 */
// in order: 1 2 3 4 6 7 9
// pre: 4 2 1 3 7 6 9
// post: 1 3 2 6 9 7 4
// [4 2 7 1 3 6 9]
//
/**
 *                4
 *              /   \
 *            7      2
 *           / \    /  \
 *          9   6   3   1
 */

// in order: 9 7 6 4 3 2 1
// pre: 4 7 9 6 2 3 1
// post: 9 6 7 3 1 2 4

// Input: root = [4, 2, 7, 1, 3, 6, 9];
// Output: [4, 7, 2, 9, 6, 3, 1];
