class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
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
  addBack(e) {
    this.items[this.count] = e;
    this.count++;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
}

const myDeque = new Deque();
myDeque.addBack('3');
console.log('myDeque :>> ', myDeque);
myDeque.addFront('2');
console.log('myDeque.lowest :>> ', myDeque.lowestCount);
console.log('myDeque :>> ', myDeque);
