// 千分符， 正则非正则两种方式实现
const a = 123456789;
const b = 67890123.3445;

console.log('a.toLocaleString() :>> ', a.toLocaleString());
console.log('b.toLocaleString() :>> ', b.toLocaleString('en-IN'));

function numFormat(num) {
  const res = num
    .toString()
    .replace(/\d+/, (res) => res.replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`));

  return res;
}

console.log('numFormat(a) :>> ', numFormat(a));
console.log('numFormat(b) :>> ', numFormat(b));

const reg = /\bhi\b/;
const str = 'hi';
// str.regRem(reg);
console.log('str.regRem(reg) :>> ', reg.exec(str));

var myRe = /d(b+)d/g;
// var myArray = myRe.exec('cdbbdbsbz');
console.log('myRe.exec(cdbbdbsbz) :>> ', myRe.exec('cdbbdbsbz'));
// /d(b+)d/g.exec('cdbbdbsbz');