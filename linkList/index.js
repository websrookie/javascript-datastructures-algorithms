class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 *  push(element)：向链表尾部添加一个新元素
 * insert(element, position)：向链表的特定位置插入一个新元素。
 * getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
 * remove(element)：从链表中移除一个元素。
 * indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回-1。
 * removeAt(position)：从链表的特定位置移除一个元素。
 * isEmpty()：如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
 * size()：返回链表包含的元素个数，与数组的 length 属性类似。
 * toString()：返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继
承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;

      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }

      return node;
    }

    return undefined;
  }

  push(element) {
    // 头部为 null
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
      return;
    }

    // 头部不为 null
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;

    this.count++;
  }

  removeAt(index) {
    // 检查越界值
    if (index < 0 || index > this.count) return undefined;

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }

    this.count--;
    return current.element;
  }

  insert(element, index) {
    // 检查越界值
    if (index < 0 || index > this.count) return false;

    const node = new Node(element);

    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      previous.next = node;
      node.nextSibling = current;
    }

    this.count++;
    return true;
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current !== null; i++) {
      if (element === current.element) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);

    return this.removeAt(index);
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.head == null) return '';

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }
}
