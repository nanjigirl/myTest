class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    if (this.isEmpty) {
      return undefined;
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    console.log(this.count);
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  peekBack() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  addFront(element) {
    if (this.isEmpty()){
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    }else {
      for(let i = this.count; i > 0; i--) {
        this.item[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = '';
    for(let i = this.lowestCount; i < this.count; i++) {
      objString += `${this.items[i]}`
    }
    return objString;
  }
}