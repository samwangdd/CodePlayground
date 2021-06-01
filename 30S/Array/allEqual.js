// 检查是否所有元素都相等
const allEqual = (arr) => arr.every((val) => val === arr[0]);

console.log('allEqual([1, 2, 3, 4, 5, 6]) :>> ', allEqual([1, 2, 3, 4, 5, 6]));
console.log('allEqual([1, 1, 1, 1]) :>> ', allEqual([1, 1, 1, 1]));
