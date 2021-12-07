class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    console.log(this.count);
    this.count--;
    console.log(this.count);
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  toString() {
    if(this.isEmpty()) {
      return '';
    }
    let objString = '';
    for (let i = 0; i < this.count; i++) {
      objString += `${this.items[i]}`;
    }
    return objString;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.toString());