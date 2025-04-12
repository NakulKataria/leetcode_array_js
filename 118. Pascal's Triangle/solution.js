/*Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const memo =[[1]];
    for(let i=1; i < numRows ; i++ ){
         memo[i]=[1];
          for(let j=1;j<i;j++){
             memo[i][j]=memo[i-1][j-1] + memo[i-1][j];//key formula for dp

            }
            memo[i][i]=1;
      
    }

return memo;
    
};