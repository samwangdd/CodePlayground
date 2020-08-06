/**
 * 深拷贝
 *
 */
function deepClone(target, hash = new WeakMap()) {
  if (typeof target !== 'object') return target;
  if (hash.has(target)) return hash.get(target);
  if (target instanceof RegExp) return new RegExp(target);
  if (target instanceof Date) return new Date(target);
  // 创建一个 target 子元素容器
  const cache = new target.constructor();
  hash.set(target, cache);
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      cache[key] = deepClone(target[key], hash);
    }
  }
  return cache;
}

const obj = { a: 'bbb', b: 123, c: { d: false }, e: Function, f: Date };
const objC = deepClone(obj);
obj.a = 'aaa';
const objS = Object.assign(obj);
console.log('objS :>> ', objS);
console.log('objC :>> ', objC);

/**
 * 事件绑定
 * @param {*} context
 * @param  {...any} arg
 */
Function.prototype.bind2 = function (context, ...args1) {
  if (typeof this !== 'function') {
    throw new Error('not a function');
  }
  let self = this;
  let resFn = function (...args2) {
    // 当 bind 返回的函数作为构造函数时（通过 new 构造），this指向实例;
    return self.apply(this instanceof resFn ? this : context, args1.concat(args2));
  };

  // 如果将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype
  // 通过 DumpFunction 中转
  const DumpFunction = function () {};
  DumpFunction.prototype = this.prototype;
  resFn.prototype = new DumpFunction();

  return resFn;
};

function objectFactory(constructor, ...args) {
  const obj = new Object();
  obj._proto_ = constructor.prototype;
  const res = constructor.apply(obj, args);
  return typeof res === 'object' ? res : obj;
}

function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return 'handsome boy';
}

const obj = objectFactory(Otaku);
console.log('obj :>> ', obj);
