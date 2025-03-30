/*Given an integer array nums, find the subarray with the largest sum, and return its sum.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;  // Stores the max subarray sum
    let currentSum = 0;      // Tracks the sum of the current subarray

    for (let num of nums) {
        currentSum += num;      // Expand the subarray by adding current number
        maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is greater

        if (currentSum < 0) {   // If sum goes negative, reset currentSum
            currentSum = 0;
        }
    }
    return maxSum;
    
};