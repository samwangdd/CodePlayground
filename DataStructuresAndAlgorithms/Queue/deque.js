class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  // 在队列前面插入元素
  addFront(e) {
    if (this.isEmpty()) {
      this.addBack(e);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount];
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      // this.lowestCount = 0;
      this.items[0] = e;
    }
  }
  // 在队列尾部插入元素
  addBack(e) {
    this.items[this.count] = e;
    this.count++;
  }
  // 判断队列是否为空
  isEmpty() {
    return this.size() === 0;
  }
  // 判断队列的长度
  size() {
    return this.count - this.lowestCount;
  }
  // 从队列头部移除元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  // 从队列尾部移除第一个元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  // 返回队列头部第一个元素，不会改变队列
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  // 返回队列尾部第一个元素，不会改变队列
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
}

const myDeque = new Deque();
myDeque.addBack('3');
console.log('myDeque :>> ', myDeque);
myDeque.addFront('2');
console.log('myDeque :>> ', myDeque);
console.log('myDeque.peekBack() :>> ', myDeque.peekBack());
console.log('myDeque.peekFront() :>> ', myDeque.peekFront());
console.log('myDeque.removeFront() :>> ', myDeque.removeFront());
console.log('myDeque :>> ', myDeque);
console.log('myDeque.removeBack() :>> ', myDeque.removeBack());
console.log('myDeque :>> ', myDeque);
console.log('myDeque.size() :>> ', myDeque.size());
console.log('myDeque.lowest :>> ', myDeque.lowestCount);

/**
 * 模拟击鼓传花游戏
 *
 * @param {Array} list 参与游戏的人
 * @param {Number} num 传递的次数
 * @returns {Object} {elimitated: 被淘汰者, winner: 获胜者,}
 */
function hotPotato(list, num) {
  const queue = new Deque();
  const elimitatedList = []; // 被淘汰者

  for (let i = 0; i < list.length; i++) {
    queue.addBack(list[i]); // 1.将参与游戏的人，放置在队列中
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.addBack(queue.removeFront()); // 2.如果传递次数小于num，就将当前（队列第一个）元素，移到队列尾部，实现“围成一个圈”的循环
    }
    elimitatedList.push(queue.removeFront()); // 3.如果是第num次，则表示该元素被淘汰
  }

  return {
    elimitated: elimitatedList,
    winner: queue.removeFront(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 9);
result.elimitated.forEach((name) => {
  console.log(`${name} 在🐔🥁🚢🌺中被淘汰`);
});
console.log(`胜利者：${result.winner}`);

// 回文检查
function palindromeChecker(params) {
  
}