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
  },
  c: {
    c_1: 'akjf'
  }
}
// function findPath(data, str) {
//   let res = [], path = [];
//   const map = (data, level) => {
//     level++
//     Object.keys(data).forEach(key => {
//       level < path.length ? path = path.slice(0, level).concat(key) : path.push(key)
//       if (typeof data[key] === 'string') {
//         res[data[key]] = path;
//       } else {
//         map(data[key], level)
//       }
//     });
//   }
//   map(data, -1);
//   return res[str] || [];
// }

function findPath (obj, flag, result = []) {
  for (const key of Object.keys(obj)) {
    const newResult = [...result, key]
    if (typeof obj[key] === 'object') {
      return findPath(obj[key], flag, newResult)
    }
    return newResult
  }
}

const result = findPath(obj, 'akjf')
console.log(result)