function mergeSort(arr) {
  let array = mergeSortRec(arr);
  return array;
}

function mergeSortRec(arr) {
  let length = arr.length;
  if(length === 1) {
    return arr;
  }
  let mid = Math.floor(length / 2),
  left = arr.slice(0, mid),
  right = arr.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(left, right) {
  console.log('left->right', left, right);
  let result = [], ileft = 0, iright = 0;
  while(ileft < left.length && iright < right.length) {
    if(left[ileft] < right[iright]) {
      result.push(left[ileft++])
    } else {
      result.push(right[iright++])
    }
  }
  while(ileft < left.length) {
    result.push(left[ileft++])
  }
  while(iright < right.length) {
    result.push(right[iright++])
  }
  console.log('result', result)
  return result;
}

let arr = [1,3,2,5,4];
console.log(mergeSort(arr));