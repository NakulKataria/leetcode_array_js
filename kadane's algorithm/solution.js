/*Given an integer array arr[]. You need to find the maximum sum of a subarray.*/

class Solution {
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    maxSubarraySum(arr) {
        let max=-Infinity;
        let sum=0;
        // first positive no tak jao
        // let i=0;
        // while(arr[i]<=0 && arr[i]){
        //     max=Math.max(max,arr[i]);
        //     i++;
        // }
        
        //kadane lagao
        for(let i=0;i<arr.length;i++){
            sum=sum+ arr[i];
            max=Math.max(sum,max);
            if(sum<0)sum=0;
        }
        return max;
    }
}