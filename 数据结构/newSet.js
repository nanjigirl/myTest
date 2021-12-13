class Set {
  constructor() {
    this.items = {};
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
}

const set = new Set();
set.add(1);
set.add(2);
console.log(set);