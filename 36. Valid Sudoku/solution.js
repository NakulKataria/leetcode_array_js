/*Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

function isValidSudoku(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let num = board[r][c];
            if (num === '.') continue;

            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            
            if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }
            
            rows[r].add(num);
            cols[c].add(num);
            boxes[boxIndex].add(num);
        }
    }
    return true;
}