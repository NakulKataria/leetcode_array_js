/*You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let n=nums.length;
    let r=0,l=0;
    let deque= new Deque();
    let output= new Array(n-k+1);

    while(r<n){
        //condition for index entry in dequw
        while(nums[deque.back()]<nums[r] && deque.size()){
            deque.popBack();
        }
        deque.pushBack(r);
        //condition of pushing window forward
        if(l>deque.front()){
            deque.popFront();
        }
        //codition jo pehli window ban ne se pehle pichli condition nhi chalne deta
        if(r+1>=k){
            output[l]=nums[deque.front()];
            l++;
        
        }
        r++;
    }
    return output;
};