/*You are given an integer array bloomDay, an integer m and an integer k.

You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.*/

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

// Helper function to check if it's possible to make m bouquets on 'day'
function possible(arr, day, m, k) {
    let cnt = 0;       // To count consecutive bloomed flowers
    let noOfB = 0;     // To count bouquets formed

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= day) {
            cnt++;
            if (cnt === k) {
                noOfB++;
                cnt = 0;
            }
        } else {
            cnt = 0; // Reset if flower hasn't bloomed
        }
    }

    return noOfB >= m;
}

var minDays = function(bloomDay, m, k) {
    const n = bloomDay.length;

    if (m * k > n) return -1; // Not enough flowers

    // Find min and max bloom days
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);

    // Binary search for minimum day
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (possible(bloomDay, mid, m, k)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
};