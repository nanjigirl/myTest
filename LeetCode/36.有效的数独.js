/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  console.log(rows, columns, subboxes);
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const c = board[i][j];
          if (c !== '.') {
              const index = c.charCodeAt() - '0'.charCodeAt() - 1;
              console.log(c.charCodeAt(), '0'.charCodeAt())
              console.log(index)
              rows[i][index]++;
              columns[j][index]++;
              subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
              if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                  return false;
              }
          }
      }
  }
  console.log(rows, columns, subboxes)
  return true;
};
const arr = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
isValidSudoku(arr)
