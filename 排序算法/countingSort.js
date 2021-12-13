// 计数排序
function countingSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const maxValue = findMaxValue(arr);
  console.log(maxValue);
  let bucket = new Array(maxValue+1),
        sortedIndex = 0,
        arrLen = arr.length,
        bucketLen = maxValue + 1;

  // 存储
  for(let i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++
  }
  console.log(bucket);
  // 将数据从bucket写入arr中
  for(let j = 0; j <= bucketLen; j++) {
    while(bucket[j]-- > 0) {
      arr[sortedIndex++] = j;
    }
  }
  return arr;
}

function findMaxValue(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  return max;
}

// 桶排序
let bucketSort = (arr) => {
  let bucket = [], res = []
  arr.forEach((value, key) => {
      // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
      if(!bucket[value]) {
          bucket[value] = [key]
      } else {
          bucket[value].push(key)
      }
  })
  // 遍历获取出现频率
  for(let i = 0;i <= bucket.length - 1;i++){
      if(bucket[i]) {
          res.push(...bucket[i])
      }
}
return res
}

const arr = [2,4,6,6,8,8,8,11,2,5,3,1]
countingSort(arr);
console.log(arr);
const arr1 = bucketSort(arr);
console.log(arr1);