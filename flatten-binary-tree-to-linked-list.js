// Given a binary tree, flatten it to a linked list in-place.
// For example, given the following tree:

//     1
//     / \
//   2   5
// / \   \
// 3   4   6
// The flattened tree should look like:
//  1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

const flatten = (root) => {
    if (!root) return [];

    let left = root.left;
    let right = root.right;

    if (left) flatten(left);
    if (right) flatten(right);

    root.left = null;
    root.right = left;

    let current = root;

    while (current.right !== null) {
        current = current.right;
    }
    current.right = right;
};

console.log(flatten([1, 2, 5, 3, 4, null, 6]));


// javascript
// You are here!
// Your runtime beats 91.82 % of javascript submissions.


// 225 / 225 test cases passed.
// Status: Accepted
// Runtime: 64 ms