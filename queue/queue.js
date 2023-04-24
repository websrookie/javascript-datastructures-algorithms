/**
 * 队列是遵循先进先出（FIFO，也称为先来先服务）原则上午一组有序的项。队列在尾部添加新元素，并从顶部移除新元素。最新添加的元素必须排在队列的末尾
 * enqueue(element(s)): 向队尾部添加一个或多个新的项
 * dequeue(): 移除队列的第一项（即排在队列最前面的项）并返回新的项
 * peek(): 返回队列中第一个元素--最先被添加，也将是最先被移除的元素。队列不做任何改动（不移除元素，只返回元素信息--元 Stack 类的 peek 方法非常类似）该方法在其他语言中也可以叫做 front 方法
 * isEmpty(): 如果队列中不包含任何元素，返回 true，否则返回 false
 * size(): 返回队列包含的元素个数
 */

module.export = class Queue {
  constructor() {
    this.item = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(...elements) {
    elements.forEach(element => {
      this.item[this.count] = element;
      this.count++;
    });
  }

  dequeue() {
    if (this.isEmpty) return undefined;

    const result = this.item[this.lowestCount];
    delete this.item[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty) return undefined;

    return this.item[this.lowestCount];
  }

  isEmpty() {
    return this.count === 0;
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
    if (this.isEmpty()) return '';

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
};
