/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let hashMap = new Map()
  let stack = nums.slice(0)
  for(let num of nums) {
      if (!hashMap.get(num)) {
        hashMap.set(num, 1)
      } else {
        stack = stack.filter(val => val !== num)
        hashMap.set(num, hashMap.get(num) + 1)
      }
  }
  console.log(stack)
};
singleNumber([-1,2,3,4,2,1,1,3,-1])
// @lc code=end

