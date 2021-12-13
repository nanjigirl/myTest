// 插入排序
function insertionSort(arr) {
  let len = arr.length;
  let temp;
  for(let i = 1; i < len; i++) {
    let j = i;
    temp = arr[i];
    while(j > 0 && temp > arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
}

// 希尔排序
function shellSort(arr) {
  let len = arr.length;
  for(let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i;
      let current = arr[i];
      while(j - gap > 0 && current > arr[j - gap]) {
        arr[j] = arr[j = gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}