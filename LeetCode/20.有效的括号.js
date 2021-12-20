/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const stack = [];
  const pairs = new Map([
      [')', '('],
      ['}', '{'],
      [']','[']
  ])
  for(let ch of s) {
      if(pairs.get(ch)) {
        console.log(stack[stack.length - 1], pairs.get(ch));
          if (!stack.length || stack[stack.length - 1] !== pairs.get(ch)) {
              return false;
          }
          stack.pop()
      } else {
          stack.push(ch);
      }
  }
  return !stack.length
};

const str = "{}[]()";
console.log(isValid(str));

