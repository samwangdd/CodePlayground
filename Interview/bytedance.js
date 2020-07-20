// 千分符， 正则非正则两种方式实现
const a = 123456789;
const b = 67890123.3445;

// console.log('a.toLocaleString() :>> ', a.toLocaleString());
// console.log('b.toLocaleString() :>> ', b.toLocaleString('en-IN'));

function numFormat(num) {
  const res = num
    .toString()
    .replace(/\d+/, (res) => res.replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`));

  return res;
}

// console.log('numFormat(a) :>> ', numFormat(a));
// console.log('numFormat(b) :>> ', numFormat(b));

const reg = /\bhi\b/;
const str = 'hi';
// str.regRem(reg);
// console.log('str.regRem(reg) :>> ', reg.exec(str));

var myRe = /d(b+)d/g;
// var myArray = myRe.exec('cdbbdbsbz');
// console.log('myRe.exec(cdbbdbsbz) :>> ', myRe.exec('cdbbdbsbz'));
// /d(b+)d/g.exec('cdbbdbsbz');

/*
 * 事件监听类
 *
 * 功能：可以完成 on, once, trigger, off 等事件
 */
class EventTarget {
  constructor() {
    this.listeners = {};
  }

  // 监听事件
  on(type, cb) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(cb);
  }

  // 单次监听事件
  once(type, cb) {
    if (!this.listeners[type]) this.listeners[type] = [];
    cb._once = true;
    this.listeners[type].push(cb);
    console.log(`已监听${type}事件！`);
  }

  // 取消监听事件
  off(type, cb) {
    const list = this.listeners[type];
    if (Array.isArray(list)) {
      const index = list.indexOf(cb);
      if (index === -1) {
        throw new Error('取消监听失败，没有对应的 cb！');
      }
      list.splice(index, 1);
      if (!list.length) delete this.listeners[type];
      console.log(`已取消${type}事件！`);
    } else {
      throw new Error(`${type}事件不存在！`);
    }
  }

  // 触发事件
  trigger(event) {
    const { type } = event;
    if (!type) {
      throw new Error('没有指定事件的type！');
    }
    const list = this.listeners[type];
    if (!list) {
      throw new Error(`没有订阅${type}事件！`);
    }
    list.forEach((i) => {
      i(event);
      if (i._once) {
        this.off(type, i);
      }
    });
  }
}

const el = new EventTarget();
const cb1 = () => {
  console.log('success cb1:>> ');
};
const cb2 = () => {
  console.log('success cb2:>> ');
};
// el.off('click', cb2);
el.on('click', cb1);
el.trigger({ type: 'click' });
el.off('click', cb2);
// el.trigger({ type: 'click' });
