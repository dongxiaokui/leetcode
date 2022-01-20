/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 递归
var searchBST = function (root, val) {
    if (root === null) {
        return null
    }
    if (root.val === val) {
        return root
    } else if (root.val < val) {
        return searchBST(root.right, val)
    } else if (root.val > val) {
        return searchBST(root.left, val)
    }
};
// 迭代
var searchBST = function (root, val) {
    while (root !== null && root.val !== val) {
        root = val < root.val ? root.left : root.right
    }

    return root
};