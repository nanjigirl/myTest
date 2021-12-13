function ListNode(val) {
     this.val = val;
     this.next = null;
}

const head = new ListNode(1);
const tail = new ListNode(2);
head.next = tail;
tail.next = head;

// console.log(head);

var hasCycle = function(head) {
  let hash = new Map();
  let pos = -1;
  while (head) {
      if (hash.has(head)) {
          pos = 1;
      }
      head = head.next;
  }
  return pos;
};
var a = hasCycle(head);
console.log(a);