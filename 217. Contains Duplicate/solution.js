/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let check= new Set();
    for(num of nums){
        if(check.has(num))return true;
        else check.add(num);
    }
   return false; 
};