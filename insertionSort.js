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