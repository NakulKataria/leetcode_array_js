/*Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.*/

/*let n = nums.length;
    for(let i=0; i<n; i++) {
        let index = Math.abs(nums[i]) -1;
        nums[index] = -Math.abs(nums[index]);
    }
    let ans = [];
    for(let i=0; i<n; i++) {
        if(nums[i] > 0) ans.push(i+1)
    }
    return ans;*/
    // -ve marking approach

    /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i=0;
    while(i<nums.length){
        let correctIndex= nums[i]-1;
        if(nums[correctIndex]!== nums[i]){
            [nums[correctIndex] , nums[i]]=[nums[i] , nums[correctIndex]];
        }else{
        i++;
        }
    }
    let res=[];
    for(let i=1; i<=nums.length;i++){
        if(i!== nums[i-1] ) res.push(i);
    }
    return res;
};
