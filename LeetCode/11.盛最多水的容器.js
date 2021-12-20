/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0;
  for(let l = 0,r = height.length - 1; l < r;) {
      res = Math.max(res, Math.min(height[l], height[r]) * (r - l));
      if(height[l] < height[r]) {
          l++;
      } else {
          r--;
      }
  }
  return res;
};
maxArea([1,8,6,2,5,4,8,3,7])
// @lc code=end

