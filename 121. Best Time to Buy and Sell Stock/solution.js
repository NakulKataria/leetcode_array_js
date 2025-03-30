/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for (let price of prices) {
        // Update the minimum price if a lower price is found
        if (price < minPrice) {
            minPrice = price;
        }
        // Calculate profit if we sell today and update maxProfit
        else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};