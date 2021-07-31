// import Stack from './customStack';
// const { Stack } = require('./customStack');

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

function decimalToBinary(decimal, base = 2) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rem;
  let num = decimal;
  let binaryStr = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (num > 0) {
    rem = Math.floor(num % base);
    remStack.push(rem);
    num = Math.floor(num / base);
  }

  while (!remStack.isEmpty()) {
    binaryStr += digits[remStack.pop()];
  }

  return binaryStr;
}

function toBin(dec) {
  var bits = [];
  var dividend = dec;
  var remainder = 0;
  while (dividend >= 2) {
    remainder = dividend % 2;
    bits.push(remainder);
    dividend = (dividend - remainder) / 2;
  }
  bits.push(dividend);
  bits.reverse();
  return bits.join('');
}

console.log('str :>> ', decimalToBinary(10, 32));
console.log('str :>> ', toBin(10));
