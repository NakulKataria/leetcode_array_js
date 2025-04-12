/*Given an integer array nums, return the number of reverse pairs in the array.

A reverse pair is a pair (i, j) where:

0 <= i < j < nums.length and
nums[i] > 2 * nums[j].*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    function mergeSort(start, end) {
        if (start >= end) return 0;

        let mid = Math.floor((start + end) / 2);
        let count = mergeSort(start, mid) + mergeSort(mid + 1, end);

        // Count reverse pairs across the two halves
        let j = mid + 1;
        for (let i = start; i <= mid; i++) {
            while (j <= end && nums[i] > 2 * nums[j]) {
                j++;
            }
            count += (j - (mid + 1));
        }

        // Merge step (standard)
        let temp = [];
        let i = start, k = mid + 1;
        while (i <= mid && k <= end) {
            if (nums[i] <= nums[k]) temp.push(nums[i++]);
            else temp.push(nums[k++]);
        }
        while (i <= mid) temp.push(nums[i++]);
        while (k <= end) temp.push(nums[k++]);

        // Copy sorted values back into original array
        for (let i = start; i <= end; i++) {
            nums[i] = temp[i - start];
        }

        return count;
    }

    return mergeSort(0, nums.length - 1);
};