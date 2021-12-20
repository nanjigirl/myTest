/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  const data = mergeNums(nums1, nums2);
  return data.length % 2 ? data[Math.floor(data.length / 2)] : (data[data.length / 2] + data[data.length / 2 - 1]) / 2;
};

function mergeNums(nums1, nums2) {
  let res = [], l = 0, r = 0;
  while(l < nums1.length && r < nums2.length) {
      if(nums1[l] < nums2[r]) {
          res.push(nums1[l++]);
      } else {
          res.push(nums2[r++]);
      }
  }
  while(l < nums1.length) {
      res.push(nums1[l++])
  }
  while(r < nums2.length) {
      res.push(nums2[r++])
  }
  return res;
}
findMedianSortedArrays([1,3], [2])

