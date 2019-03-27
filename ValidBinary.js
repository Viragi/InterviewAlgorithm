// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

var isValidBST = function(root) {
  return inorder(root);
};

function inorder(root, previous = {}) {
  if (root == null) {
    return true;
  }

  if (!inorder(root.left, previous)) {
    return false;
  }
  // console.log("ppp",previous, root.val);
  if (previous.value != undefined) {
    if (previous.value >= root.val) {
      return false;
    }
  }
  previous.value = root.val;
  if (!inorder(root.right, previous)) {
    return false;
  }
  return true;
}
