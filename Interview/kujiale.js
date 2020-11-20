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

// 实现4 ES6 class
class parent4 {
  constructor() {}
  name() {
    return 'lee';
  }
}

class child4 extends parent4 {
  constructor() {
    super();
  }
}
const c4 = new child4();
console.log('c4 :>> ', c4.name());

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

function debounce(func, wait) {
  let timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    setTimeout(func, wait);
  };
}

function logger() {
  console.log('123 :>> ', 123);
}

function throttle(fn, wait) {
  // 通过闭包保存 run，是否可以执行
  let run = true;
  return function () {
    // 如果 run 为 false，直接 return
    if (!run) return;
    run = false;
    setTimeout(() => {
      fn();
      run = true;
    }, wait);
  };
}

/**
 * 实现 array.fill
 *
 * @param {*} arr
 * @param {*} val
 */
function fill(arr, val) {
  const arrRaw = [...arr];
  arrRaw.shift();
  const len = arrRaw.length;
  if (len) {
    return [val].concat(fill(arrRaw, val));
  } else {
    // ?? 为什么直接返回 val
    console.log('123 :>> ', 123);
    return val;
  }
}

const arr = [1, 2, 3];
console.log('fill(arr, 5) :>> ', fill(arr, 5));

/**
 * ES5 实现私有变量
 */
// 对象的私有变量
const customObj = (function () {
  let name = 'lee';
  return {
    name,
    set: function (val) {
      name = val;
    },
  };
})();

// 函数的私有变量
function Person(name) {
  let age = 18;
  this.name = name;
  this.getAge = function () {
    return age;
  };
  this.addAge = function () {
    return age++;
  };
}

var lee = new Person('lee');
console.log('lee.name :>> ', lee.name);
console.log('lee.age :>> ', lee.age);
console.log('lee.getAge() :>> ', lee.getAge());
console.log('lee.setAge() :>> ', lee.addAge());

/**
 * 实现 Promise.all
 * 1. 返回一个 promise
 * 2. 循环所有 promise 并执行
 * 3. 通过计数器判断是否所有 promise 已经执行完成
 * 4. 如果失败则后续不再执行
 */
function PromiseAll(promiseArr) {
  let count = 0;
  const result = [];
  const promiseLen = promiseArr.length;
  return new Promise((resolve, reject) => {
    for (const promise of promiseArr) {
      // 如果元素不是 Promise 对象，则使用 Promise.resolve 转成 Promise 对象
      Promise.resolve(promise).then(
        (res) => {
          count++;
          // 使用 push，不能判断哪个 res 先返回
          result.push(res);
          if (count === promiseLen) {
            resolve(result);
          }
        },
        (err) => {
          return reject(err);
        }
      );
    }
  });
}

function _PromiseAll(promiseArr) {
  const len = promiseArr.length;
  const resArr = Array.from(len);
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(promiseArr[i]).then(
        (res) => {
          resArr[i] = res;
          count++;
          if (count === len) resolve(resArr);
        },
        (err) => reject(err)
      );
    }
  });
}

/**
 * 异步并发请求
 * @param {Promise<Array>} requests promise数组
 * @param {*} limit 并发数量
 */
const concurrencyPromise = (requests, limit) => {
  const results = [];
  const totalRequests = [...requests];
  let resolveCount = 0;

  const handlePromise = (promise) => {
    return new Promise((resolve, reject) => {
      promise.then((res) => resolve(res)).catch((e) => reject(e));
    });
  };

  return new Promise((resolve) => {
    // 模拟开启limit个线程
    for (let i = 1; i <= limit; i++) {
      invokeThread();
    }

    function invokeThread() {
      if (!totalRequests.length) return;
      const current = totalRequests.shift();
      handlePromise(current)
        .then((res) => results.push(res))
        .finally(() => {
          resolveCount += 1;
          if (resolveCount === requests.length) {
            resolve(results);
          }
          // promise done之后 获取新的promise执行
          invokeThread();
        });
    }
  });
};

const reqs = Array.from(
  { length: 5 },
  (_, index) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(index);
      }, 1000);
    })
);

const task = [];
const addTask = (time, order) => {
  task.push(
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(order);
      }, time);
    })
  );
};
addTask(400, 4);
addTask(200, 2);
addTask(300, 3);
addTask(100, 1);

console.log('task :>> ', task);

concurrencyPromise(task, 2)
  .then((res) => {
    console.log('res :>> ', res);
  })
  .catch((err) => console.log('err2 :>> ', err));

/**
 * promise 重试函数
 * 解决 promise 失败后可重新执行
 * 如：网络请求失败后（如超时，网络抖动），重新发起请求，可设置请求间隔和最大重复请求次数
 *
 * @param {PromiseLike} fn
 * @param {Number} interval 时间间隔，ms
 * @param {Number} limit 最大重复请求次数
 */
function promiseLimit(fn, interval, limit) {
  let tryTimes = limit;
  return new Promise((resolve, reject) => {
    fn.then((res) => resolve(res)).catch((err) => {
      if (tryTimes > 0) {
        setTimeout(() => {
          console.log('tryTimes :>> ', tryTimes);
          promiseLimit(fn, interval, --tryTimes);
        }, interval);
      } else {
        reject(err);
      }
    });
  });
}

const promiseErr = new Promise(() => {
  throw new Error('boom!');
});

promiseLimit(promiseErr, 2000, 3)
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => console.error('err :>> ', err));

function handleClick(params, callback) {
  dosomething(params);
  if (success) {
    callback();
  }
}

const promiseErr = new Promise((resovle, reject) => {
  reject('asd');
});

async function handlPromise(params) {
  const res = await promiseErr;
  console.log('res :>> ', res);
}

function test(params) {
  console.log(1);
  setTimeout(() => {
    console.log('2 :>> ', 2);
  }, 2000);
  setTimeout(() => {
    console.log('3 :>> ', 3);
  }, 0);
  console.log('4 :>> ', 4);
}

test();
