var lengthOfLongestSubstring = function(s) {
  let result = [], prev = [];
  for (let i = 0; i < s.length; i++) {
      console.log(result.includes(s[i]));
      if (result.includes(s[i])) {
          prev = result.length - prev.length ? prev : result;
          result = [];
          console.log(prev);
          continue;
      } else {
          result.push(s[i]);
      }
  }
  console.log(result);
  return result.length;
};

