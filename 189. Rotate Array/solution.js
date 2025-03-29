/*Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k > n

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Reverse the whole array
    reverse(0, n - 1);
    // Reverse first k elements
    reverse(0, k - 1);
    // Reverse last n-k elements
    reverse(k, n - 1);
    
};