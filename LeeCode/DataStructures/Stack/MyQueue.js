//leetcode-cn.com/problems/implement-queue-using-stacks/solution/
/**
 * Initialize your data structure here.
 */
https: var MyQueue = function () {
  this.inputStack = [];
  this.outputStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.outputStack.length) {
    this.in2out();
  }
  return this.outputStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.outputStack.length) {
    this.in2out();
  }
  const length = this.outputStack.length;
  return this.outputStack[length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inputStack.length === 0 && this.outputStack.length === 0;
};

MyQueue.prototype.in2out = function () {
  while (this.inputStack.length) {
    this.outputStack.push(this.inputStack.pop());
  }
};
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
