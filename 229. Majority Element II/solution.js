/*Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    const result = [];
    const n = nums.length;
    const threshold = Math.floor(n / 3);

    let count = 1;

    for (let i = 1; i <= n; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            if (count > threshold) {
                result.push(nums[i - 1]);
            }
            count = 1;
        }
    }

    return result;
};
