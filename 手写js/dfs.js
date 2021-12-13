const data = [
  {
      name: 'a',
      children: [
          { name: 'b', children: [{ name: 'e' }] },
          { name: 'c', children: [{ name: 'f' }] },
          { name: 'd', children: [{ name: 'g' }] },
      ],
  },
  {
      name: 'a2',
      children: [
          { name: 'b2', children: [{ name: 'e2' }] },
          { name: 'c2', children: [{ name: 'f2' }] },
          { name: 'd2', children: [{ name: 'g2' }] },
      ],
  }
]

 /**
  * DFS深度优先
  * 栈+递归
  */
function getName(data) {
  let result = [];
  const map = data => {
    data.forEach(item => {
      result.push(item.name);
      item.children && map(item.children);
    });
  }
  map(data);
  return result.join(',');
}

/**
 * 广度优先
 * 队列
 */

function getName2(data) {
  let result = [];
  let queue = data
  while(queue.length > 0) {
    [...queue].forEach(item => {
      queue.shift();
      result.push(item.name);
      item.children && queue.push(...item.children);
    })
  }
  return result.join(',');
}

// console.log(getName(data));
console.log(getName2(data));