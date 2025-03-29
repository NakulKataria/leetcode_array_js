/*Given a binary array nums, return the maximum number of consecutive 1's in the array.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max=0,count=0;
    for(let i=0; i<nums.length;i++){
        if(nums[i]==1)count++;
        else{
            max=Math.max(max,count);
            count=0;
        }
    }
    max=Math.max(max,count);
  return max;  
    
};

