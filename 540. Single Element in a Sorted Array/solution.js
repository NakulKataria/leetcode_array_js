/*You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n=nums.length-1;
    let low=0, high =n;
    if(n===0)return nums[0];
    if(nums[0]!==nums[1])return nums[0];
    if(nums[n]!==nums[n-1])return nums[n];
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(nums[mid]!=nums[mid-1] && nums[mid]!=nums[mid+1]) return nums[mid];
        //search space reduction jis side odd no of 
        if((nums[mid]===nums[mid-1]&& mid%2===1)||(nums[mid]===nums[mid+1] && mid%2===0)){
            low=mid+1;
        }
        else high=mid-1;

    }
    return;
};