/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const hashMap = new Map();
  let res;
  for (let i of nums) {
    if (!hashMap.get(i)) {
      hashMap.set(i, 1)
    } else {
      hashMap.set(i, hashMap.get(i) + 1)
      if (hashMap.get(i) > Math.floor(nums.length / 2)) {
        res = i;
      }
    }
  }
  return res;
};
console.log(majorityElement([3,2,3]))
// @lc code=end

