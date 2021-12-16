/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function() {
  this.children = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.children;
  for (const ch of word) {
    if(!node[ch]) {
      node[ch] = {};
    }
    node = node[ch];
  }
  node.isEnd = true;
  console.log(this.children)
};

/**
 * @param {string} word
 * @return {boolean}
 */
 Trie.prototype.searchPrefix = function(prefix) {
  let node = this.children;
  for(const ch of prefix) {
    if(!node[ch]) {
      return false;
    }
    node = node[ch]
  }
  return node;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.searchPrefix(word);
  return node !== undefined && node.isEnd !== undefined;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.searchPrefix(prefix);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
 Trie.prototype.result = function(prefix) {
  let root = this.searchPrefix(prefix);
  let res = [];
  let str = `${prefix}`;
  const getChar = (char) => {
    Object.keys(char).forEach(key => {
      if(key !== 'isEnd') {
        str += key;
        getChar(this.searchPrefix(str));
      } else {
        res.push(str);
        str = `${prefix}`;
      }
    })
  }
  getChar(root);
  return res;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var obj = new Trie();
obj.insert('apple');
obj.insert('abbandon');
const b = obj.result('a');
// @lc code=end

