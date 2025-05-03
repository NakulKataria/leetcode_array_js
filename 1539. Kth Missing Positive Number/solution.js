/*Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let left = 0, right = arr.length - 1;

    // Binary search to find the first index where missing numbers >= k
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let missing = arr[mid] - (mid + 1);

        if (missing < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // After the loop, left is the number of elements in arr before the kth missing number
    return left + k;
};