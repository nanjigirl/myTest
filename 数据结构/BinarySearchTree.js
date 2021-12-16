class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let node = new Node(val, null, null);
    if(this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.val < root.val) {
      if(root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      if(root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node)
      }
    }
  }
}

const root = new BinarySearchTree();
const arr = [4,2,7,1,3,6,9];
for(const key of arr) {
  root.insert(key);
}
console.log(root)