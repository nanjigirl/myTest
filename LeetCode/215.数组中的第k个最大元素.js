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
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

function quickSelect(a, l, r, index) {
  let q = randomPartition(a, l, r);
  console.log(a, q, index)
  if (q == index) {
    return a[q];
  } else {
    return q < index
      ? quickSelect(a, q + 1, r, index)
      : quickSelect(a, l, q - 1, index);
  }
}

function randomPartition(a, l, r) {
  console.log(l, r)
  let i = Math.floor(Math.random() * (r - l + 1)) + l;
  swap(a, i, r);
  console.log('random',a, i)
  return partition(a, l, r);
}

function partition(a, l, r) {
  let x = a[r],
    i = l - 1;
  for (let j = l; j < r; ++j) {
    if (a[j] <= x) {
      swap(a, ++i, j);
      console.log(`part->l${i}`,a, j);
  }
  }
  console.log(`part->l${i}`,a);
  swap(a, i + 1, r);
  console.log('part->r',a);
  return i + 1;
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

const arr = [3,2,1,5,6,4], k = 2;
// const arr = [2, 1], k = 2;
const res = findKthLargest(arr, k);
// console.log(res);
