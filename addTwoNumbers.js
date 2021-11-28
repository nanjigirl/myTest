var addTwoNumbers = function(l1, l2) {
  if (!Array.isArray(l1) || !Array.isArray(l2)) {
      return;
  }
  const totalLen = l1.length - l2.length ? l1.length : l2.length;
  let result = [];
  let flag = 0;
  for(let i = 0; i < totalLen; i++) {
      const sumNums = l1[i] + (l2[i] || 0) + flag;
      if(sumNums >= 10) {
          flag = 1;
          result.push(sumNums%10);
      } else {
          flag = 0;
          result.push(sumNums);
      }
  }
  return result;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));