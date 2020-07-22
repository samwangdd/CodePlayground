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

const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 1 },
];

const result = deduplication(responseList);
console.log('result :>> ', result);
