var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array for optimized binary search
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let x = nums1.length;
    let y = nums2.length;
    let low = 0, high = x;
    
    while (low <= high) {
        //partition set kre (+1 dono odd even case handle kr lega)
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        // Edge cases: If partition is at 0 or end, use -Infinity or +Infinity
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX === x) ? Infinity : nums1[partitionX];

        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY === y) ? Infinity : nums2[partitionY];

        // Check if we have found the correct partition
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // If total number of elements is even
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else { // If total number of elements is odd
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // Move towards the left in nums1
            high = partitionX - 1;
        } else {
            // Move towards the right in nums1
            low = partitionX + 1;
        }
    }
   
};
