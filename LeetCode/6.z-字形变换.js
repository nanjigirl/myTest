/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if(numRows === 1) {
      return s
  }
  let len = Math.min(s.length, numRows)
  let loc = 0, rows = new Array(len).fill('')
  let down = false
  for (const ch of s) {
      rows[loc] += ch
      if (loc == 0 || loc == numRows - 1) {
          down = !down
      }
      loc += down  ? 1 : -1
  }
  console.log(rows)
  return rows.join('')
};

convert('PAYPALISHIRING', 3)
// @lc code=end

