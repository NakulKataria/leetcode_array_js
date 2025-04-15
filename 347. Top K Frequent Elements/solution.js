/*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();

    // Step 1: Count frequencies
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Convert to array and sort by frequency
    const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    // Step 3: Extract top k elements
    return sorted.slice(0, k).map(entry => entry[0]);
};