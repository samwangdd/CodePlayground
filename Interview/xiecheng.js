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

  // 如果将 resFn.prototype = this.prototype，我们直接修改 resFn.prototype 的时候，也会直接修改绑定函数的 prototype
  // 通过 DumpFunction 中转
  const DumpFunction = function () {};
  DumpFunction.prototype = this.prototype;
  resFn.prototype = new DumpFunction();

  return resFn;
};

/**
 * 手动实现 new
 *
 * @param {*} constructor 构造函数
 * @param {*} args 参数
 * @returns
 */
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

/**
 * 自动柯里化，支持单参函数
 * @param {Function} fn
 * @param  {...any} args1 参数
 */
const curry = (fn, ...args1) => (...args2) =>
  ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, ...arg)))([...args1, ...args2]);

const foo = (a, b, c) => a * b * c;
const res = curry(foo)(2)(3)(4);

function getType(obj) {
  if (obj === null) return String(obj);
  return typeof obj === 'object'
    ? Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '').toLowerCase()
    : typeof obj;
}

console.log('type', [
  getType(NaN),
  getType('123'),
  getType(11),
  getType({ foo: 'a' }),
  getType([123]),
]);

const filter = (arr) => (cb) => {
  const res = [];
  arr.forEach((i) => {
    if (cb(i)) {
      res.push(cb(i));
    }
  });
  return res;
};

const arr = [1, 2, 3, 4];
const cbfn = (i) => {
  if (i % 2 === 0) {
    return i;
  }
};
console.log('filter :>> ', filter(arr)(cbfn));
console.log(Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);

var symbolObject = Object(Symbol('a'));

var symbolObject = Object(Symbol('a'));

console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]

var o = {
  valueOf: () => {
    console.log('valueOf');
    return {};
  },
  toString: () => {
    console.log('toString');
    return {};
  },
};

o[Symbol.toPrimitive] = () => {
  console.log('toPrimitive');
  return 'hello';
};

console.log(o + '');
// toPrimitive
// hello

/**
 * 数组扁平化
 *
 * @param {*} arr
 * @param {*} deep
 */
/* function flatArray(arr, deep = 1) {
  let count = 0;
  while (arr.some((item) => Array.isArray(item)) && count < deep) {
    arr = [].concat(...arr);
    count++;
  }
  return arr;
} */

/* function flatArray(arr = [], n = 1) {
  let resArr = arr;
  while (n > 0) {
    resArr = resArr.reduce((acc, val) => {
      return acc.concat(val);
    }, []);
    n += -1;
  }
  return resArr;
} */
function flatArray(arr, deep = 1) {
  const flat = function* (array, time = 0) {
    for (const item of array) {
      let innerTime = 0;
      console.log('innerTime :>> ', innerTime);
      console.log('time :>> ', time);
      // console.log('deep :>> ', deep);
      if (Array.isArray(item) && time < deep) {
        innerTime++;
        yield* flat(item, innerTime);
      } else {
        yield item;
      }
    }
  };

  return [...flat(arr)];
}

/**
 * 数组扁平化
 *
 * @param {Array} arr 目标数组
 * @returns {Array}
 */
/* function flatArray(arr) {
  const flat = function* (array) {
    if (!Array.isArray(array)) yield array;
    else for (let el of array) yield* flat(el);
  };

  return [...flat(arr)];
} */

const res = flatArray(
  [
    [1, 2],
    [2, 4],
    [[4, 5], [[5, 6]]],
  ],
  3
);

console.log(res);
