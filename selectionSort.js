function selectionSort(arr) {
  let length = arr.length, indexMin;
  for(let i = 0; i < length - 1; i++) {
    indexMin = i;
    for(let j = i; j < length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
}

let arr = [1,3,2,5,4];
selectionSort(arr);
console.log(arr);