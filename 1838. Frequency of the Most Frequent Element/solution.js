/*The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
  let left = 0, maxFreq = 0, sum = 0;

  for (let right = 0; right < nums.length; right++) {
      sum += nums[right];

      // Condition: If cost exceeds k, move left pointer
      while ((right - left + 1) * nums[right] - sum > k) {
          sum -= nums[left];  // Remove the leftmost element from sum
          left++;  // Shrink the window
      }

      // Update the max frequency
      maxFreq = Math.max(maxFreq, right - left + 1);
  }

  return maxFreq;
};