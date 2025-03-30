/*Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.*/
// using three pointer and dutch flag algo
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
    let low=0,mid=0, high=arr.length-1;
    while(mid<=high){
        if(arr[mid]===0){
            [arr[low],arr[mid]]= [arr[mid],arr[low]];
            low++;
            mid++;
        }
        else if(arr[mid]===2){
            [arr[high],arr[mid]]= [arr[mid],arr[high]];
            high--;
            

        }
        else mid++;
    }
    return arr;
};