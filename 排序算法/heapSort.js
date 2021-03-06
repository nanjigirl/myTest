function heapSort(items) {
  // 构建大顶堆
  buildHeap(items, items.length-1)
  console.log('init-->', items)
  // 设置堆的初始有效序列长度为 items.length - 1
  let heapSize = items.length - 1
  for (var i = items.length - 1; i > 1; i--) {
      console.log(`${heapSize}-->`);
      // 交换堆顶元素与最后一个有效子元素
      swap(items, 1, i);
      // 有效序列长度减 1
      heapSize --;
      // 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)
      heapify(items, heapSize, 1);
      console.log(items);
  }
  return items;
}

// 原地建堆
// items: 原始序列
// heapSize: 有效序列长度
function buildHeap(items, heapSize) {
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(heapSize/2); i >= 1; --i) {
      heapify(items, heapSize, i);
  }
}
function heapify(items, heapSize, i) {
  // 自上而下式堆化
  while (true) {
      var maxIndex = i;
      if(2*i <= heapSize && items[i] < items[i*2] ) {
          maxIndex = i*2;
      }
      if(2*i+1 <= heapSize && items[maxIndex] < items[i*2+1] ) {
          maxIndex = i*2+1;
      }
      if (maxIndex === i) break;
      swap(items, i, maxIndex); // 交换
      i = maxIndex;
  }
}
function swap(items, i, j) {
  let temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

// 测试
var items = [1, 9, 2, 8, 3, 7, 4, 6, 5]
heapSort(items)