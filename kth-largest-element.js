// Kth Largest Element in an Array
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
const findKthLargest = function (nums, k) {
    let lastele = nums.length - k;
    nums.sort((a, b) => a - b);
    return nums[lastele];
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

// You are here!
// Your runtime beats 87.58 % of javascript submissions.

// 32 / 32 test cases passed.
//  Status: Accepted
// Runtime: 68 ms