// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
//
//     Note:
//
// The solution set must not contain duplicate triplets.

const threeSum = (nums) => {
    let target = 0;
    let length = nums.length;
    let result = [];
    let hashMap = {};
    nums.sort((a, b) => a - b);
    let everyZero = nums.every(num => num === target);
    let zeroCheck = ((length > 0));
    //If no values in the array then just return empty array
    if (!zeroCheck) {
        return result;
    }
    else if (zeroCheck && everyZero && nums.length >= 3) {
        result.push([target, target, target]);
        return result;
    }
    // If no siblings then return empty array;
    else {
        for (let i = 0; i < length; i++) {
            let num = nums[i];
            let left = i + 1;
            let right = length - 1;

            if ((num === target) && (left === target) && (right === target)) {
                result.push(num);
            }

            while (left < right) {
                if (num + nums[left] + nums[right] < target) {
                    left++;
                }
                else if (num + nums[left] + nums[right] > target) {
                    right--;
                }
                else {
                    // it must go from smallest to biggest ->
                    let sorted = [num, nums[left], nums[right]];
                    result.push(sorted);
                    left++;
                    right--;
                }
            }
        }
        //Set results on hashmap to remove duplicate entries
        result.forEach((arr) => hashMap[arr.join("|")] = arr);
        //return array with subarrays
        result = Object.keys(hashMap).map((key) => hashMap[key]);
    }
    return result;
};