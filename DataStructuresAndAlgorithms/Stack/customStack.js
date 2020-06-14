/*
 * 基于对象创建一个stack类
 * 1、向栈中插入元素
 * 2、判断栈是否为空及栈的数量
 * 3、
 */

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(e) {
    this.items[this.count] = e;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const res = this.items[this.count];
    delete this.items[this.count];
    return res;
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  peek() {
    if (this.count === 0) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.count = 0;
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objStr = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objStr = `${objStr},${this.items[i]}`;
    }
    return objStr;
  }
}

const myStack = new Stack();
myStack.push('a');
myStack.push('b');

console.log('myStack :>> ', myStack);
console.log('myStack.peek() :>> ', myStack.peek());
console.log('myStack.toString()', myStack.toString());
console.log('pop :>> ', myStack.pop());
console.log('myStack.toString()', myStack.toString());

module.export = {
  Stack,
};
