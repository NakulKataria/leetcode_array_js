/*Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let xor=0;
    let arr=0;
    for(let i=1;i<=nums.length;i++){
        arr^=nums[i-1];
        xor^=i;

    }

    return xor^arr;
    
};