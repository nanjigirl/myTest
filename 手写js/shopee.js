const obj = {
  a: {
    a_1: {
      a_1_1: 'abc',
      a_1_2: 'def'
    }
  },
  b: {
    b_1: {
      b_1_1: 'ghi',
      b_1_2: 'xyz'
    }
  }
}
function findPath(data, str) {
  let res = [], path = [];
  const map = (data, level) => {
    level++
    Object.keys(data).forEach(key => {
      level < path.length ? path = path.slice(0, level).concat(key) : path.push(key)
      if (typeof data[key] === 'string') {
        res[data[key]] = path;
      } else {
        map(data[key], level)
      }
    });
  }
  map(data, -1);
  return res[str] || [];
}

const result = findPath(obj, 'xyz')
console.log(result)