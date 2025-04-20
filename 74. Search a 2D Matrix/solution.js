/* You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //first apply binary search to find row then for target
  let m =matrix.length-1;
  let top= 0;
  let bottom=m;
  while( top<=bottom){
    let medium=Math.floor((top+bottom)/2);
    if(matrix[medium][0]<=target && matrix[medium][matrix[medium].length-1]>=target){
        let left=0;
        let right=matrix[medium].length-1;
        while(left<=right){
            let mid=Math.floor((right+left)/2);
            if(matrix[medium][mid]===target)return true;
            else if(matrix[medium][mid]<target){
                left=mid+1;
            }
            else{
                right=mid-1;
            }
        }
        break;

    }
    else if(target>matrix[medium][matrix[medium].length-1]){
        top=medium+1;
    }
    else{
        bottom=medium-1;
    }
  }
  return false;  
};
