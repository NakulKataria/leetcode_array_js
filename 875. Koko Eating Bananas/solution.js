/*Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.*/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // Helper function to calculate the total hours needed for a given eating speed k//yehi logic h basically question ka
    const totalHours = (k) => {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / k);  // Calculate hours for each pile
        }
        return hours;
    };

    // Binary search on solution lagaege ,kyoki after a particular k sab k acceptable h jisme se hume smallest chahiye
    let left = 1;
    let right = Math.max(...piles);  // Maximum bananas in any pile

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // agar jyada time lera h to mid speed badao
        if (totalHours(mid) > h) {
            left = mid + 1;
        } else {//kam time lera h to kam karo tab tak kro jab tak loop khata na ho
            right = mid;  
        }
    }

    return left;  // Left will be the minimum k that satisfies the condition
};