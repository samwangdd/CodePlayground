/**
 * 桶排序（分治）
 * https://www.30secondsofcode.org/js/s/bucket-sort
 * @param {*} arr 原数组
 * @param {*} size 桶的大小
 */

function bucketSort(arr, size = 5) {
  // 创建桶
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const buckets = Array.from({ length: Math.floor(max - min) / size + 1 }, () => []);
  // 元素放到对应桶内
  arr.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val);
  });
  // 排序、合并桶
  return buckets.reduce((acc, cur) => [...acc, ...cur.sort((a, b) => a - b)], []);
}

console.time('bucketSort');
console.log('bucketSort([6, 3, 4, 1]) :>> ', bucketSort([6, 3, 4, 1]));
console.timeEnd('bucketSort');

console.time('sort');
console.log(
  'sort:>> ',
  [6, 3, 4, 1].sort((a, b) => a - b)
);
console.timeEnd('sort');
