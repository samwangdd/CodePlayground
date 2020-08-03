/**
 * 用于对象数组去重
 *
 * @param {Array} arr
 */
/* function deduplication(arr) {
  const hash = new WeakMap();
  const res = [];
  arr.forEach((i) => {
    if (hash.has(i)) return;
    res.push(i);
    hash.set(i, true);
  });
  return res;
} */
function deduplication(arr) {
  return arr.reduce((acc, cur) => {
    const ids = acc.map((i) => i.id);
    return ids.includes(cur.id) ? acc : [...acc, cur];
  }, []);
}

const result = deduplication(responseList);
console.log('result :>> ', result);

// 说出下面代码的执行顺序
async function async1() {
  console.log(1);
  const result = await async2();
  console.log(3);
}

async function async2() {
  console.log(2);
  /* // 变体
  Promise.resolve().then(() => {
    console.log(2);
  }); */
}

Promise.resolve().then(() => {
  console.log(4);
});

setTimeout(() => {
  console.log(5);
});

async1();
console.log(6);
