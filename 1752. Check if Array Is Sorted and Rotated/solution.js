/*Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let countBreaks = 0;
let n = nums.length;

for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
        countBreaks++;
    }
    if (countBreaks > 1) return false; // More than 1 decreasing pair
}
return true;

};