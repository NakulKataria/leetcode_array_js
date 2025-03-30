/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.*/
//  Boyer-Moore 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
 
    for (let num of nums) {
     if (count === 0){
         candidate = num;
     }
     count += (num === candidate) ? 1 : -1;
    }
    return candidate;
 };

 //my solution

 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let checkMap= new Map();
    let check= nums.length/2;
    for (let i=0;i<nums.length;i++){
        if(checkMap.hasOwnProperty(nums[i]))checkMap[nums[i]]++;
        else checkMap[nums[i]]=1;
        if (checkMap[nums[i]]>check)return nums[i];
    }
    return ;//solution should not reach here
};