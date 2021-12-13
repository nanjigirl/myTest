/**
 * 洗牌算法
 * 以数字集合 1, 2 和 3 初始化数组。
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 * 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
 * solution.shuffle();
 * 重设数组到它的初始状态[1,2,3]。
 * solution.reset();
 * 随机返回数组[1,2,3]打乱后的结果。
 * solution.shuffle();
 */
let Solution = function (nums) {
  this.nums = nums;
}

Solution.prototype.reset = function() {
  return this.nums;
}

Solution.prototype.shuffle = function() {
  let res = [...this.nums];
  let n = res.length;
  for(let i = n - 1; i >= 0; i--) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [res[randIndex], res[i]] = [res[i], res[randIndex]];
  }
  return res;
}

const a = new Solution([1,2,3])
const b = a.shuffle()
console.log(b);