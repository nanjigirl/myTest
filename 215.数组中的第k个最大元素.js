/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  return quickSort(nums, 0, nums.length - 1, nums.length - k);
};

function quickSort(arr, left, right, index) {
  let q = randomPartion(arr, left, right);
  console.log(arr, q, index)
  if (q === index) {
      return arr[q];
  } else {
      return q < index ? quickSort(arr, q + 1, right, index) : quickSort(arr, left, q - 1, index);
  }
}

function randomPartion(arr, left, right) {
  let cur = Math.floor(Math.random() * (right - left + 1)) + left;
  swap(arr, cur, right);
  return partion(arr, left, right);
}

function partion(arr, left, right) {
  let x = arr[right], i = left - 1;
  for (let j = left; j < right; ++j) {
    if(arr[j] <= arr[x]) {
      swap(arr, ++i, j)
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// const arr = [3,2,1,5,6,4], k = 2;
const arr = [2,1], k = 2;
const res = findKthLargest(arr, k);
console.log(res);