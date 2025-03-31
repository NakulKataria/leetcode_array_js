/*Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    
    let m = matrix.length, n = matrix[0].length;
    let firstColZero = false;

    // Step 1: Use first row & column as markers
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;  // Mark row
                matrix[0][j] = 0;  // Mark column
            }
        }
    }

    // Step 2: Set cells to zero using markers (excluding first row/column)
    for (let i = m - 1; i > 0; i--) {
        for (let j = n - 1; j > 0; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 3: Handle the first row if needed
    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Step 4: Handle the first column if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};
