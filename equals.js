
/**
 * 实现（a == 1 && a == 2 && a == 3）
 */

// 解法一: 改写toString()
const a = {
  i: 0,
  toString() {
    return ++this.i;
  }
}

// 解法二: defineProperty
let i = 0;
Object.defineProperty(window, 'a', {
  get() {
    return ++i;
  }
})

// 解法三: join， thift
const a = [1, 2, 3]
a.join = a.shift;

if (a == 1 && a == 2 && a==3) {
  console.log('满足条件')
}