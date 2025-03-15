/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//checks weather the robbery is possible for mid as capability or not
function ifPossible(mid,nums,k){
    let count=0;
    for (let i=0; i<nums.length; i++){
        if (nums[i]<=mid){
            count++;
            i++;//skips next house
        }
        if(count>=k) return true;
    }
    return false;
}

var minCapability = function(nums, k) { 
   let left =Math.min(...nums), right= Math.max(...nums);//pointers for bs
   let ans=0;
   //binary search for narrowing search space
   while(left<=right){
    let mid=Math.floor((left+right)/2);
    if(ifPossible(mid,nums,k)){
        ans=mid;
        right=mid-1;

    }
    else {
        left=mid+1;    }
       
   }

   return ans;
};