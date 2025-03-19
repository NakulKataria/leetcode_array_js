/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count=0;
    let n= nums.length;
    for (let i=0;i<n-2 ;i++){
        if (nums[i]==0 ){
            nums[i]=nums[i]^1;
            nums[i+1]=nums[i+1]^1;
            nums[i+2]=nums[i+2]^1;

            count++;
        }
       
    }
    if (nums[n-1]===0 || nums[n-2]===0)return -1;
    return count;
};