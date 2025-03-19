/**
 * @param {number[]} nums
 * @return {number}
 */
function longestNiceSubarray(nums) {
    let ans=0;
    let right=0, left=0;
    let current=0, xor=0;
    while(right<nums.length){
       current+=nums[right];
       xor^=nums[right];
       while(current!=xor){
           current-=nums[left];
           xor^=nums[left];
           left++;
       }
       ans=Math.max(ans,right-left+1);
       right++;
    }
     return ans;
   }