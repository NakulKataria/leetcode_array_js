/*Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

The test cases are generated so that there will be an answer.*/
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    // Helper to calculate sum after dividing with given divisor
    const computeSum = (divisor) => {
        return nums.reduce((sum, num) => sum + Math.ceil(num / divisor), 0);
    };

    let left = 1;
    let right = Math.max(...nums);
    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = computeSum(mid);

        if (sum <= threshold) {
            answer = mid;
            right = mid - 1; // try smaller divisor
        } else {
            left = mid + 1; // need larger divisor
        }
    }

    return answer;
};