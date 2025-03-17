//
/* @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const count ={};
    for(let i=0;i<nums.length; i++){
       count[nums[i]]=(count[nums[i]]  ||  0)+1;
    }
    for (const value in count)
    {
        if(count[value]%2!==0) return false;
    }


    return true;
};