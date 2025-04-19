/*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let ans = 0;
    let maxLeft = 0, maxRight = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                ans += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                ans += maxRight - height[right];
            }
            right--;
        }
    }
    return ans;
};