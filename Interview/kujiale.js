/**
 * ES5 实现继承
 */

// 实现一，通过 call，父类复写了原型方法，子类无法访问和继承
function parent1() {
  this.name = 'parent1';
  this.toString = '333';
}

function child1() {
  parent1.call(this);
  this.type = 'child1';
}

console.log('new child1 :>> ', new child1());

// 实现二，原型链
// 缺陷：多个child共享一个原型，若一个发生改变，会影响其他
function parent2() {
  this.name = 'parent2';
  this.play = [1, 2, 3];
}

function child2() {
  this.type = 'child2';
}

child2.prototype = new parent2(); // 原型链的桥接
console.log('new child2 :>> ', new child2());

// 实现三
function parent3() {
  this.name = 'parent2';
  this.play = [1, 2, 3];
}

function child3() {
  parent3.call(this); // 通过显示绑定，访问到 parent 中的属性
  this.type = 'child3';
}

child3.prototype = Object.create(parent3.prototype); // 不产生原型链桥接
child3.prototype.constructor = child3;
console.log('new child3() :>> ', new child3());

/**
 * 深拷贝
 *
 * @param {*} params
 */
function deepClone(data, hash = new WeakMap()) {
  if (typeof data !== 'object') return data;
  if (hash.get(data)) return hash.get(data); // 防止循环引用
  if (data instanceof Function) return data;
  if (data instanceof RegExp) return new RegExp(data);
  if (data instanceof Date) return new Date(data);
  const cache = new data.constructor(); // 构造初始值
  hash.set(data, cache);
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      cache[key] = deepClone(data[key], hash);
    }
  }
  return cache;
}

/**
 * call
 *
 * @param {*} params
 */
Function.prototype.callThis = function (context) {
  // 第一步，将 this 作为 context 的属性
  context.fn = this;
  const args = [];
  // 第二步，获取参数，注意 index 从 1 开始
  for (let index = 1; index < arguments.length; index++) {
    args.push(arguments[index]);
  }
  // 第三步，执行 fn
  context.fn(args);
  // 删除 fn 属性
  delete context.fn;
};

const bar = {
  name: 'balabala',
};

function foo(a, b, c) {
  console.log('name: >>', this.name + a + b + c);
}

// foo.callThis(bar, '变身', '美丽', '智慧', '大大大');

// bind
Function.prototype.bindThis = function (context, ...args1) {
  // 第一步，改变this，返回新函数
  const self = this;
  const func = function (...args2) {
    return self.apply(this instanceof func ? this : context, args1.concat(args2));
  };

  // 第二步，通过空函数中转，防止原型被修改
  const DumpFuntion = function () {};
  DumpFuntion.prototype = this.prototype;
  func.prototype = new DumpFuntion();

  return func;
};

foo.bindThis(bar)('变身', '美丽', '智慧');
