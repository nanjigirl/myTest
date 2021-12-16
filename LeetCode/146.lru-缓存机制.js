/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
class DoubleLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.usedSpace = 0;
  this.hashMap = {};
  this.head = new DoubleLinkedListNode(null, null);
  this.tail = new DoubleLinkedListNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.isFull = function() {
  return this.usedSpace === this.capacity;
}

LRUCache.prototype.removeNode = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = null;
  node.next = null;
  return node;
}

LRUCache.prototype.addToHead = function(node) {
  const head = this.head.next;
  node.next = head;
  head.prev = node;
  node.prev = this.head;
  this.head.next = node;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (key in this.hashMap) {
    const node = this.hashMap[key];
    this.addToHead(this.removeNode(node));
    return node.value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(key in this.hashMap) {
    const node = this.hashMap[key];
    node.value = value;
    this.addToHead(this.removeNode(node));
  } else {
    if (this.isFull()) {
      const node = this.tail.prev;
      delete this.hashMap[node.key];
      this.removeNode(node);
      this.usedSpace--;
    }
    const node = new DoubleLinkedListNode(key, value);
    this.hashMap[key] = node;
    this.addToHead(node);
    this.usedSpace++;
  }
};

const obj = new LRUCache(2)
console.log(obj.get(2))
obj.put(1,1)
obj.put(2,2)
console.log(obj.get(1))
obj.put(3,3)
console.log(obj.get(2))
obj.put(4,4)
obj.get(obj.get(1))
obj.get(obj.get(3))
console.log(obj.get(4))
