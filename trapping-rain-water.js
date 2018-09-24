// Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
// Example:
//
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

const trap = (height) => {
    let length = height.length;
    let left = [], right = [];
    let leftMax = 0, rightMax = 0;

    for (let i = 0, j = length - 1; i < length, j >= 0; i++, j--) {
        left[i] = leftMax;
        leftMax = Math.max(leftMax, height[i]);
        right[j] = rightMax;
        rightMax = Math.max(rightMax, height[j]);
    }

    let total = 0;
    for (let i = 0; i < length; i++) {
        let water = Math.min(left[i], right[i]) - height[i];
        total += water > 0 ? water : 0;
    }
    total
    return total;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);