let quickSort = (arr) => {
  quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
  let index;
  if (left < right) {
    index = partion(arr, left, right);
    console.log('pIndex', index);
    if (left < index - 1) {
      quick(arr, left, index - 1);
    }
    if (index < right) {
      quick(arr, index, right);
    }
  }
}

function partion(arr, left, right) {
  let cur = Math.floor((right + left) / 2), i = left, j = right;
  console.log('left->right->cur', left, right, cur)
  while(i <= j) {
    while(arr[i] < arr[cur]) {
      i++;
    }
    while(arr[cur] < arr[j]) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i += 1;
      j -= 1;
    }
  }
  console.log('result', arr);
  return i;
}

let arr = [1,3,2,5,4];
quickSort(arr);
console.log(arr);