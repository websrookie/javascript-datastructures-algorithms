/**
 * 栈式一种遵从后进先出的（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底
 *
 * 数组和对象都可以实现栈
 * push(element(s)): 添加一个或多个新元素到栈顶
 * pop(): 移除栈顶的元素，同时返回被移除的元素
 * peek(): 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素）
 * isEmpty(): 如果栈里没有返回任何元素就返回 true，否则返回false
 * clear(): 移除栈里的所有元素
 * size(): 返回栈里的元素个数。
 */

class Stack {
  constructor() {
    this.items = []; // {1}
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // 输出为 true

stack.push(5);
stack.push(8);
