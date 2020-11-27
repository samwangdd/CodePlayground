/*
   // 输入
    asd ehe  rjr
    d  erregrnt eruk
    rth sthst ar   gae

    // 输出
    [asd, ehe, rjr]
    [d, erregrnt, eruk]
    [rth, sthst, ar, gae]

 */
const str = 'asd ehe  rjr\nd  erregrnt eruk\nrth sthst ar   gae';

const res = str.split('\n').map((i) => i.split(' ').filter(Boolean));
console.log('res :>> ', res);

/*
 发布新闻时需要提醒发布的时间。写一个函数，传递一个参数为时间戳，完成时间的格式化。如果发布一分钟内，输出：刚刚；n 分钟前发布，输出：n分钟前；超过一个小时，输出：n小时前；超过一天，输出：n天前；但超过一个星期，输出发布的准确时间
 */
function getStamp(date) {
  const time = new Date().getTime() - date;
  console.log('time :>> ', time);
  const targetList = [6e4, 36e5, 864e5, 6048e5, time];
  const stampList = [
    '刚刚',
    `${parseInt(time / targetList[0])}分钟前`,
    `${parseInt(time / targetList[1])}小时前`,
    `${parseInt(time / targetList[2])}天前`,
    formatDate(time),
  ];
  const index = targetList.sort((a, b) => a - b).indexOf(time);
  console.log('index :>> ', index);
  return stampList[index];
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

console.log(getStamp(1586661760000));

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
