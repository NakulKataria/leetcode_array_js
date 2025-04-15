/*Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // Only start counting if it's the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength;
};
