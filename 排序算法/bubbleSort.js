function swrap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        flag = true;
      }
    }
    if (!flag) break;
  }
}

let arr = [1,3,2,5,4];
bubbleSort(arr);
console.log(arr);