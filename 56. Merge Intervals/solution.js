/*Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    // Step 1: Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];

    // Step 2: Iterate through the sorted intervals
    for (let i = 0; i < intervals.length; i++) {
        // If the merged array is empty or no overlap
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            // Add the current interval as is
            merged.push(intervals[i]);
        } else {
            // There is overlap, so merge intervals by updating the end time
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }

    return merged;
};