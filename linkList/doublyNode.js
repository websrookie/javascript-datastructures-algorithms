class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
    this.tail = null;
  }

  insert(element, index) {
    if (index < 0 || index > this.count) return false;
    const node = new Node(element);
    let current = this.head;

    if (index === 0) {
      if (this.head === null) {
        this.head = null;
        this.tail = null;
      } else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
    } else if (index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index - 1); // {9}
      current = previous.next; // {10}
      node.next = current; // {11}
      previous.next = node; // {12}
      current.prev = node; // {13} 新增的
      node.prev = previous; // {14} 新增的
    }

    this.count++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index > this.count) return undefined;

    let current = this.head;

    if (index === 0) {
      this.index === 0;

      if (this.count === 1) {
        this.tail = undefined;
      } else {
        this.head.prev = undefined;
      }
    } else if (index === this.count - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = undefined;
    } else {
      current = this.getElementAt(index);
      const previous = current.prev;
      // 将 previous 与 current 的下一项链接起来——跳过 current
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.count--;
    return current.element;
  }
}
