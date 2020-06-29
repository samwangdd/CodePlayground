// import { defaultEquals } from '../utils/index';
// import { Node } from './models/LinkedListModels';

/**
 * 链表节点
 *
 * @export
 * @class Node
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

function defaultEquals(a, b) {
  return a === b;
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === undefined) {
      this.head = node;
    } else {
      current = this.head;
      // 如果next不为undefined就一直循环赋值
      while (current.next !== undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
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

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        /* let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        } */
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}

const list = new LinkedList();
list.push(15);
list.push(10);
// list.push(5);
console.log('list :>> ', list);
// console.log('list.removeAt(1) :>> ', list.removeAt(1));
// console.log('list2 :>> ', list);
list.insert(9, 1);
console.log('list3 :>> ', list);
list.insert(8, 2);
console.log('list4 :>> ', list);
