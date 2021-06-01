// 检查集合中的所有元素是否都满足 fn 函数，是则返回 true
const all = (arr, fn = Boolean) => arr.every(fn);

console.log(
  'all([4, 2, 3], x => x > 1) :>> ',
  all([4, 2, 3], (x) => x > 1)
);
console.log('all([1, 2, 3]) :>> ', all([1, 2, 3]));
