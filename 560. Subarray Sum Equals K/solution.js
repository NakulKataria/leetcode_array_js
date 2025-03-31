/*Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefixSumMap = new Map();
    prefixSumMap.set(0, 1); // To handle cases where subarray starts from index 0
    let prefixSum = 0;
    let count = 0;

    for (let num of nums) {
        prefixSum += num;

        // Check if (prefixSum - k) exists in the hashmap
        if (prefixSumMap.has(prefixSum - k)) {
            count += prefixSumMap.get(prefixSum - k);
        }

        // Update the hashmap with the current prefixSum
        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
    }

    return count;
};
