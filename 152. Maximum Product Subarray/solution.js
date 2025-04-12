/*Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        // If current number is negative, swap max and min
        if (curr < 0) {
            [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
        }

        maxSoFar = Math.max(curr, curr * maxSoFar);
        minSoFar = Math.min(curr, curr * minSoFar);

        result = Math.max(result, maxSoFar);
    }

    return result;
};

